import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
export default function HelpDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [messages, setMessages] = useState([]);
  const location = useLocation();

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsOpen(open);
  };

  useEffect(() => {
    console.log("Current URL:", location.pathname); // Current path
    console.log("Search Params:", location.search); // Query string (e.g., ?id=123)
    console.log("Hash:", location.hash);

    switch (location.pathname) {
      case "/vendors":
        setMessages([
          "Manage your list of vendors and their details here.",
          "Click on a vendor to see their products, services, and agreements.",
          "You can add, update, or remove vendor information as needed.",
          "Select a vendor to view contact details and past transactions.",
          "This page helps you maintain a reliable vendor network and manage partnerships.",
        ]);
        break;

      case "/events":
        setMessages([
          "View and manage all upcoming events in this section.",
          "Click on an event to see detailed information and updates.",
          "You can create new events or modify existing ones here.",
          "Select an event to view participant details, schedule, and status.",
          "Use this page to track event progress and manage logistics.",
        ]);
        break;

      case "/analytics":
        setMessages([
          "View all upcoming events in the first data grid, with dates and details.",
          "Check your pending tasks in the second data grid to stay on track with deadlines.",
          "The third data grid shows follow-ups, so you never miss important tasks or communications.",
          "Each data grid can be filtered to show relevant events, tasks, and follow-ups for efficient tracking.",
          "Use the dashboard to get a quick overview of what's upcoming, what's pending, and what needs follow-up.",
        ]);
        break;

      case "/clients":
        setMessages([
          "You can view all clients in this section.",
          "Click on a client to view their detailed information.",
          "This page allows you to manage and view client details.",
          "Select a client to redirect to their profile and see more details.",
          "You can navigate back to the client list from any client's detail page.",
        ]);
        break;

      case "/internals":
        setMessages([
          "Manage internal operations and processes here.",
          "View employee-related information and tasks in this section.",
          "You can assign roles, track activities, and monitor performance internally.",
          "Select an internal task to view detailed status and updates.",
          "This section helps you organize and manage your internal workflow efficiently.",
        ]);
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <div>
      <Tooltip title="Help Center">
        <Button
          sx={{ position: "absolute", top: "80px", right: "20px" }}
          variant="text"
          color="primary"
          onClick={toggleDrawer(true)}
        >
          <HelpCenterIcon />
        </Button>
      </Tooltip>
      <SwipeableDrawer
        anchor="right"
        open={isOpen}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
      >
        <Box
          sx={{ width: 300 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box sx={{ m: 5 }}>
            <Typography color="primary" fontWeight={"600"} textAlign={"center"}>
              Helpful Tips{" "}
            </Typography>
            <List>
              {messages.map((message, index) => (
                <ListItem key={index} sx={{ mt: 1 }}>
                  <Typography
                    display={"flex"}
                    justifyContent="center"
                    alignItems={"center"}
                    fontWeight={"550"}
                    textAlign={"center"}
                    fontSize={"14px"}
                  >
                    <FiberManualRecordIcon fontSize="6px" color="primary" />
                    {message}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </SwipeableDrawer>
    </div>
  );
}
