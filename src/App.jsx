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

  console.log(isLoggedIn());
  
  return <Box>{isLoggedIn() ? <AppDrawer /> : (
  <Routes>
              <Route path="/auth" element={<Auth />} />

    </Routes>)}</Box>;
}

export default App;
