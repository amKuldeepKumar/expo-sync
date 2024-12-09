import { Container, Grid, Typography } from "@mui/material";
import AppDataGrid from "../components/AppDataGrid";

const Analytics = () => {
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
    { field: "client", headerName: "Client Name", width: 120 },
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
    { field: "organizer", headerName: "Client Name", width: 170 },
  ];

  const columns2 = [
    {
      field: "eventName",
      headerName: "Event Name",
      editable: true,
    },
    {
      field: "eventDate",
      headerName: "Event Date",
      type: "string",
    },
    { field: "location", headerName: "Location", width: 70 },
    { field: "organizer", headerName: "Organizer", width: 70 },
  ];

  const rows = [
    {
      id: 1,
      eventName: "Annual Meeting",
      eventDate: "2024-01-10",
      location: "New York",
      client: "Mazekine",
      participants: 200,
    },
    {
      id: 2,
      eventName: "Tech Conference",
      eventDate: "2024-02-15",
      location: "San Francisco",
      client: "Jane Smith",
      participants: 150,
    },
    {
      id: 3,
      eventName: "Live Concert",
      eventDate: "2024-02-15",
      location: "San Joseph",
      client: "Chloe Decker",
      participants: 150,
    },

    {
      id: 4,
      eventName: "Product Launch",
      eventDate: "2024-02-15",
      location: "San Martin",
      client: "Alex",
      participants: 150,
    },
  ];

  const rows1 = [
    {
      id: 1,
      taskName: "Music System",
      eventName: "Annual Meeting",
      eventDate: "2024-01-10",
      organizer: "John Doe",
    },
    {
      id: 2,
      taskName: "Te-Shirts",
      eventName: "Tech Conference",
      eventDate: "2024-02-15",
      organizer: "Jane Smith",
    },
    // Add more rows as needed...
  ];

  const rows2 = [
    {
      id: 1,
      eventName: "Annual Meeting",
      eventDate: "2024-01-10",
      location: "New York",
      organizer: "Mazekine",
      participants: 200,
    },
    {
      id: 2,
      eventName: "Tech Conference",
      eventDate: "2024-02-15",
      location: "San Francisco",
      organizer: "Jane Smith",
      participants: 150,
    },
    // Add more rows as needed...
  ];

  const handleEditRow = (row) => {
    console.log("Edit row:", row);
  };
  
  const handleDeleteRow = (row) => {
    console.log("Delete row:", row);
  };

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      <Typography fontSize={20} fontWeight={700} sx={{ mb: 2 }}>
        DashBoard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} mt={2}>
          <AppDataGrid
            rows={rows}
            label="Assigned Events"
            columns={columns}
            pageSize={10}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            disableRowSelectionOnClick
            showAction={true}
            onEditRow={handleEditRow}
            onDeleteRow={handleDeleteRow}
          />
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          <AppDataGrid
            rows={rows1}
            label="Assigned Tasks"
            columns={columns1}
            pageSize={10}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Grid>
        <Grid item xs={12} md={6} mt={2}>
          <AppDataGrid
            label="Assigned POC"
            rows={rows2}
            columns={columns2}
            pageSize={10}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            disableRowSelectionOnClick
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Analytics;
