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
  COMMENTS_COLUMNS,
  COMMENTS_ROWS,
  EVENTS_DATA,
  TASK_DATA,
  TEAMS_DATA,
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
        Task Details
      </Typography>
      <Grid container gap={1} mb={3}>
        <Grid md={2}>
          <Typography fontWeight="bold">Task</Typography>
          <Typography>{taskDetails.taskName}</Typography>
        </Grid>
        <Grid md={2}>
          <Typography fontWeight="bold">Assigned To</Typography>
          <Typography>{taskDetails.assignedTo}</Typography>
        </Grid>
        <Grid md={2}>
          <Typography fontWeight="bold">Due Date</Typography>
          <Typography>{taskDetails.dueDate}</Typography>
        </Grid>
        <Grid md={2}>
          <Typography fontWeight="bold">Status</Typography>
          <Typography>{taskDetails.status}</Typography>
        </Grid>
        <Grid md={2}>
          <Typography fontWeight="bold">Vendor</Typography>
          <Typography>{taskDetails.vendor}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={2} mb={2}>
        <Grid item md={4} sm={4} xs={12}>
          <Autocomplete
            options={TEAMS_DATA.map((t) => t.name)}
            renderInput={(params) => <TextField {...params} label="Team" />}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Autocomplete
            options={TEAMS_DATA[0].am[0].tl[0].executive.map((e) => e.name)}
            renderInput={(params) => (
              <TextField {...params} label="Assign Task To Team Member" />
            )}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Autocomplete
            options={EVENTS_DATA.map((e) => e.eventName)}
            renderInput={(params) => (
              <TextField {...params} label="Assign To Event" />
            )}
          />
        </Grid>
        <Grid item md={4} sm={4} xs={12}>
          <Autocomplete
            options={VENDORS_DATA.map((v) => v.name)}
            renderInput={(params) => (
              <TextField {...params} label="Assign Vendor" />
            )}
          />
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
              <Grid item md={4} sm={4} xs={12}>
                <TextField
                  required
                  fullWidth
                  multiline
                  maxRows={4}
                  id="outlined-required-1"
                  label="Comment"
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
        rows={COMMENTS_ROWS}
        columns={COMMENTS_COLUMNS}
        label="Tasks Comments"
        pageSize={10}
        pageSizeOptions={[5, 10, 20]}
      />
    </Box>
  );
};
