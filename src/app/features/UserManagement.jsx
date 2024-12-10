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
} from "@mui/material";
import { useState } from "react";
import AppDataGrid from "../components/AppDataGrid";
import { USER_COLUMNS, USER_ROWS } from "../constants/dataConstant";

export const UserManagement = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };

  return (
    <Box>
      <Card sx={{ mb: 4 }}>
        <Button onClick={toggleCardVisibility}>
          {isCardVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}{" "}
          {!isCardVisible && "Create User"}
        </Button>

        <Collapse in={isCardVisible} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={4} sm={4} xs={12}>
                <TextField required fullWidth label="User Name" />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <TextField required fullWidth label="Email" />
              </Grid>
              <Grid item md={4} sm={4} xs={12}>
                <TextField required fullWidth label="Contact" />
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
                  options={[
                    "Manager",
                    "Assistant Manager",
                    "Team Lead",
                    "Executive",
                  ]}
                  renderInput={(params) => (
                    <TextField {...params} label="Role" />
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
        showAction
        columns={USER_COLUMNS}
        rows={USER_ROWS}
        pageSize={20}
        label="Users"
        showSearching={true}
        height={650}
        pageSizeOptions={[5, 10, 20]}
      />
    </Box>
  );
};
