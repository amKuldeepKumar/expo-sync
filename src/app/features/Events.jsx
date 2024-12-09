import { Grid, Typography } from "@mui/material";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import { events_columns, EVENTS_DATA } from "../constants/dataConstant";
import { EventTaskForm } from "./EventTaskForm";

const Events = () => {
  const navigate = useNavigate();

  const [isCardVisible, setIsCardVisible] = useState(false);

  const handleCreateEvent = () => {
    console.log("Event created");
  };

  const handleEditRow = (row) => {
    console.log("Edit row:", row);
  };

  const handleDeleteRow = (row) => {
    console.log("Delete row:", row);
  };

  const handleEventClick = (row) => {
    navigate({
      pathname: "/event-details",
      search: createSearchParams({
        eventId: row.id,
      }).toString(),
    });
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
          showAction
          disableRowSelectionOnClick
          onEditRow={handleEditRow}
          onDeleteRow={handleDeleteRow}
          onRowClick={handleEventClick}
          defaultSelectedRow={EVENTS_DATA[0].id}
        />
      </Grid>

      {/* <Grid item md={12} sm={12}>
        <EventTaskForm
          isVisible={isCardVisible1}
          toggleVisibility={() => setIsCardVisible1(!isCardVisible1)}
          formType="task"
          onCreate={handleCreateTask}
        />
      </Grid> */}

      {/* <Grid item md={12} sm={12}>
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
      </Grid> */}
    </Grid>
  );
};

export default Events;
