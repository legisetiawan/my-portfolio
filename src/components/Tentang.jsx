import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { lightBlue, lightGreen } from "@mui/material/colors";

const Tentang = () => {
  return (
    <>
      <Box sx={{mt:10}}>
        <Container sx={{ display:"flex",bgcolor:"lightGreen",minWidth:500,minHeight:500,textAlign:"center"}} maxWidth="lg">
          <Typography variant="body1"> Saya lulusan S1 Teknik Informatika Komputer dengan Ipk 2.74, menyukai program (web,android) dan bahasa lain dan juga memahami basic jaringan Komputer</Typography>
        </Container>
      </Box>
    </>
  );
};

export default Tentang;
