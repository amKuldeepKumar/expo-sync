/* eslint-disable no-unused-vars */
import { Container, Grid, Typography } from "@mui/material";
import AppDataGrid from "../components/AppDataGrid";
import { createSearchParams, useNavigate } from "react-router-dom";

const columns = [
  {
    field: "eventName",
    headerName: "Event Name",
    editable: true,
    width: 170,
  },
  {
    field: "eventDate",
    headerName: "Event Date",
    type: "string",
    width: 110,
  },
  { field: "location", headerName: "Location", width: 120 },
  { field: "client", headerName: "Client", width: 120 },
];

const columns1 = [
  {
    field: "taskName",
    headerName: "Task Name",
    editable: true,
    width: 170,
  },
  {
    field: "eventName",
    headerName: "Event Name",
    editable: true,
    width: 170,
  },
  {
    field: "eventDate",
    headerName: "Event Date",
    type: "string",
    width: 110,
  },
  { field: "organizer", headerName: "Client", width: 170 },
];

const columns2 = [
  {
    field: "eventName",
    headerName: "Event Name",
    editable: true,
    width: 170,
  },
  {
    field: "eventDate",
    headerName: "Event Date",
    type: "string",
    width: 110,
  },
  { field: "location", headerName: "Location", width: 150 },
  { field: "organizer", headerName: "Client", width: 150 },
];

const rows = [
  {
    id: 1,
    eventName: "Annual Meeting",
    eventDate: "2024-01-10",
    location: "New York",
    client: "Capita Tech",
    participants: 200,
  },
  {
    id: 2,
    eventName: "Tech Conference",
    eventDate: "2024-02-15",
    location: "San Francisco",
    client: "Capita Tech",
    participants: 150,
  },
  {
    id: 3,
    eventName: "Live Concert",
    eventDate: "2024-02-15",
    location: "San Joseph",
    client: "Godrej",
    participants: 150,
  },

  {
    id: 4,
    eventName: "Product Launch",
    eventDate: "2024-02-15",
    location: "San Martin",
    client: "Godrej",
    participants: 150,
  },
];

const rows1 = [
  {
    id: 101,
    taskName: "Food Catering",
    organizer: "Godrej",
    eventName: "Annual Meeting",
    eventDate: "05/15/24",
  },
  {
    id: 102,
    taskName: "AV Setup",
    organizer: "Godrej",
    eventDate: "05/16/24",
    eventName: "Annual Meeting",
  },
  {
    id: 103,
    taskName: "Seating Arrangement",
    organizer: "Capita Tech",
    eventDate: "05/17/24",
    eventName: "Tech Conference",
  },
];

const rows2 = [
  {
    id: 1,
    eventName: "Annual Meeting",
    eventDate: "2024-01-10",
    location: "New York",
    organizer: "Capita Tech",
    participants: 200,
  },
  {
    id: 2,
    eventName: "Tech Conference",
    eventDate: "2024-02-15",
    location: "San Francisco",
    organizer: "Godrej",
    participants: 150,
  },
];

const Analytics = () => {
  const navigate = useNavigate();
  const handleEditRow = (row) => {};

  const handleDeleteRow = (row) => {};

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography fontSize={20} fontWeight={700} sx={{ mb: 2 }}>
        DashBoard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} mt={3}>
          <AppDataGrid
            rows={rows}
            label="Upcoming Events"
            columns={columns}
            pageSize={10}
            pageSizeOptions={[5, 10, 20]}
            showAction={true}
            onEditRow={handleEditRow}
            onRowClick={(row) =>
              navigate({
                pathname: "/events-details",
                search: createSearchParams({
                  eventId: row.id,
                }).toString(),
              })
            }
            moreLink={"/events"}
            onDeleteRow={handleDeleteRow}
          />
        </Grid>
        <Grid item xs={12} md={6} mt={3}>
          <AppDataGrid
            rows={rows1}
            label="Pending Tasks"
            columns={columns1}
            pageSize={10}
            moreLink={"/tasks"}
            pageSizeOptions={[5, 10, 20]}
            onRowClick={(row) =>
              navigate({
                pathname: "/tasks-details",
                search: createSearchParams({
                  taskId: row.id,
                }).toString(),
              })
            }
          />
        </Grid>
        <Grid item xs={12} md={6} mt={4}>
          <AppDataGrid
            label="Follow-ups"
            rows={rows2}
            columns={columns2}
            pageSize={10}
            moreLink={"/clients"}
            pageSizeOptions={[5, 10, 20]}
            onRowClick={(row) =>
              navigate({
                pathname: "/clients-details",
                search: createSearchParams({
                  clientId: row.id,
                }).toString(),
              })
            }
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Analytics;
