import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import HelpCenterIcon from "@mui/icons-material/HelpCenter";
import { IconButton, Tooltip, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import React from "react";
import { useLocation } from "react-router-dom";
import { HELP_DRAWER_TIPS } from "../constants/dataConstant";
export default function HelpDrawer() {
  const [isOpen, setIsOpen] = React.useState(false);
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

  return (
    <Box sx={{ position: "relative" }}>
      <Tooltip title="Help Center">
        <IconButton
          sx={{ position: "absolute", top: "80px", right: "20px" }}
          color="primary"
          onClick={toggleDrawer(true)}
        >
          <HelpCenterIcon />
        </IconButton>
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
              Helpful Tips
            </Typography>
            <List>
              {HELP_DRAWER_TIPS[location.pathname]?.map((message, index) => (
                <ListItem key={index} sx={{ mt: 1 }}>
                  <Typography
                    display={"flex"}
                    justifyContent="center"
                    fontWeight={"550"}
                    fontSize={"14px"}
                  >
                    <FiberManualRecordIcon
                      fontSize="6px"
                      sx={{ mt: 0.4, mr: 0.6 }}
                      color="primary"
                    />
                    {message}
                  </Typography>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      </SwipeableDrawer>
    </Box>
  );
}
