/* eslint-disable react/prop-types */

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import {
  Autocomplete,
  Button,
  Card,
  CardContent,
  Collapse,
  Grid,
  TextField,
} from "@mui/material";
import {
  DatePicker,
  DateTimePicker,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import {
  CLIENT_DATA,
  USER_ROWS,
  VENDORS_DATA,
} from "../constants/dataConstant";

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
      label: formType === "event" ? "Assigned To" : "Add Vendor",
      options:
        formType === "event"
          ? USER_ROWS.filter(
              (u) =>
                u.role !== "Executive" &&
                u.role !== "Assistant Manager" &&
                u.role !== "Team Lead"
            ).map((e) => e.name)
          : VENDORS_DATA.map((v) => v.name),
    },
    {
      label: "Add Client",
      options: CLIENT_DATA.map((c) => c.company),
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
                <Autocomplete
                  options={options}
                  renderInput={(params) => (
                    <TextField {...params} label={label} />
                  )}
                />
              </Grid>
            ))}

            {datePickers.map(({ label, Component }, index) => (
              <Grid key={index} item md={4} sm={4} xs={12}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <Component label={label} sx={{ width: "100%" }} />
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
