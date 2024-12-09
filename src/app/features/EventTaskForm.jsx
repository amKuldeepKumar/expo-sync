/* eslint-disable react/prop-types */

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TEAMS_DATA, VENDORS_DATA } from "../constants/dataConstant";

// Reusable Form Component for Event/Task creation
export const EventTaskForm = ({
  isVisible,
  toggleVisibility,
  formType,
  onCreate,
}) => {
  const fields = [
    {
      label: `${formType === "event" ? "Event" : "Task"} Name`,
      required: true,
    },
    {
      label: `${formType === "event" ? "Event" : "Task"} Description`,
      required: true,
    },
    { label: "Remarks", required: true },
  ];

  const datePickers = [
    { label: "Begin Date", Component: DatePicker },
    { label: "End Date", Component: DateTimePicker },
    { label: "Follow-up Date", Component: DatePicker },
  ];

  const selectOptions = [
    {
      label: "Type",
      options: [
        "Meetings",
        "Conferences",
        "Seminars/Workshops",
        "Weddings",
        "Concerts",
        "Exhibitions",
      ],
    },
    {
      label: "Status",
      options: ["Ongoing", "Not Started", "Completed", "Pending"],
    },
    {
      label: "Assigned To",
      options:
        formType === "event"
          ? TEAMS_DATA.map((e) => e.name)
          : VENDORS_DATA.map((v) => v.name),
    },
  ];

  return (
    <Card>
      <Button onClick={toggleVisibility}>
        {isVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        {formType === "event" && !isVisible && "Create Event"}
        {formType === "task" && !isVisible && "Create Task"}
      </Button>

      <Collapse in={isVisible} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container spacing={2}>
            {fields.map(({ label, required }, index) => (
              <Grid key={index} item md={4} sm={4} xs={12}>
                <TextField required={required} fullWidth label={label} />
              </Grid>
            ))}

            {selectOptions.map(({ label, options }, index) => (
              <Grid key={index} item md={4} sm={4} xs={12}>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select fullWidth label={label} defaultValue={options[0]}>
                  {options.map((option, i) => (
                    <MenuItem key={i} value={i + 10}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </Grid>
            ))}

            {datePickers.map(({ label, Component }, index) => (
              <Grid key={index} item md={4} sm={4} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Component fullWidth label={label} />
                </LocalizationProvider>
              </Grid>
            ))}

            <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
              <Button variant="contained" onClick={onCreate}>
                Create
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Collapse>
    </Card>
  );
};
