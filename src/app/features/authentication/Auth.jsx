import { Box, Grid, Typography } from "@mui/material";
import backgroundImage from "../../../assets/TD_007.jpg";
import AuthForm from "./AuthForm";
import { Footer } from "../../components/Footer";

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
            <Grid container spacing={2} p={5} mt={40}>
              <Grid>
                <Grid item md={12} sm={12} xs={12}>
                  <Typography
                    color="white"
                    width="50%"
                    mb={1}
                    fontWeight={"500"}
                    flexWrap={"wrap"}
                    fontSize={22}
                  >
                    Streamline your event operations with ease. Manage
                    logistics, teams, and tasks from one powerful platform.
                  </Typography>
                  <Typography
                    color="white"
                    width="50%"
                    fontWeight={"500"}
                    flexWrap={"wrap"}
                    fontSize={22}
                  >
                    Empower your back-office team to work smarter. Simplify
                    processes and ensure flawless event execution.
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
      <Footer />
    </Grid>
  );
};

export default Auth;
