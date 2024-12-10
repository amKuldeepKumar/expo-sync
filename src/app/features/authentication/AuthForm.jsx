import {
  Box,
  Button,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import logo from "../../../../public/Logo_Final_PNG_Black-Text.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const AuthForm = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const signinButton = () => {
    if (data.email === "admin@gmail.com" && data.password === "password") {
      localStorage.setItem("User", JSON.stringify(data));
      navigate("/");
      window.location.reload();
    } else {
      alert("password and email incorrect");
    }
  };

  return (
    <Box sx={{ height: "100vh", width: "100%", backgroundColor: "secondary" }}>
      <Box
        sx={{ height: "100%" }}
        p={3}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        
      >
        <Grid container spacing={2}>
          <Grid item md={12} sm={12} xs={12}>
            <Box
              sx={{ height: "100%", display: { md: "none", xs: "flex" } }}
              p={3}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <CardMedia
                src={logo}
                component="img"
                style={{
                  height: "200px",
                  width: "305px",
                  objectFit: "contain",
                  objectPosition: "center top",
                }}
              />
            </Box>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Typography>
              {" "}
              <b>Welcome to The Traingular Dots </b>
              <br /> <p style={{ fontSize: "12px" }}>Event Management.</p>
            </Typography>
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <Box>
              <TextField
                label="Email"
                fullWidth
                name="email"
                placeholder="ex: kuldeep.navv@gmail.com"
                onChange={handleChange}
              />
            </Box>

            <Box mt={2}>
              <TextField
                fullWidth
                name="password"
                placeholder=""
                label="Password"
                type="password"
                onChange={handleChange}
              />
            </Box>
          </Grid>

          <Grid item md={12} sm={12} xs={12}>
            <Button
              color="primary"
              fullWidth
              variant="outlined"
              onClick={signinButton}
            >
              Sign In
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default AuthForm;
