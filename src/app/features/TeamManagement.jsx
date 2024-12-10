/* eslint-disable no-unused-vars */
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
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
import { ManagersColumns, TEAMS_DATA } from "../constants/dataConstant";

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
      pathname: "/team-details",
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

  // const createTeamColumns = [
  //   { name: "name", label: "Full Name", type: "text" },
  //   { name: "email", label: "Email", type: "text" },
  //   { name: "mobile", label: "Mobile", type: "number" },
  //   {
  //     name: "designation",
  //     label: "Designation",
  //     type: "select",
  //     options: [
  //       { label: "Manager", value: "Manager" },
  //       { label: "Assistant Manager", value: "AssistantManager" },
  //       { label: "Team Lead", value: "TeamLead" },
  //       { label: "Executive", value: "Executive" },
  //     ],
  //   },
  // ];

  const handelSave = (teamObj) => {
    console.log(teamObj);
  };
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
              <CardContent>
                {/* <DynmicFormGenerator
                  columns={createTeamColumns}
                  onSaveClick={handelSave}
                /> */}
                <TextField required label="Team Name" sx={{ mr: 2 }} />
                <TextField required label="Description" />
                <Grid
                  item
                  xs={12}
                  sx={{ display: "flex", justifyContent: "end" }}
                >
                  <Button variant="contained">Create</Button>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Card>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={12}>
                <AppDataGrid
                  rows={TEAMS_DATA}
                  label="Teams"
                  columns={ManagersColumns}
                  onRowClick={handleManagerClick}
                  showAction={true}
                  showSearching={true}
                  defaultSelectedRow={teams[0].id}
                  height={280}
                />
              </Grid>
              {/* <Grid item xs={12} md={6}>
                <AppDataGrid
                  rows={amData}
                  label="Assistant Managers"
                  columns={AssistantManagersColumns}
                  defaultSelectedRow={teams[0].am[0].id}
                  onRowClick={handleAMClick}
                  height={280}
                />
              </Grid>
              <Grid item xs={12} md={6} mt={2}>
                <AppDataGrid
                  rows={tlData}
                  label="Team Leads"
                  columns={TeamLeadColumns}
                  defaultSelectedRow={teams[0].am[0].tl[0].id}
                  onRowClick={handleTLClick}
                  height={280}
                />
              </Grid>
              <Grid item xs={12} md={6} mt={2}>
                <AppDataGrid
                  rows={executiveData}
                  label="Executives"
                  columns={ExecutiveColumn}
                  onRowClick={() => {}}
                  height={280}
                />
              </Grid> */}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TeamManagement;
