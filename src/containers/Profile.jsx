import React from "react";
import { Box, Typografy, AppBar, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Tentang from "../components/Tentang";

const Profile = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}><Link to="/">legi setiawan</Link></Typography>
            <Link to="/tentang" style={{ color: "white", marginRight: 5 }}>
              Tentang
            </Link>
            <Link to="/pendidikan" style={{ color: "white", marginRight: 5 }}>
              Pendidikan
            </Link>
            <Link to="/skills" style={{ color: "white",marginRight: 5  }}>
              Skills
            </Link>
            <Link to="/projects" style={{ color: "white" }}>
              Projects
            </Link>
          </Toolbar>
          </Box>
        </AppBar>
      </Box>
    </>
  );
};

export default Profile;
