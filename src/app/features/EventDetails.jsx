import {
  Autocomplete,
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import {
  CLIENT_DATA,
  EVENTS_DATA,
  task_columns,
  TASK_DATA,
  USER_ROWS,
} from "../constants/dataConstant";
import { EventTaskForm } from "./EventTaskForm";

export const EventDetails = () => {
  const [searchParams] = useSearchParams();

  const [isCardVisible1, setIsCardVisible1] = useState(false);

  const eventData = useMemo(() => {
    const id = searchParams.get("eventId");
    const data = EVENTS_DATA.find((e) => e.id == id);
    return data;
  }, [searchParams]);

  return (
    <Box>
      <Typography variant="h2" mb={3}>
        Event Details
      </Typography>
      <Grid container mb={3} gap={2}>
        <Grid md={2}>
          <Typography fontWeight="bold">Event Name</Typography>
          <Typography>{eventData.eventName}</Typography>
        </Grid>
        <Grid md={2}>
          <Typography fontWeight="bold">Event Date</Typography>
          <Typography>{eventData.eventDate}</Typography>
        </Grid>
        <Grid md={2}>
          <Typography fontWeight="bold">Client</Typography>
          <Typography>{eventData.organizer}</Typography>
        </Grid>
        <Grid md={2}>
          <Typography fontWeight="bold">Event Location</Typography>
          <Typography>{eventData.location}</Typography>
        </Grid>
        <Grid md={2}>
          <Typography fontWeight="bold">Event Type</Typography>
          <Typography>{eventData.type}</Typography>
        </Grid>
        <Grid md={2}>
          <Typography fontWeight="bold">Event Start Date</Typography>
          <Typography>{eventData.beginDate}</Typography>
        </Grid>
        <Grid md={2}>
          <Typography fontWeight="bold">Event End Date</Typography>
          <Typography>{eventData.endDate}</Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid md={4}>
          <Autocomplete
            defaultValue={USER_ROWS[0].name}
            options={USER_ROWS.filter((e) => e.role !== "Executive").map(
              (e) => e.name
            )}
            renderInput={(params) => (
              <TextField {...params} label="Assign Event To" />
            )}
          />
        </Grid>
        <Grid
          md={8}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Button variant="contained" sx={{ ml: 2 }}>Assign Event</Button>
        </Grid>
      </Grid>

      <Grid container my={2}>
        <Grid md={4}>
          <Autocomplete
            defaultValue={TASK_DATA[0].taskName}
            options={TASK_DATA.map((e) => e.taskName)}
            renderInput={(params) => <TextField {...params} label="Add Task" />}
          />
        </Grid>
        <Grid
          md={8}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Button variant="contained" sx={{ ml: 2 }}>Add Task</Button>
        </Grid>
      </Grid>

      <Grid container>
        <Grid md={4}>
          <Autocomplete
            defaultValue={CLIENT_DATA[0].company}
            options={CLIENT_DATA.map((c) => c.company)}
            renderInput={(params) => (
              <TextField {...params} label="Add Client" />
            )}
          />
        </Grid>
        <Grid
          md={8}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Button variant="contained" sx={{ ml: 2 }}>Add Client</Button>
        </Grid>
      </Grid>

      <Typography fontSize={15} fontWeight={700} mt={3}>
        Tasks
      </Typography>
      <Grid container>
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
            rows={eventData?.task ?? []}
            columns={task_columns}
            pageSize={10}
            pageSizeOptions={[5, 10, 20]}
            showAction
          />
        </Grid>
      </Grid>
    </Box>
  );
};
