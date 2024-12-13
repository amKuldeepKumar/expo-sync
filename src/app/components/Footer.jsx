import { BottomNavigation, Link, Paper, Typography } from "@mui/material";
import { INSONIX } from "../../assets/SvgIcons";

export const Footer = () => {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9,
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          background: "#4b4a4b",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography color="whitesmoke">Powered By</Typography>
        <Link
          href="https://www.insonix.com"
          target="_blank"
          underline="none"
          sx={{
            cursor: "pointer",
            mt: 0.7,
            ":hover": {
              opacity: 0.6,
            },
          }}
        >
          <INSONIX />
        </Link>
      </BottomNavigation>
    </Paper>
  );
};
