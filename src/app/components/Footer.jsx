import { BottomNavigation, Link, Paper, Typography } from "@mui/material";

export const Footer = () => {
  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
      }}
      elevation={3}
    >
      <BottomNavigation
        sx={{
          background: "#4b4a4b",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography color="whitesmoke">
          Powered By
          <Link
            href="https://www.insonix.com"
            target="_blank"
            underline="none"
            sx={{
              cursor: "pointer",
              color: "whitesmoke",
              fontWeight: 600,
              ml: 0.5,
              fontFamily: "'Noto Sans', sans-serif",
              ":hover": {
                opacity: 0.6,
              },
            }}
          >
            INSONIX
          </Link>
        </Typography>
      </BottomNavigation>
    </Paper>
  );
};
