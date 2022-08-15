import React, { useState } from "react";
import Pendididkan from "./Pendididkan";
import Tentang from "./Tentang";
import { Link } from "react-router-dom";
import { AppBar, Toolbar } from "@mui/material";

const Navbar = () => {
  return (
    <>
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
    </>
  );
};

export default Navbar;
