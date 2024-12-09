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
import { useEffect, useState } from "react";
import AppDataGrid from "../components/AppDataGrid";
import {
  Client_columns,
  CLIENT_DATA,
  client_employeesColumns,
} from "../constants/dataConstant";
const Clients = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);
  const [clientsEmployeeData, setClientEmployeeData] = useState([]);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  useEffect(() => {
    setClientEmployeeData(CLIENT_DATA[0].employees);
  }, []);

  const handleClientClick = (row) => {
    const data = CLIENT_DATA.filter((e) => e.id === row.id);
    console.log(data);
    setClientEmployeeData(data[0].employees);
  };

  return (
    <Grid md={12} sm={12} xs={12} sx={{}}>
      <Typography fontWeight={700} fontSize={25} color="primary">
        Clients
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
          rows={CLIENT_DATA}
          columns={Client_columns}
          pageSize={10}
          label="Clients"
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          disableRowSelectionOnClick
          onRowClick={handleClientClick}
          defaultSelectedRow={CLIENT_DATA[0].id}
          showAction={true}
        />
      </Grid>
      <Grid md={8} sm={8} xs={12} mt={5} mb={2}>
        <AppDataGrid
          rows={clientsEmployeeData}
          columns={client_employeesColumns}
          pageSize={10}
          label="Client's Employee"
          pageSizeOptions={[5, 10, 20]}
          checkboxSelection
          disableRowSelectionOnClick
          showAction={true}
        />
      </Grid>
    </Grid>
  );
};

export default Clients;
