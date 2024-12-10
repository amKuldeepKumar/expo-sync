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
import { useState } from "react";
import AppDataGrid from "../components/AppDataGrid";
import {
  EVENTS_DATA,
  TASK_COLUMNS,
  TASK_DATA,
  TEAMS_DATA,
  VENDORS_DATA,
} from "../constants/dataConstant";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { createSearchParams, useNavigate } from "react-router-dom";

export const Tasks = () => {
  const navigate = useNavigate();

  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  const handleTaskClick = (row) => {
    navigate({
      pathname: "/task-details",
      search: createSearchParams({
        taskId: row.id,
      }).toString(),
    });
  };

  return (
    <Box>
      <Typography fontWeight={700} fontSize={25} color="primary" mb={2}>
        Tasks
      </Typography>
      <Card sx={{ mb: 2 }}>
        <Button onClick={toggleCardVisibility}>
          {isCardVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}{" "}
          {!isCardVisible && "Add"}
        </Button>

        <Collapse in={isCardVisible} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={4} sm={4} xs={12}>
                <TextField
                  required
                  fullWidth
                  id="outlined-required-1"
                  label="Name"
                />
              </Grid>

              <Grid item md={4} sm={4} xs={12}>
                <Autocomplete
                  options={TEAMS_DATA.map((t) => t.name)}
                  renderInput={(params) => (
                    <TextField {...params} label="Team" />
                  )}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <Autocomplete
                  options={TEAMS_DATA[0].am[0].tl[0].executive.map(
                    (e) => e.name
                  )}
                  renderInput={(params) => (
                    <TextField {...params} label="Team Member" />
                  )}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <Autocomplete
                  options={EVENTS_DATA.map((e) => e.eventName)}
                  renderInput={(params) => (
                    <TextField {...params} label="Assign To Event" />
                  )}
                />
              </Grid>

              <Grid item md={4} sm={4} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker label="Due Date" sx={{ width: "100%" }} />
                </LocalizationProvider>
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <Autocomplete
                  options={[
                    "Not Started",
                    "In Progress",
                    "Pending",
                    "Completed",
                  ]}
                  renderInput={(params) => (
                    <TextField {...params} label="Status" />
                  )}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <Autocomplete
                  options={VENDORS_DATA.map((v) => v.name)}
                  renderInput={(params) => (
                    <TextField {...params} label="Vendor" />
                  )}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sx={{ display: "flex", justifyContent: "end" }}
              >
                <Button variant="contained">Create</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
      <AppDataGrid
        showAction
        rows={TASK_DATA}
        columns={TASK_COLUMNS}
        label="Tasks"
        showSearching={true}
        pageSize={10}
        pageSizeOptions={[5, 10, 20]}
        onRowClick={handleTaskClick}
      />
    </Box>
  );
};
