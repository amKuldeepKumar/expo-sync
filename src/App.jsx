import { Box } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import AppDrawer from "./app/components/AppDrawer";
import Auth from "./app/features/authentication/Auth";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("User");
    const user = JSON.parse(data);
    if (!user) {
      navigate("/auth");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const isLoggedIn = () => {
    const data = localStorage.getItem("User");
    const user = JSON.parse(data);
    if (user) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <Box>
      {isLoggedIn() ? (
        <AppDrawer />
      ) : (
        <Routes>
          {/* <Route path="/" element={<Auth />} /> */}

          <Route path="/auth" element={<Auth />} />
        </Routes>
      )}
    </Box>
  );
}

export default App;
