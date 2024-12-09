import BadgeIcon from "@mui/icons-material/Badge";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import MenuIcon from "@mui/icons-material/Menu";
import SpaceDashboardIcon from "@mui/icons-material/SpaceDashboard";
import StorefrontIcon from "@mui/icons-material/Storefront";
import MuiAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Analytics from "../features/Analytics";
import Clients from "../features/Clients";
import { EventDetails } from "../features/EventDetails";
import Events from "../features/Events";
import Internals from "../features/Internals";
import Vendors from "../features/Vendors";
import { useMemo } from "react";
import { useEffect } from "react";
import { TeamView } from "../features/TeamView";
import { ClientDetails } from "../features/CilientDetails";
import { VendorView } from "../features/VendorView";

const drawerWidth = 240;
const pages = [
  { label: "DashBoard", to: "/analytics", icon: <SpaceDashboardIcon /> },
  { label: "Events", to: "/events", icon: <EventAvailableIcon /> },
  { label: "Clients", to: "/clients", icon: <CorporateFareIcon /> },
  { label: "Internals", to: "/internals", icon: <BadgeIcon /> },
  { label: "Vendors", to: "/vendors", icon: <StorefrontIcon /> },
];

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })(
  ({ theme }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    variants: [
      {
        props: ({ open }) => open,
        style: {
          transition: theme.transitions.create("margin", {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          marginLeft: 0,
        },
      },
    ],
  })
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(["margin", "width"], {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

export default function AppDrawer() {
  const theme = useTheme();
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    if (location.pathname.length == 1) {
      navigate("/analytics");
    }
  }, [navigate]);

  const currentTab = useMemo(
    () => location.pathname,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [location.pathname]
  );

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const onItemClick = (e) => {
    navigate(e.to);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[{ mr: 2 }, open && { display: "none" }]}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            ExpoSync
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {pages.map((e) => (
            <ListItem
              key={e.title}
              disablePadding
              sx={{
                backgroundColor: e.to === currentTab ? "#DC363B" : "",
                color: e.to === currentTab ? "white" : "black",
              }}
              onClick={() => onItemClick(e)}
            >
              <ListItemButton>
                <ListItemText primary={e.label} />
                {e.icon}
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Main open={open} sx={{ width: 100 }}>
        <DrawerHeader />
        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/vendors" element={<Vendors />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/internals" element={<Internals />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/team-details" element={<TeamView />} />
          <Route path="/client-details" element={<ClientDetails />} />
          <Route path="/vendor-details" element={<VendorView />} />
        </Routes>
      </Main>
    </Box>
  );
}
