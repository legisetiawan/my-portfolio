import React from "react";
import { Box, Container, Typography, AppBar, Toolbar } from "@mui/material";
import { lightBlue, lightGreen } from "@mui/material/colors";
import Navbar from "./Navbar";

const Tentang = () => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <AppBar>
          <Toolbar>
            <Navbar />
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ mt: 10 }}>
        <Container sx={{ display: "flex", bgcolor: "lightGreen", minWidth: 500, minHeight: 500, textAlign: "center" }} maxWidth="lg">
          <Typography variant="body1">
            {" "}
            Hai, perkenalkan nama saya legi setiawan biasa di panggil legi, alhamdulillah Saya lulus S1 Teknik Informatika Komputer dengan Ipk 2.74, menyukai program (web,android) untuk web saya bisa basic CI, android saya awal mula belajar
            otodidak dari link google Codelab dan referensi lain dilanjut crud dengan database atau API yang saya dapat dari Beasiswa Udacoding,Dan Dicoding. dan bahasa lain(python basic) dan juga memahami basic jaringan Komputer membagi
          </Typography>
        </Container>
      </Box>
    </>
  );
};

export default Tentang;
