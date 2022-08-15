import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Navbar from './Navbar'

const Pendididkan = () =>{
  return (
    <>
    <Navbar/>
    <Box>
        <Container sx={{ display:"flex",bgcolor:"lightBlue",minWidth:500,minHeight:500,textAlign:"center",mt:3,mb:3}} maxWidth="lg">
            <Typography variant='body1'> Universitas Muhammadiyah Riau</Typography>
        </Container>
    </Box>
    </>
  )
}

export default Pendididkan