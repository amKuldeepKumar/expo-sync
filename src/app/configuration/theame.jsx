import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#ED3237",
    },
    secondary: {
      main: "#727375",
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
