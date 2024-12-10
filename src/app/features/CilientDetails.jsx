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
import { useMemo, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import {
  CLIENT_DATA,
  client_employeesColumns,
} from "../constants/dataConstant";

const eventColumns = [
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

const taskColumns = [
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
  { field: "organizer", headerName: "Client Name", width: 110 },
];

const eventRows = [
  {
    id: 1,
    eventName: "Annual Meeting",
    eventDate: "2024-01-10",
    location: "New York",
    client: "John Doe",
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
    eventName: "Charity Gala",
    eventDate: "2024-02-15",
    location: "Chicago",
    client: "Alice Brown",
    participants: 150,
  },

  {
    id: 5,
    eventName: "Product Launch",
    eventDate: "2024-02-15",
    location: "Boston",
    client: "Charlie Black",
    participants: 150,
  },
];

const taskRows = [
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
];

export const ClientDetails = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isCardVisible, setIsCardVisible] = useState(false);

  const clientsEmployeeData = useMemo(() => {
    const id = searchParams.get("clientId");
    const data = CLIENT_DATA.find((c) => c.id == id);

    return data;
  }, [searchParams]);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
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
    <Box>
      <Typography variant="h2" mb={2}>
        Client Details
      </Typography>
      <Grid container mb={3}>
        <Grid md={4}>
          <Typography fontWeight="bold">Client Name</Typography>
          <Typography>{clientsEmployeeData.company}</Typography>
        </Grid>
        <Grid md={4}>
          <Typography fontWeight="bold">Client Address</Typography>
          <Typography>{clientsEmployeeData.address}</Typography>
        </Grid>
        <Grid md={4}>
          <Typography fontWeight="bold">Client Industry/Domain</Typography>
          <Typography>{clientsEmployeeData.industry}</Typography>
        </Grid>
      </Grid>

      <Card>
        <Button onClick={toggleCardVisibility}>
          {isCardVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}{" "}
          {!isCardVisible && "Add Employee"}
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
                  options={["Designation 1", "Designation 2"]}
                  renderInput={(params) => (
                    <TextField {...params} label="Designation" />
                  )}
                />
              </Grid>

              <Grid item md={4} sm={4} xs={12}>
                <Autocomplete
                  options={["Department 1", "Department 2"]}
                  renderInput={(params) => (
                    <TextField {...params} label="Department" />
                  )}
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <TextField
                  required
                  fullWidth
                  id="outlined-required-3"
                  label="Email"
                />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <TextField
                  required
                  fullWidth
                  id="outlined-required-3"
                  label="Contact"
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

      <Box mt={2}>
        <AppDataGrid
          rows={clientsEmployeeData.employees}
          columns={client_employeesColumns}
          pageSize={10}
          label="Client's Employee"
          pageSizeOptions={[5, 10, 20]}
          showAction={true}
        />
      </Box>

      <Grid container spacing={1} mt={4}>
        <Grid item md={6}>
          <AppDataGrid
            showAction
            rows={eventRows}
            columns={eventColumns}
            pageSize={10}
            label="Client Events"
            pageSizeOptions={[5, 10, 20]}
            onRowClick={handleEventClick}
          />
        </Grid>
        <Grid item md={6}>
          <AppDataGrid
            showAction
            rows={taskRows}
            columns={taskColumns}
            pageSize={10}
            label="Client Tasks"
            pageSizeOptions={[5, 10, 20]}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
