/* eslint-disable no-unused-vars */
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { Button, Card, CardContent, Collapse, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import AppDataGrid from "../components/AppDataGrid";
import { TEAMS_DATA } from "../constants/dataConstant";
import DynamicFormGenerator from "../components/DynmicFormGenerator";
const Manageers = () => {
  const [isCardVisible, setIsCardVisible] = useState(false);

  useEffect(() => {
    console.log(TEAMS_DATA);
  }, []);

  const createTeamColumns = [
    { name: "name", label: "Full Name", type: "text" },
    { name: "email", label: "Email", type: "text" },
    { name: "mobile", label: "Mobile", type: "number" },
    {
      name: "designation",
      label: "Designation",
      type: "text",
      disabled: true,
      value:'Manager',
      
      defaultValue: "Manager",
      options: [{ label: "Manager", value: "Manager" }],
    },
  ];

  const ManagersColumns = [
    { field: "manager", headerName: "Name", width: 130 },
    { field: "totalAm", headerName: "Total Am", width: 90 },
    { field: "totalTl", headerName: "Total Tl", width: 90 },
    { field: "totalExecutive", headerName: "Total Executive", width: 120 },
  ];

  const handleManagerClick = (row) => {};

  const handelSave = () => {};

  return (
    <Grid container spacing={2}>
      <Grid item md={12}>
        <Card>
          <Button onClick={() => setIsCardVisible(!isCardVisible)}>
            {isCardVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}{" "}
            {!isCardVisible && "Create Manager"}
          </Button>

          <Collapse in={isCardVisible} timeout="auto" unmountOnExit>
            <CardContent>
              <DynamicFormGenerator
                columns={createTeamColumns}
                onSaveClick={handelSave}
              />
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
      <Grid item xs={12} md={12}>
        <AppDataGrid
          rows={TEAMS_DATA}
          label="Managers"
          columns={ManagersColumns}
          onRowClick={handleManagerClick}
          showAction={true}
          defaultSelectedRow={TEAMS_DATA[0].id}
          height={280}
        />
      </Grid>
    </Grid>
  );
};

export default Manageers;
