import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import PropTypes from "prop-types";
import * as React from "react";
import TeamManagement from "./TeamManagement";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Internals() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Team Management" {...a11yProps(0)} />
          {/* <Tab label="Managers" {...a11yProps(1)} />
          <Tab label="Asistant Managers" {...a11yProps(2)} />
          <Tab label="Team Lead" {...a11yProps(2)} />
          <Tab label="Executives" {...a11yProps(2)} /> */}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <TeamManagement />
      </CustomTabPanel>
      {/* <CustomTabPanel value={value} index={1}>
        <Manageers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <AssistantManagers />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TeamLead />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Executives />
      </CustomTabPanel> */}
    </Box>
  );
}
