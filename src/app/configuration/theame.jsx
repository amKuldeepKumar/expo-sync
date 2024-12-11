import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#f16064",
    },
    secondary: {
      main: "#A5A5A5",
    },
    background: {
      default: "#f4f4f4",
    },
  },
  typography: {
    fontFamily: '"Roboto", sans-serif',
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "1.8rem",
      fontWeight: 400,
    },
  },
  spacing: 8,
});
