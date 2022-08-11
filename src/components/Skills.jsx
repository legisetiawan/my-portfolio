import { Box, CardHeader, Container, Typography, Grid, Item, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import CardItems from "./ItemsNav";

const Skills = () => {
  const [skills, setSkills] = useState([{ id: 1, nama: "Belajar Dasar Pemrograman Web", penerbit: "Dicoding" }]);
  return (
    <>
      <Typography variant="h5">Front End Develover</Typography>
      <Container maxWidth="lg">
        <CardItems />
        <CardItems />
        <CardItems />
      </Container>
    </>
  );
};

export default Skills;
