import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import EditIcon from "@mui/icons-material/Edit";
import {
  Autocomplete,
  Box,
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import { VENDORS_DATA } from "../constants/dataConstant";

export const VendorView = () => {
  const [searchParams] = useSearchParams();

  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isEditCities, setIsEditCities] = useState(false);

  const vendorDetails = useMemo(() => {
    const id = searchParams.get("vendorId");
    const data = VENDORS_DATA.find((c) => c.id == id);

    return data;
  }, [searchParams]);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  const taskColumnsVendors = [
    { field: "id", headerName: "ID", width: 70, editable: false },
    {
      field: "taskName",
      headerName: "Task Name",
      width: 250,
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
    { field: "id", headerName: "ID", width: 70, editable: false },
    {
      field: "name",
      headerName: "Vendor Name",
      width: 170,
      editable: false,
    },
    {
      field: "address",
      headerName: "Address",
      width: 250,
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
      <Grid container mb={3} gap={2}>
        <Grid md={3}>
          <Typography fontWeight="bold">Vendor Name</Typography>
          <Typography>{vendorDetails.name}</Typography>
        </Grid>
        <Grid md={3}>
          <Typography fontWeight="bold">Vendor Address</Typography>
          <Typography>{vendorDetails.address}</Typography>
        </Grid>
        <Grid md={3}>
          <Typography fontWeight="bold">Vendor Industry/Domain</Typography>
          <Typography>{vendorDetails.telephone}</Typography>
        </Grid>
        <Grid md={3}>
          <Typography fontWeight="bold">Vendor Email</Typography>
          <Typography>{vendorDetails.email}</Typography>
        </Grid>
        <Grid md={3}>
          <Typography fontWeight="bold">Vendor Head Office</Typography>
          <Typography>{vendorDetails.headOffice}</Typography>
        </Grid>
        <Grid md={4}>
          {isEditCities ? (
            <Box display="flex" alignItems="center">
              <Autocomplete
                multiple
                options={operationalCities}
                getOptionLabel={(option) => option}
                defaultValue={vendorDetails.operationalCities.map(
                  (c) => c.name
                )}
                renderInput={(params) => (
                  <TextField {...params} label="Operational Cities" />
                )}
              />
              <Button
                color="secondary"
                sx={{ mx: 1 }}
                onClick={() => setIsEditCities(false)}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                onClick={() => setIsEditCities(false)}
              >
                Save
              </Button>
            </Box>
          ) : (
            <>
              <Typography fontWeight="bold">
                Vendor Operational Cities{" "}
                <IconButton onClick={() => setIsEditCities(true)}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Typography>
              <Typography>
                {vendorDetails.operationalCities.map((c) => c.name).join(", ")}
              </Typography>
            </>
          )}
        </Grid>
      </Grid>

      <Grid container gap={2}>
        <Grid md={12} mb={4}>
          <Card sx={{ mb: 2 }}>
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
                  <Grid item md={4} sm={4} xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="outlined-required-4"
                      label="Address"
                    />
                  </Grid>
                  <Grid item md={4} sm={4} xs={12}>
                    <Autocomplete
                      options={["Category 1", "Category 2"]}
                      renderInput={(params) => (
                        <TextField {...params} label="Work Category" />
                      )}
                    />
                  </Grid>

                  <Grid item md={4} sm={4} xs={12}>
                    <Autocomplete
                      options={["Type 1", "Type 2"]}
                      renderInput={(params) => (
                        <TextField {...params} label="Work Type" />
                      )}
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
          <AppDataGrid
            rows={vendorDetails.vendorEmployees}
            columns={employeesColumn}
            pageSize={10}
            label="Vendor Employees"
            pageSizeOptions={[5, 10, 20]}
            showAction={true}
          />
        </Grid>
        <Grid md={12}>
          <AppDataGrid
            rows={vendorDetails.tasks}
            columns={taskColumnsVendors}
            pageSize={10}
            label="Task Allocated"
            pageSizeOptions={[5, 10, 20]}
            showAction={true}
          />
        </Grid>
      </Grid>
    </Box>
  );
};
