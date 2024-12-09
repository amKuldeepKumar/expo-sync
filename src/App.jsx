import { Box } from "@mui/material";
import "./App.css";
import AppDrawer from "./app/components/AppDrawer";
function App() {
  const isLoggedIn = true;
  return <Box>{isLoggedIn && <AppDrawer />}</Box>;
}

export default App;
