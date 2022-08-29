import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar component="nav">
          <Typography variant="h4"> legi setiawan</Typography>
          <Toolbar>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Navbar />
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    
    </>
  );
};

export default Home;
