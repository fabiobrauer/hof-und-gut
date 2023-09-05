import * as React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import CustomizedMenus from './Comp_Menu2';
import ReitenMenus from './Comp_Menu';
import RestaurantUnterkunftMenus from './Comp_Menu3';
import { Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import MobileMenu from './Comp_MobileMenu';
import { Margin } from '@mui/icons-material';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 168,
  },
}));

export default function ProminentAppBar() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="sticky" sx={{backgroundColor: 'rgb(80, 179, 103)'}}>
        <StyledToolbar sx={{display:'flex', justifyContent:'space-between', paddingTop:'50px', paddingLeft:'30px'}}>
         <Link to={'/'}><img src="SVGLogo.svg" alt="Logo" width={'130px'} height={'100%'}/></Link>

          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2}}
            
          >
            <Button variant='Contained' sx={{color:'primary.contrastText', fontSize:'large', display:'flex', flexDirection:'column', backgroundColor:'primary.main', height:'107px', display: { xs:'none', lg:'flex'}}} href='/'><HomeIcon sx={{fontSize:'3em'}}/>Home</Button>
            <RestaurantUnterkunftMenus></RestaurantUnterkunftMenus>
            <CustomizedMenus></CustomizedMenus>
            <ReitenMenus></ReitenMenus>
            <MobileMenu></MobileMenu>
            
            

          </IconButton> 
        </StyledToolbar>
      </AppBar>
    </Box>
  );
}