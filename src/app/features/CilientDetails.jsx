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
import { useSearchParams } from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import {
  CLIENT_DATA,
  client_employeesColumns,
} from "../constants/dataConstant";

export const ClientDetails = () => {
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

  return (
    <Box>
      <Typography variant="h2" mb={3}>
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
                  options={["Destination 1", "Destination 2"]}
                  renderInput={(params) => (
                    <TextField {...params} label="Destination" />
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
    </Box>
  );
};
