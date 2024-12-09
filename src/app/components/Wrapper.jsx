import { Grid } from "@mui/material";
import NavBar from "./NavBar";

export const Wrapper = (props) => {
  return (
    <>
      <Grid sx={{ backgroundColor: "rgba(169, 184, 183,)" }}>
        <NavBar />
        {props.children}
      </Grid>
    </>
  );
};
