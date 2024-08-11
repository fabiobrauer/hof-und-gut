import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import CustomizedMenus from './Comp_Menu2';
import ReitenMenus from './Comp_Menu';
import RestaurantUnterkunftMenus from './Comp_Menu3';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MobileMenu from './Comp_MobileMenu';
import Comp_LogoBanner from './LogoSVG2';
import LogoViereckSVG from './LogoViereckSVG';


const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  '@media all': {
    minHeight: 168,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar position="sticky" sx={{backgroundColor: 'rgb(7, 190, 138, 0.2)', border:'1px solid black'}}>
        <StyledToolbar sx={{display:'flex', justifyContent:'space-between', paddingTop:'0'}}>
         <Link to={'/'}>

{/*         <Comp_LogoBanner></Comp_LogoBanner> */}
        <LogoViereckSVG></LogoViereckSVG>

         </Link>

          <Box             
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2, display:'flex', mt:'90px'/* , backgroundColor: "rgb(0,0,0, 0.1)" */, borderRadius:'20px'}}>
            <Button variant='Contained' sx={{color:'primary.contrastText', fontSize:'large',  flexDirection:'column',  height:'107px', display: { xs:'none', lg:'flex'}}} href='/'><HomeIcon sx={{fontSize:'3em'}}/>Home</Button>
            <RestaurantUnterkunftMenus></RestaurantUnterkunftMenus>
            <CustomizedMenus></CustomizedMenus>
            <ReitenMenus></ReitenMenus>
            <MobileMenu></MobileMenu>
          </Box> 
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}