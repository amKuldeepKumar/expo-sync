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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import AppDataGrid from "../components/AppDataGrid";
import {
  COMMENTS_COLUMNS,
  COMMENTS_ROWS,
  TASK_DATA,
  USER_ROWS,
  VENDORS_DATA,
} from "../constants/dataConstant";

export const TaskDetails = () => {
  const [searchParams] = useSearchParams();

  const [isCardVisible, setIsCardVisible] = useState(false);

  const taskDetails = useMemo(() => {
    const id = searchParams.get("taskId");
    const data = TASK_DATA.find((c) => c.id == id);

    return data;
  }, [searchParams]);

  const toggleCardVisibility = () => {
    setIsCardVisible(!isCardVisible);
  };
  return (
    <Box>
      <Typography variant="h2" mb={2}>
        Sub Activity Details
      </Typography>

      <Grid container spacing={2} my={2}>
        <Grid item md={4} sm={4} xs={12}>
          <TextField
            required
            fullWidth
            id="outlined-required-1"
            label="Sub Activity"
            defaultValue={taskDetails.taskName}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <TextField
            fullWidth
            disabled
            id="outlined-required-1"
            label="Client"
            defaultValue={taskDetails.client}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <TextField
            disabled
            fullWidth
            id="outlined-required-1"
            label="Activity"
            defaultValue={taskDetails.event}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Autocomplete
            defaultValue={taskDetails.assignedTo}
            options={USER_ROWS.map((u) => u.name)}
            renderInput={(params) => (
              <TextField {...params} label="Assigned To" />
            )}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Due Date"
              sx={{ width: "100%" }}
              defaultValue={dayjs(taskDetails.dueDate)}
            />
          </LocalizationProvider>
        </Grid>

        <Grid item md={4} sm={4} xs={12}>
          <Autocomplete
            defaultValue={taskDetails.status}
            options={["Not Started", "In Progress", "Pending", "Completed"]}
            renderInput={(params) => <TextField {...params} label="Status" />}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Autocomplete
            defaultValue={taskDetails.vendor}
            options={VENDORS_DATA.map((v) => v.companyName)}
            renderInput={(params) => <TextField {...params} label="Vendor" />}
          />
        </Grid>
        <Grid item xs={12} sx={{ display: "flex", justifyContent: "end" }}>
          <Button variant="contained">Save</Button>
        </Grid>
      </Grid>

      <Card sx={{ mb: 2 }}>
        <Button onClick={toggleCardVisibility}>
          {isCardVisible ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}{" "}
          {!isCardVisible && "Add Comment"}
        </Button>

        <Collapse in={isCardVisible} timeout="auto" unmountOnExit>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item md={8} xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  maxRows={4}
                  id="outlined-required-1"
                  label="Comment"
                />
              </Grid>

              <Grid item xs={12} md={4} sx={{ marginTop: 1 }}>
                <Button variant="contained">Save</Button>
              </Grid>
            </Grid>
          </CardContent>
        </Collapse>
      </Card>
      <AppDataGrid
        showAction
        rows={COMMENTS_ROWS}
        columns={COMMENTS_COLUMNS}
        label="Comments"
        pageSize={10}
        height={350}
        pageSizeOptions={[5, 10, 20]}
      />
    </Box>
  );
};
