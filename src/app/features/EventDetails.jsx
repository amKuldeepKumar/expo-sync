import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import {
  EVENTS_DATA,
  TASK_COLUMNS,
  TASK_DATA,
  USER_ROWS,
} from "../constants/dataConstant";
import { EventTaskForm } from "./EventTaskForm";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

export const EventDetails = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isCardVisible1, setIsCardVisible1] = useState(false);

  const eventData = useMemo(() => {
    const id = searchParams.get("eventId");
    const data = EVENTS_DATA.find((e) => e.id == id);
    return data;
  }, [searchParams]);

  const handleTaskClick = (row) => {
    navigate({
      pathname: "/sub-activity-details",
      search: createSearchParams({
        taskId: row.id,
      }).toString(),
    });
  };

  return (
    <Box>
      <Typography variant="h2" mb={3}>
        Activity Details
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={4} sm={4} xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required-1"
            label="Name"
            defaultValue={eventData.eventName}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required-1"
            label="Activity Detail"
            defaultValue={eventData.eventDetails}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Activity Date"
              sx={{ width: "100%" }}
              defaultValue={dayjs(eventData.eventDate)}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <TextField
            disabled
            fullWidth
            id="outlined-required-1"
            label="Client"
            defaultValue={eventData.organizer}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required-1"
            label="Location"
            defaultValue={eventData.location}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Autocomplete
            defaultValue={eventData.type}
            options={[
              "Meetings",
              "Conferences",
              "Seminars/Workshops",
              "Weddings",
              "Concerts",
              "Exhibitions",
            ]}
            renderInput={(params) => (
              <TextField {...params} label="Activity Type" />
            )}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Autocomplete
            defaultValue={eventData.status}
            options={["Ongoing", "Not Started", "Completed", "Pending"]}
            renderInput={(params) => <TextField {...params} label="Status" />}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Start Date"
              sx={{ width: "100%" }}
              defaultValue={dayjs(eventData.beginDate)}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="End Date"
              sx={{ width: "100%" }}
              defaultValue={dayjs(eventData.endDate)}
            />
          </LocalizationProvider>
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Autocomplete
            defaultValue={eventData.assignedTo}
            options={USER_ROWS.filter((e) => e.role !== "Executive").map(
              (e) => e.name
            )}
            renderInput={(params) => (
              <TextField {...params} label="Assign Activity To" />
            )}
          />
        </Grid>

        <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained">Save</Button>
        </Grid>
      </Grid>

      <Grid container mt={2}>
        <Grid item md={12} sm={12}>
          <EventTaskForm
            isVisible={isCardVisible1}
            toggleVisibility={() => setIsCardVisible1(!isCardVisible1)}
            formType="task"
            //   onCreate={handleCreateTask}
          />
        </Grid>

        <Grid item md={12} sm={12} mt={2}>
          <AppDataGrid
            showAction
            commentIcon
            rows={TASK_DATA}
            columns={TASK_COLUMNS}
            label="Sub Activities"
            showSearching={true}
            pageSize={10}
            pageSizeOptions={[5, 10, 20]}
            onRowClick={handleTaskClick}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
