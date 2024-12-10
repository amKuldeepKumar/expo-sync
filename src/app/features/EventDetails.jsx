import {
  Box,
  Button,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import {
  EVENTS_DATA,
  task_columns,
  TASK_DATA,
  USER_ROWS
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
          <InputLabel id="demo-simple-select-label">Assign Event To</InputLabel>
          <Select
            fullWidth
            label="Assign Event To"
            defaultValue={eventData.eventName}
          >
            {USER_ROWS.filter((e)=>e.role!=='Executive').map((e) => e.name).map((option, i) => (
              <MenuItem key={i} value={i + 10}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid
          md={8}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Button variant="contained" sx={{ mt: 3, ml: 2 }}>
            Assign Event
          </Button>
        </Grid>
      </Grid>


      <Grid container>
        <Grid md={4}>
          <InputLabel id="demo-simple-select-label">Add Task </InputLabel>
          <Select
            fullWidth
            label="Add Task"
            defaultValue={eventData.eventName}
          >
            {TASK_DATA.map((e) => e.taskName).map((option, i) => (
              <MenuItem key={i} value={i + 10}>
                {option}
              </MenuItem>
            ))}
          </Select>
        </Grid>
        <Grid
          md={8}
          display="flex"
          alignItems="center"
          justifyContent="flex-start"
        >
          <Button variant="contained" sx={{ mt: 3, ml: 2 }}>
            Add Task
          </Button>
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
