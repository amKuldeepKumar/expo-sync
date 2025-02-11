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
      pathname: "/events-details",
      search: createSearchParams({
        eventId: row.id,
      }).toString(),
    });
  };

  return (
    <Grid container spacing={3}>
      <Grid item md={12}>
        <Typography fontWeight={700} fontSize={25} color="primary">
        Activities
        </Typography>
      </Grid>

      <Grid item md={12} sm={12}>
        <EventTaskForm
          isVisible={isCardVisible}
          toggleVisibility={() => setIsCardVisible(!isCardVisible)}
          formType="Activities"
          onCreate={handleCreateEvent}
        />
      </Grid>

      <Grid item md={12} sm={12}>
        <AppDataGrid
          rows={EVENTS_DATA}
          columns={events_columns}
          label="Activities"
          pageSize={10}
          showSearching={true}
          height={500}
          pageSizeOptions={[5, 10, 20]}
          showAction
          disableRowSelectionOnClick
          onEditRow={handleEditRow}
          onDeleteRow={handleDeleteRow}
          onRowClick={handleEventClick}
          defaultSelectedRow={EVENTS_DATA[0].id}
        />
      </Grid>
    </Grid>
  );
};

export default Events;
