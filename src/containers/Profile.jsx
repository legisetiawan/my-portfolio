import React from "react";
import { Box, Typografy, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";
import Tentang from "../components/Tentang";

const Profile = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar>
          <Toolbar>
            <Link to="/tentang" style={{ color: "white", marginRight: 5 }}>
              Tentang
            </Link>
            <Link to="/pendidikan" style={{ color: "white" }}>
              Pendidikan
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Profile;
