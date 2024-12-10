import { Box } from "@mui/material";
import "./App.css";
import AppDrawer from "./app/components/AppDrawer";
import Auth from "./app/features/authentication/Auth";
import { Route, Routes } from "react-router-dom";
function App() {
  const isLoggedIn = () => {
    const data = localStorage.getItem("User");
    const user = JSON.parse(data)
    if (user) {
      return true;
    } else {
      return false;
    }

  };

  
  return <Box>{isLoggedIn() ? <AppDrawer /> : (
  <Routes>
              <Route path="/" element={<Auth />} />

              <Route path="/auth" element={<Auth />} />

    </Routes>)}</Box>;
}

export default App;
