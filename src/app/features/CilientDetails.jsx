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
  { field: "location", headerName: "Location", width: 120 },
  {
    field: "assignedTo",
    headerName: "Assign To",
    type: "string",
    width: 110,
  },
  {
    field: "type",
    headerName: "Type",
    type: "string",
    width: 110,
  },
  {
    field: "status",
    headerName: "Status",
    type: "string",
    width: 110,
  },
  {
    field: "beginDate",
    headerName: "Start Date",
    type: "string",
    width: 110,
  },
  {
    field: "endDate",
    headerName: "End Date",
    type: "string",
    width: 110,
  },
  {
    field: "eventDate",
    headerName: "Event Date",
    type: "string",
    width: 110,
  },
];

const taskColumns = [
  {
    field: "taskName",
    headerName: "Task Name",
    editable: true,
    width: 170,
  },
  {
    field: "status",
    headerName: "Status",
    editable: true,
    width: 170,
  },
  {
    field: "assignedTo",
    headerName: "Assign To",
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
];

const eventRows = [
  {
    id: 3,
    eventName: "Charity Gala",
    eventDate: "2024-03-20",
    location: "Chicago",
    type: "Gala",
    beginDate: "2024-03-15",
    endDate: "2024-03-16",
    status: "Not Started",
    assignedTo:"William Phillips",
  },
  {
    id: 4,
    eventName: "Sports Day",
    eventDate: "2024-04-25",
    location: "Los Angeles",
    type: "Sports Event",
    beginDate: "2024-04-20",
    endDate: "2024-04-22",
    status: "Pending",
    assignedTo:"Sophia Miller",
  },
  {
    id: 5,
    eventName: "Product Launch",
    eventDate: "2024-05-05",
    location: "Boston",
    type: "Product Launch",
    beginDate: "2024-05-01",
    endDate: "2024-05-03",
    status: "Not Started",
    assignedTo:"William Phillips",
  },
  {
    id: 6,
    eventName: "Annual Awards Ceremony",
    eventDate: "2024-06-15",
    location: "Los Angeles",
    type: "Award Ceremony",
    beginDate: "2024-06-10",
    endDate: "2024-06-12",
    status: "Pending",
    assignedTo:"Lucas Harris",
  },
  {
    id: 7,
    eventName: "Team Building Retreat",
    eventDate: "2024-07-20",
    location: "Miami",
    type: "Retreat",
    beginDate: "2024-07-18",
    endDate: "2024-07-19",
    status: "Not Started",
    assignedTo:"Charlotte Lee",
  },
];

const taskRows = [
  {
    id: 101,
    taskName: "Food Catering",
    organizer: "Godrej",
    eventName: "Charity Event",
    eventDate: "05/15/24",
    status: "In Progress",
    assignedTo: "Soravh Mishra",
  },
  {
    id: 102,
    taskName: "AV Setup",
    organizer: "Videocon",
    eventName: "Product Launch",
    eventDate: "05/16/24",
    status: "Pending",
    assignedTo: "John Smith",
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
      pathname: "/events-details",
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
      <Grid container spacing={2}>
        <Grid item md={3}>
          <Grid container spacing={3} direction="column" mt={4}>
            <Grid item md={4} sm={4} xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required-1"
                label="Name"
                defaultValue={clientsEmployeeData.company}
              />
            </Grid>

            <Grid item md={4} sm={4} xs={12}>
              <TextField
                required
                fullWidth
                multiline
                maxRows={5}
                id="outlined-required-3"
                label="Address"
                defaultValue={clientsEmployeeData.address}
              />
            </Grid>
            <Grid item md={4} sm={4} xs={12}>
              <TextField
                required
                fullWidth
                id="outlined-required-3"
                label="Industry"
                defaultValue={clientsEmployeeData.industry}
              />
            </Grid>

            <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
              <Button variant="contained">Save</Button>
            </Grid>
          </Grid>
        </Grid>

        <Grid item md={9}>
          <Card>
            <Button onClick={toggleCardVisibility}>
              {isCardVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
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
              label="Employees"
              pageSizeOptions={[5, 10, 20]}
              showAction={true}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container spacing={1} mt={4}>
        <Grid item md={6}>
          <AppDataGrid
            showAction
            newButton
            commentIcon
            rows={taskRows}
            columns={taskColumns}
            pageSize={10}
            label="Tasks"
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
        <Grid item md={6}>
          <AppDataGrid
            showAction
            newButton
            rows={eventRows}
            columns={eventColumns}
            pageSize={10}
            label="Events"
            pageSizeOptions={[5, 10, 20]}
            onRowClick={handleEventClick}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
