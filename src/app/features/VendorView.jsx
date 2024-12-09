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
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import { VENDORS_DATA } from "../constants/dataConstant";
import { useState } from "react";

export const VendorView = () => {
  const [searchParams] = useSearchParams();

  const [isCardVisible, setIsCardVisible] = useState(false);
  const [isCitiesVisible, setIsCitiesVisible] = useState(false);

  const vendorDetails = useMemo(() => {
    const id = searchParams.get("vendorId");
    const data = VENDORS_DATA.find((c) => c.id == id);

    return data;
  }, [searchParams]);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  const toggleCitiesVisibility = () => {
    setIsCitiesVisible(!isCitiesVisible);
  };

  const operationalVendors = [
    { field: "id", headerName: "ID", width: 90, editable: false },
    {
      field: "name",
      headerName: "City Name",
      width: 230,
      editable: false,
    },
  ];

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
        <Grid md={6}>
          <AppDataGrid
            rows={vendorDetails.tasks}
            columns={taskColumnsVendors}
            pageSize={10}
            label="Task Allocated"
            pageSizeOptions={[5, 10, 20]}
            showAction={true}
          />
        </Grid>
        <Grid
          md={5}
          display="flex"
          justifyContent="flex-start"
          flexDirection="column"
          mt={2}
        >
          <Grid container>
            <Grid item md={12}>
              <Card sx={{ mb: 2 }}>
                <Button onClick={toggleCitiesVisibility}>
                  {isCitiesVisible ? (
                    <ArrowDropUpIcon />
                  ) : (
                    <ArrowDropDownIcon />
                  )}
                  {!isCitiesVisible && "Add City"}
                </Button>

                <Collapse in={isCitiesVisible} timeout="auto" unmountOnExit>
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item md={4} sm={4} xs={12}>
                        <TextField
                          required
                          id="outlined-required-5"
                          label="City"
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
            </Grid>
            <Grid item md={12}>
              <AppDataGrid
                rows={vendorDetails.operationalCities}
                columns={operationalVendors}
                pageSize={10}
                height={200}
                label="Operational cities"
                pageSizeOptions={[5, 10, 20]}
                showAction={true}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};
