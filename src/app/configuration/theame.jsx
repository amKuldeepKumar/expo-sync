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
  spacing: 8,
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          fontFamily: '"Noto Sans", sans-serif',
        },
      },
    },
    MuiTypography: {
      fontFamily: '"Noto Sans", sans-serif',
      styleOverrides: {
        h1: {
          fontSize: "2rem",
          fontWeight: 500,
        },
        h2: {
          fontSize: "1.8rem",
          fontWeight: 400,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        columnHeader: {
          background: "#4b4a4b",
          "&:focus, &:active, &:focus-within": {
            outline: "none",
          },
        },
        columnHeaderTitle: {
          color: "whitesmoke",
        },
      },
    },
  },
});
