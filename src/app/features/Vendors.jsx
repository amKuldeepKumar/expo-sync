/* eslint-disable no-unused-vars */
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
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
import { createSearchParams, useNavigate } from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import { VENDORS_DATA } from "../constants/dataConstant";
const Vendors = () => {
  const navigate = useNavigate();
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

  const handleVendorClick = (row) => {
    const data = VENDORS_DATA.filter((e) => e.id === row.id);

    setTasksData(data[0].tasks);
    setOoperationalCities(data[0].operationalCities);
    navigate({
      pathname: "/vendors-details",
      search: createSearchParams({
        vendorId: row.id,
      }).toString(),
    });
  };

  const vendorsColumn = [
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
      field: "telephone",
      headerName: "Telephone",
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
                    label="Telephone"
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
                    label="Head Office"
                  />
                </Grid>
                <Grid item md={4} sm={4} xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required-5"
                    label="Address"
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
          height={500}
          label="Vendors"
          showSearching={true}
          pageSizeOptions={[5, 10, 20]}
          onRowClick={handleVendorClick}
          showAction={true}
        />
      </Grid>
    </Grid>
  );
};

export default Vendors;
