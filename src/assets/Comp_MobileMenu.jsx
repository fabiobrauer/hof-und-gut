import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import './Comp_Menu.css'
import DirectionsIcon from '@mui/icons-material/Directions';
import { Box } from '@mui/material';
import SvgIconChildren from './SVGIcon';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import LocalHotelIcon from '@mui/icons-material/LocalHotel';
import HailIcon from '@mui/icons-material/Hail';


const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
 
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    backgroundColor:'rgb(80, 140, 103)',
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function MobileMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box  sx={{display: { xs:'block', lg:'none'}}}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        sx={{display:'flex', flexDirection:'column', justifyContent:'space-between', backgroundColor:'transparent'}}

      >
        <MenuIcon sx={{fontSize: "4em"}} />Menu
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >

        <Link to={'/SpeisenAmHof'} className='Link'><MenuItem onClick={handleClose} sx={{display:'flex', justifyContent:'space-between', fontSize:{xs:'large'}}}>Speisen Am Hof <RestaurantIcon sx={{transform:'scale(3)'}}/></MenuItem></Link>
        <Link to={'/ÜbernachtenAmHof'} className='Link'><MenuItem onClick={handleClose} sx={{display:'flex', justifyContent:'space-between',fontSize:{xs:'large'}}}>Übernachten Am Hof <LocalHotelIcon sx={{transform:'scale(3)'}}/></MenuItem></Link>
        <Link to={'/Stellenangebote'} className='Link'><MenuItem onClick={handleClose} sx={{display:'flex', justifyContent:'space-between',fontSize:{xs:'large'}}} >Stellenangebote<HailIcon sx={{transform:'scale(3)'}}/></MenuItem></Link>
        <Link to={'/Kontakt'} className='Link'><MenuItem onClick={handleClose} sx={{display:'flex', justifyContent:'space-between',fontSize:{xs:'large'}}}>Kontakt / Anfahrt<DirectionsIcon sx={{transform:'scale(3)'}}/></MenuItem></Link>


        <Link to={'/Reiten'} className='Link'><MenuItem onClick={handleClose} sx={{display:'flex', justifyContent:'space-between',fontSize:{xs:'large'}}}> Reit Angebot<SvgIconChildren sx={{transform:'scale(3)'}}/></MenuItem></Link>


        <Link to={'/Gebäude'} className='Link'><MenuItem onClick={handleClose} >Gebäude</MenuItem></Link>
        <Link to={'/ÖkologischeLandwirtschaft'} className='Link'><MenuItem onClick={handleClose} >ÖkologischeLandwirtschaft</MenuItem></Link>




        <Link to={'/Links'} className='Link'><MenuItem onClick={handleClose} >Links</MenuItem></Link>
        <Link to={'/Presse'} className='Link'><MenuItem onClick={handleClose} >Presse</MenuItem></Link>
        <Link to={'/TeamtrainingUndFirmenevents'} className='Link'><MenuItem onClick={handleClose} >Teamtraining Und Firmenevents</MenuItem></Link>
        <Link to={'/VeranstaltungenKunstKultur'} className='Link'><MenuItem onClick={handleClose} >Veranstaltungen Kunst & Kultur</MenuItem></Link>




      </StyledMenu>
    </Box>
  );
}