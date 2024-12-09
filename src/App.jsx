import { Box } from "@mui/material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AppDrawer from "./app/components/AppDrawer";
import Events from "./app/features/Events";
import Clients from "./app/features/Clients";
import Vendors from "./app/features/Vendors";
function App() {
  const isLoggedIn = true;
  return (
    <Box>
      {isLoggedIn && <AppDrawer />}
      <Routes>
        {/* <Route path="/" element={<Analytics />} /> */}
        <Route path="/events" element={<Events />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/vendors" element={<Vendors />} />
      </Routes>
    </Box>
  );
}

export default App;
