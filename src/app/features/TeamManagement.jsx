/* eslint-disable no-unused-vars */
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import DynamicFormGenerator from "../components/DynmicFormGenerator";
import {
  ManagersColumns,
  TEAMS_DATA,
  USER_ROWS,
} from "../constants/dataConstant";

const TeamManagement = () => {
  const navigate = useNavigate();

  const [selectedManager, setSelectedManager] = useState(null);
  const [selectedAM, setSelectedAM] = useState(null);
  const [selectedTL, setSelectedTL] = useState(null);
  const [amData, setAmData] = useState([]);
  const [tlData, setTlData] = useState([]);
  const [executiveData, setExecutiveData] = useState([]);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const teams = TEAMS_DATA;

  const updateData = (manager) => {
    const selectedTeam = teams.find((team) => team.id === manager.id);
    const selectedAMData = selectedTeam?.am || [];
    setAmData(selectedAMData);
    setSelectedAM(null);
    setSelectedTL(null);

    const allTls = selectedAMData.flatMap((entry) => entry?.tl || []);
    const allExecutive = allTls.flatMap((entry) => entry?.executive || []);
    setExecutiveData(allExecutive);
    setTlData(allTls);
  };

  const handleManagerClick = (team) => {
    navigate({
      pathname: "/internals-teams-details",
      search: createSearchParams({
        teamId: team.id,
      }).toString(),
    });
    setSelectedManager(team);
    updateData(team);
  };

  const handleAMClick = (am) => {
    setSelectedAM(am.id);
    const allAms = TEAMS_DATA.flatMap((e) => e.am);

    const currentAm = allAms.filter((e) => e.id === am.id);

    const alltl = currentAm.flatMap((e) => e.tl);
    setTlData(alltl);

    const allExecutive = alltl.flatMap((e) => e.executive);

    setExecutiveData(allExecutive);
    setSelectedTL(alltl[0].id);
  };

  const handleTLClick = (tl) => {
    const allAms = TEAMS_DATA.flatMap((e) => e.am);

    const allTls = allAms.flatMap((e) => e.tl);

    const currentTl = allTls.filter((e) => e.id === tl.id);

    const allExecutives = currentTl.flatMap((e) => e.executive);
    setExecutiveData(allExecutives);
  };

  const generateRows = (data, parentField) => {
    return data.map((item) => ({
      id: item.id,
      name: item.name,
      [parentField]: selectedManager ? selectedManager.manager : "",
    }));
  };

  const managersRows = teams.map((team) => ({
    id: team.id,
    name: team.manager,
  }));

  const assistantManagersRows = generateRows(amData, "manager");
  const teamLeadRows = generateRows(tlData, "am");

  // useEffect(() => {
  //   handleManagerClick(teams[0]);
  // }, []);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  const createTeamColumns = [
    {
      name: "executive",
      label: "Executive",
      type: "select",
      options: USER_ROWS.filter(
        (u) =>
          u.role != "Manager" &&
          u.role != "Team Lead" &&
          u.role != "Assistent Manager"
      ).map((f) => f.name),
    },
  ];

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} mt={0}>
        <Grid md={12} sm={12} xs={12} mb={2}>
          <Card>
            <Button onClick={toggleCardVisibility}>
              {isCardVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}{" "}
              {!isCardVisible && "Create Team"}
            </Button>

            <Collapse in={isCardVisible} timeout="auto" unmountOnExit>
              <CardContent sx={{ maxHeight: "40vh", overflow: "auto" }}>
                <Grid container spacing={2}>
                  <Grid item md={4}>
                    <TextField
                      fullWidth
                      required
                      label="Team Name"
                      sx={{ mr: 2 }}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <TextField
                      fullWidth
                      required
                      label="Description"
                      sx={{ mb: 2 }}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <Autocomplete
                      options={[
                        "Chris Evans",
                        "Lucas Harris",
                        "William Phillips",
                      ]}
                      renderInput={(params) => (
                        <TextField {...params} label="Manager" />
                      )}
                    />
                  </Grid>
                  <Grid item md={4}>
                    <Autocomplete
                      options={["Mason Martinez", "Benjamin Adamss"]}
                      renderInput={(params) => (
                        <TextField {...params} label="Team Lead" />
                      )}
                    />
                  </Grid>
                  <Grid item md={12} mt={2}>
                    <DynamicFormGenerator columns={createTeamColumns} />
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    sx={{
                      display: "flex",
                      justifyContent: "end",
                      position: "sticky",
                      bottom: 0,
                      right: 0,
                    }}
                  >
                    <Button variant="contained">Save</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid container spacing={2} mt={2}>
          <Grid item md={12}>
            <AppDataGrid
              rows={TEAMS_DATA}
              label="Teams"
              columns={ManagersColumns}
              onRowClick={handleManagerClick}
              showAction={true}
              showSearching={true}
              defaultSelectedRow={teams[0].id}
              height={300}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TeamManagement;
