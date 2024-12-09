/* eslint-disable no-unused-vars */
import {
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AppDataGrid from "../components/AppDataGrid";
import {
  Client_columns,
  CLIENT_DATA,
  client_employeesColumns,
  VENDORS_DATA,
} from "../constants/dataConstant";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
const Vendors = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [tasksData, setTasksData] = useState([]);
  const [operationalCities, setOoperationalCities] = useState([]);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  useEffect(() => {
    setTasksData(VENDORS_DATA[0].tasks);
    setOoperationalCities(VENDORS_DATA[0].operationalCities);
  }, []);

  const handleClientClick = (row) => {
    const data = VENDORS_DATA.filter((e) => e.id === row.id);

    setTasksData(data[0].tasks);
    setOoperationalCities(data[0].operationalCities);
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

  const operationalVendors = [
    { field: "id", headerName: "ID", width: 90, editable: false },
    {
      field: "name",
      headerName: "City Name",
      width: 230,
      editable: false,
    },
  
  ];

  const vendorsColumn = [
    { field: "id", headerName: "ID", width: 70, editable: false },
    {
      field: "name",
      headerName: "Vendor Name",
      width: 130,
      editable: false,
    },
    {
      field: "address",
      headerName: "Address",
      width: 130,
      editable: false,
    },
    {
      field: "companyName",
      headerName: "Company Name",
      width: 130,
      editable: false,
    },
    {
      field: "telephone",
      headerName: "Telephone",
      width: 130,
      editable: false,
    },
    {
      field: "email",
      headerName: "Email",
      width: 130,
      editable: false,
    },
    {
      field: "categories",
      headerName: "Categories",
      width: 130,
      editable: false,
    },

    {
      field: "workType",
      headerName: "Work Type",
      width: 150,
      editable: false,
    },
    {
      field: "headOffice",
      headerName: "Head Office",
      width: 150,
      editable: false,
    },
  ];
  return (
    <Grid md={12} sm={12} xs={12} sx={{}}>
      <Typography fontWeight={700} fontSize={25} color="primary">
        Vendors
      </Typography>

      <Grid md={4} sm={12} xs={12}>
        <Card>
          <Button onClick={toggleCardVisibility}>
            {isCardVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}{" "}
            {!isCardVisible && "Add"}
          </Button>

          <Collapse in={isCardVisible} timeout="auto" unmountOnExit>
            <CardContent>
              {/* <Typography color="primary">Create Event</Typography> */}
              <Grid container spacing={2}>
                <Grid item md={4} sm={4} xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required-1"
                    label="Required Field 1"
                    defaultValue="Hello World"
                  />
                </Grid>

                <Grid item md={4} sm={4} xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required-2"
                    label="Required Field 2"
                    defaultValue="Hello World"
                  />
                </Grid>

                <Grid item md={4} sm={4} xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required-3"
                    label="Required Field 3"
                    defaultValue="Hello World"
                  />
                </Grid>

                <Grid item md={4} sm={4} xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required-4"
                    label="Required Field 4"
                    defaultValue="Hello World"
                  />
                </Grid>

                <Grid item md={4} sm={4} xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required-4"
                    label="Required Field 4"
                    defaultValue="Hello World"
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

      <Grid md={8} sm={8} xs={12} mt={3} mb={2}>
        <AppDataGrid
          rows={VENDORS_DATA}
          columns={vendorsColumn}
          pageSize={10}
          label="Vendors"
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowClick={handleClientClick}
          defaultSelectedRow={VENDORS_DATA[0].id}
          showAction={true}
        />
      </Grid>
      <Grid md={8} sm={8} xs={12} mt={5} mb={2}>
        <Grid container spacing={2}>
          <Grid item md={8}>
            <AppDataGrid
              rows={tasksData}
              columns={taskColumnsVendors}
              pageSize={10}
              label="Task Allocated"
              pageSizeOptions={[5, 10, 20]}
              checkboxSelection
              disableRowSelectionOnClick
              showAction={true}
            />
          </Grid>

          <Grid item md={4}>
            <AppDataGrid
              rows={operationalCities}
              columns={operationalVendors}
              pageSize={10}
              label="Operational cities"
              pageSizeOptions={[5, 10, 20]}
              checkboxSelection
              disableRowSelectionOnClick
              showAction={true}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Vendors;
