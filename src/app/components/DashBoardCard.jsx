// src/components/DashboardCard.js
import React from "react";
import { Box, Card, CardContent, Typography } from "@mui/material";

const DashboardCard = ({ data }) => {
  return (
    <Card sx={{ height: "100%" }}>
      <CardContent>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h5">{data.title}</Typography>
          {data?.icon}
        </Box>

        <Typography variant="h6" color="textSecondary">
          {data.value}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
