import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material"
import Navbar from './components/Navbar'
import Card  from './components/Card'
import Portfolio from './components/Portfolio'
import About from './components/About/index'
import Header from './components/Header'
import Crd from "./components/Cards/Card";
function App() {
  return (
    <div>
      <Navbar/>
      <Header/>
      <About/>
      <Card/>
      <Portfolio/>
        <Container fixed >
          <Box component="div" sx={{width:'100%' ,height: 'auto'}} >
            <Grid container>
              <Grid item xs={6} sx={{display: 'flex', alignItems:'center',}}>
                <Typography variant = 'h1' sx={{fontSize:'60px'}}>
                  Get the right plan for future product.
                </Typography>
              </Grid>
              <Grid item xs={6} sx={{display: 'flex', alignItems:'center', justifyContent:'flex-end'}}>
                <Box component="div" sx={{width:'auto'}}>
                  <Button variant="contained" sx={{width:'160px', height:'55px', border:'none', borderTopLeftRadius:'10px', borderBottomLeftRadius:'10px'}}>Contained</Button>
                  <Button variant="text" sx={{width:'160px', height:'55px',background:"#F7F7FB", borderTopRightRadius:"10px", borderBottomRightRadius:"10px"}}>Text</Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Crd />
        </Container>
    </div>
  );
}

export default App;