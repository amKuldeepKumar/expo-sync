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
import { VENDORS_DATA } from "../constants/dataConstant";

export const VendorView = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [isCardVisible, setIsCardVisible] = useState(false);

  const vendorDetails = useMemo(() => {
    const id = searchParams.get("vendorId");
    const data = VENDORS_DATA.find((c) => c.id == id);

    return data;
  }, [searchParams]);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  const taskColumnsVendors = [
    {
      field: "taskName",
      headerName: "Task Name",
      width: 250,
      editable: false,
    },
    {
      field: "client",
      headerName: "Client",
      width: 190,
      editable: false,
    },
    {
      field: "event",
      headerName: "Event",
      width: 130,
      editable: false,
    },
    {
      field: "status",
      headerName: "Status",
      width: 130,
      editable: false,
    },
    {
      field: "allocationDate",
      headerName: "Allocation Date",
      width: 190,
      editable: false,
    },
    {
      field: "deliveryDate",
      headerName: "Delivery Date",
      width: 130,
      editable: false,
    },
  ];

  const employeesColumn = [
    {
      field: "name",
      headerName: "Vendor Name",
      width: 170,
      editable: false,
    },
    {
      field: "contact",
      headerName: "Contact",
      width: 130,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      editable: false,
    },
    {
      field: "workCategory",
      headerName: "Work Category",
      width: 130,
      editable: false,
    },
    {
      field: "workType",
      headerName: "Work Type",
      width: 150,
      editable: false,
    },
  ];

  const operationalCities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
    "Surat",
    "Chandigarh",
    "Gurgaon",
    "Noida",
    "Indore",
    "Nashik",
    "Nagpur",
    "Baramulla",
    "Kulgam",
    "PehalGam",
    "Ghaziabad",
    "Faridabad",
  ];

  return (
    <Box>
      <Typography variant="h2" mb={3}>
        Vendor Details
      </Typography>

      <Grid container spacing={2} my={2}>
        <Grid item md={4} sm={4} xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required-1"
            label="Name"
            defaultValue={vendorDetails.name}
          />
        </Grid>

        <Grid item md={4} sm={4} xs={12}>
          <TextField
            fullWidth
            multiline
            maxRows={5}
            defaultValue={vendorDetails.address}
            id="outlined-required-2"
            label="Address"
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <TextField
            required
            fullWidth
            defaultValue={vendorDetails.telephone}
            id="outlined-required-2"
            label="Telephone"
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <TextField
            required
            fullWidth
            defaultValue={vendorDetails.email}
            id="outlined-required-2"
            label="Email"
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required-2"
            label="Head Office"
            defaultValue={vendorDetails.headOffice}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Autocomplete
            multiple
            options={operationalCities}
            getOptionLabel={(option) => option}
            defaultValue={vendorDetails.operationalCities.map((c) => c.name)}
            renderInput={(params) => (
              <TextField {...params} label="Operational Cities" />
            )}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained">Save</Button>
        </Grid>
      </Grid>

      <Grid container spacing={2}>
        <Grid md={12}>
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
                    <TextField
                      required
                      fullWidth
                      id="outlined-required-2"
                      label="Contact"
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
                  <Grid
                    item
                    xs={12}
                    sx={{ display: "flex", justifyContent: "end" }}
                  >
                    <Button variant="contained">Save</Button>
                  </Grid>
                </Grid>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item md={12} mb={3}>
          <AppDataGrid
            rows={vendorDetails.vendorEmployees}
            columns={employeesColumn}
            pageSize={10}
            label="Employees"
            pageSizeOptions={[5, 10, 20]}
            showAction={true}
          />
        </Grid>
        <Grid item md={12}>
          <AppDataGrid
            commentIcon
            rows={vendorDetails.tasks}
            columns={taskColumnsVendors}
            pageSize={10}
            label="Tasks Allocated"
            pageSizeOptions={[5, 10, 20]}
            showAction={true}
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
      </Grid>
    </Box>
  );
};
