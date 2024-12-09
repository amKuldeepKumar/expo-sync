/* eslint-disable react/prop-types */
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useEffect, useState } from "react";
import AppDataGrid from "../components/AppDataGrid";
import { events_columns, EVENTS_DATA, task_columns } from "../constants/dataConstant";

// Reusable Form Component for Event/Task creation
const EventTaskForm = ({ isVisible, toggleVisibility, formType, onCreate }) => {
  const fields = [
    { label: `${formType === "event" ? "Event" : "Task"} Name`, required: true },
    { label: `${formType === "event" ? "Event" : "Task"} Description`, required: true },
    { label: "Remarks", required: true },
    { label: "Assigned To", required: true },
  ];

  const datePickers = [
    { label: "Begin Date", Component: DatePicker },
    { label: "End Date", Component: DateTimePicker },
    { label: "Follow-up Date", Component: DatePicker },
  ];

  const selectOptions = [
    { label: "Type", options: ["Meetings", "Conferences", "Seminars/Workshops", "Weddings", "Concerts", "Exhibitions"] },
    { label: "Status", options: ["Ongoing", "Not Started", "Completed", "Pending"] },
  ];

  return (
    <Card>
      <Button onClick={toggleVisibility}>
        {isVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        {formType === "event" && !isVisible && "Create Event"}
        {formType === "task" && !isVisible && "Create Task"}
      </Button>

      <Collapse in={isVisible} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container spacing={2}>
            {fields.map(({ label, required }, index) => (
              <Grid key={index} item md={4} sm={4} xs={12}>
                <TextField required={required} fullWidth label={label} />
              </Grid>
            ))}

            {selectOptions.map(({ label, options }, index) => (
              <Grid key={index} item md={4} sm={4} xs={12}>
                <Select fullWidth label={label} defaultValue={options[0]}>
                  {options.map((option, i) => (
                    <MenuItem key={i} value={i + 10}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            ))}

            {datePickers.map(({ label, Component }, index) => (
              <Grid key={index} item md={4} sm={4} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Component fullWidth label={label} />
                </LocalizationProvider>
              </Grid>
            ))}

            <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
              <Button variant="contained" onClick={onCreate}>
                Create
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};

const Events = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isCardVisible1, setIsCardVisible1] = useState(false);
  const [tasksData, setTasksData] = useState([]);

  useEffect(() => {
    setTasksData(EVENTS_DATA[0].task);
  }, []);

  const handleCreateEvent = () => {
    console.log("Event created");
  };

  const handleCreateTask = () => {
    console.log("Task created");
  };

  const handleEditRow = (row) => {
    console.log("Edit row:", row);
  };

  const handleDeleteRow = (row) => {
    console.log("Delete row:", row);
  };

  const handleEventClick = (row) => {
    const data = EVENTS_DATA.filter((e) => e.id === row.id);
    setTasksData(data[0].task);
  };

  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Typography fontWeight={700} fontSize={25} color="primary">
          Events
        </Typography>
      </Grid>

      <Grid item md={12} sm={12}>
        <EventTaskForm
          isVisible={isCardVisible}
          toggleVisibility={() => setIsCardVisible(!isCardVisible)}
          formType="event"
          onCreate={handleCreateEvent}
        />
      </Grid>

      <Grid item md={12} sm={12}>
        <AppDataGrid
          rows={EVENTS_DATA}
          columns={events_columns}
          label="Events"
          pageSize={10}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          showAction
          disableRowSelectionOnClick
          onEditRow={handleEditRow}
          onDeleteRow={handleDeleteRow}
          onRowClick={handleEventClick}
          defaultSelectedRow={EVENTS_DATA[0].id}

        />
      </Grid>

      <Grid item md={12} sm={12}>
        <EventTaskForm
          isVisible={isCardVisible1}
          toggleVisibility={() => setIsCardVisible1(!isCardVisible1)}
          formType="task"
          onCreate={handleCreateTask}
        />
      </Grid>

      <Grid item md={12} sm={12}>
        <AppDataGrid
          rows={tasksData}
          columns={task_columns}
          label="Tasks"
          pageSize={10}
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          showAction
          disableRowSelectionOnClick
          onEditRow={handleEditRow}
          onDeleteRow={handleDeleteRow}
        />
      </Grid>
    </Grid>
  );
};

export default Events;
