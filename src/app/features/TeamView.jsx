import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import {
  events_columns,
  EVENTS_DATA,
  TeamMembersColumns,
  TEAMS_DATA,
} from "../constants/dataConstant";

export const TeamView = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [rows, setRows] = useState([]);
  const [isCardVisible, setIsCardVisible] = useState(false);

  const teamData = useMemo(() => {
    const teamId = searchParams.get("teamId");
    const data = TEAMS_DATA.find((t) => t.id == teamId);
    return data;
  }, [searchParams]);

  useEffect(() => {
    const rowsData = [
      {
        id: teamData.id + teamData.name,
        name: teamData.manager,
        role: "Manager",
      },
    ];

    teamData.am.forEach((a) => {
      a.tl.forEach((l) => {
        const leader = {
          id: l.id + l.name,
          name: l.name,
          role: "Team Leader",
        };
        rowsData.push(leader);
        l.executive.forEach((e) => {
          const extv = { id: e.id + e.name, name: e.name, role: "Executive" };
          rowsData.push(extv);
        });
      });
    });

    setRows([...rowsData]);
  }, [teamData]);

  // const handleNewClick = () => {
  //   const id = (rows.length + 1).toString();
  //   setRows([{ id: id, name: "", role: "" }, ...rows]);
  //   setRowModel({
  //     [id]: { mode: GridRowModes.Edit, fieldToFocus: "name" },
  //   });
  // };

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  const selectOptions = [
    {
      label: "Role",
      options: ["Manager", "Team Lead", "Executive"],
    },
    {
      label: "Employees",
      options: [
        "member A",
        "member B",
        "member C",
        "member D",
        "member E",
        "member F",
        "member G",
        "member H",
        "member I",
      ],
    },
  ];

  return (
    <Box>
      <Typography variant="h2" mb={2}>
        Team Details
      </Typography>
      <TextField
        required
        label="Team Name"
        defaultValue={teamData.name}
        sx={{ mr: 2 }}
      />
      <TextField required label="Description" sx={{ mb: 2 }} />

      <Card>
        <Button onClick={toggleCardVisibility}>
          {isCardVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}{" "}
          {!isCardVisible && "Add Team Member"}
        </Button>

        <Collapse in={isCardVisible} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container>
              {selectOptions.map((o) => (
                <Grid item key={o.label} md={4} mr={2}>
                  <Autocomplete
                    options={o.options}
                    renderInput={(params) => (
                      <TextField {...params} label={o.label} />
                    )}
                  />
                </Grid>
              ))}
              <Grid md={3} display="flex" alignItems="center">
                <Button variant="contained">Add</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
      <Grid container gap={4} mt={2}>
        <Grid md={12} mb={2}>
          <AppDataGrid
            rows={rows}
            editMode="row"
            label="Team Members"
            columns={TeamMembersColumns}
            showAction={true}
            height={400}
          />
        </Grid>
        <Grid md={12}>
          <AppDataGrid
            showAction
            rows={EVENTS_DATA}
            columns={events_columns}
            label="Team Events"
            pageSize={10}
            pageSizeOptions={[5, 10, 20]}
            onRowClick={(row) =>
              navigate({
                pathname: "/events-details",
                search: createSearchParams({
                  eventId: row.id,
                }).toString(),
              })
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};
