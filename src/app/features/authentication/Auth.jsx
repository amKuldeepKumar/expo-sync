import { Box, CardMedia, Grid, Typography } from "@mui/material";
import logo from "../../../../public/Logo_Final_PNG_Black-Text.png";
import AuthForm from "./AuthForm";
import backgroundImage from "../../../../public/TD_007.jpg";

const Auth = () => {
  return (
    <Grid container spacing={0}>
      <Grid item md={8}>
        <Box 
          className="image-custom"
          color="primary"
          sx={{
            height: "100vh",
            width: "100%",
            backgroundImage:
              "linear-gradient(90deg, #4b4a4b 0%, rgba(41,196,169,0) 100%), url(" +
              backgroundImage +
              ")",

            display: { xs: "none", md: "flex" },
            backgroundSize: "cover", // Ensure the background image covers the entire box
            backgroundPosition: "center", // Center the image
          }}
        >
          <Box
            sx={{ height: "100%" }}
            p={3}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Grid container spacing={2} p={2}>
              <Grid
                item
                md={12}
                sm={12}
                xs={12}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
              >
                <CardMedia
                  src={logo}
                  alt="logo"
                  component="img"
                  style={{
                    height: "150px",
                    width: "355px",
                    objectFit: "contain",
                    objectPosition: "center top",
                  }}
                />
              </Grid>

              <Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography p={3} fontWeight={"550"} flexWrap={"wrap"}>
                    event management tool allows users to create teams, assign
                    tasks, and manage vendors, streamlining event planning and
                    execution. It enhances team coordination and simplifies
                    vendor coordination for successful event outcomes.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Grid>
      <Grid item md={4} xs={12}>
        <AuthForm />
      </Grid>
    </Grid>
  );
};

export default Auth;
