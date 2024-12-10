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
import { useState } from "react";
import AppDataGrid from "../components/AppDataGrid";
import { Client_columns, CLIENT_DATA } from "../constants/dataConstant";
import { createSearchParams, useNavigate } from "react-router-dom";

const Clients = () => {
  const navigate = useNavigate();
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  const handleClientClick = (row) => {
    navigate({
      pathname: "/client-details",
      search: createSearchParams({
        clientId: row.id,
      }).toString(),
    });
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
                    label="Address"
                  />
                </Grid>

                <Grid item md={4} sm={4} xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="outlined-required-3"
                    label="Industry"
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
          onRowClick={handleClientClick}
          showAction={true}
        />
      </Grid>
    </Grid>
  );
};

export default Clients;
