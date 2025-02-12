import {
  Autocomplete,
  Box,
  Button,
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
import DynamicFormGenerator from "../components/DynmicFormGenerator";
import {
  TASK_COLUMNS,
  TASK_DATA,
  TeamMembersColumns,
  TEAMS_DATA,
  USER_ROWS,
} from "../constants/dataConstant";

export const TeamView = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [rows, setRows] = useState([]);

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
    <Box>
      <Typography variant="h2" mb={2}>
        Team Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={5}>
          <Box
            sx={{
              maxHeight: "45vh",
              overflowY: "auto",
              overflowX: "hidden",
              position: "relative",
            }}
          >
            <Grid container spacing={2} mt={1}>
              <Grid item md={12}>
                <TextField
                  fullWidth
                  required
                  defaultValue={teamData.name}
                  label="Team Name"
                  sx={{ mr: 2 }}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  fullWidth
                  required
                  defaultValue={teamData.desc}
                  label="Description"
                />
              </Grid>
              <Grid item md={12}>
                <Autocomplete
                  options={["Chris Evans", "Lucas Harris", "William Phillips"]}
                  defaultValue={teamData.manager}
                  renderInput={(params) => (
                    <TextField {...params} label="Manager" />
                  )}
                />
              </Grid>
              <Grid item md={12}>
                <Autocomplete
                  options={["Mason Martinez", "Benjamin Adamss"]}
                  defaultValue={"Mason Martinez"}
                  renderInput={(params) => (
                    <TextField {...params} label="Team Lead" />
                  )}
                />
              </Grid>
              <Grid item md={12}>
                <DynamicFormGenerator
                  columns={createTeamColumns}
                  fieldGridSize={8}
                />
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
                  background: "white",
                }}
              >
                <Button variant="contained">Save</Button>
              </Grid>
            </Grid>
          </Box>
        </Grid>

        <Grid item md={7}>
          <AppDataGrid
            rows={rows}
            editMode="row"
            label="Team Members"
            columns={TeamMembersColumns}
            showAction={true}
            height={300}
          />
        </Grid>
      </Grid>

      <Grid container mt={2}>
        <Grid md={12}>
          <AppDataGrid
            showAction
            rows={TASK_DATA}
            columns={TASK_COLUMNS}
            label="Sub Activities"
            pageSize={10}
            height={350}
            pageSizeOptions={[5, 10, 20]}
            onRowClick={(row) =>
              navigate({
                pathname: "/sub-activity-details",
                search: createSearchParams({
                  taskId: row.id,
                }).toString(),
              })
            }
          />
        </Grid>
      </Grid>
    </Box>
  );
};
