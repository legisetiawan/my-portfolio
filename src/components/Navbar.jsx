import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";

const navItems = ["Pendidikan", "Skills", "Project","Kontak"];
const Navbar = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar>
          <Toolbar component="nav">
            <Typography variant="h4" sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              {" "}
              legi setiawan
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navItems.map((item) => (
                <Button key={item} sx={{ color: "#fff" }}>
                  {item}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
