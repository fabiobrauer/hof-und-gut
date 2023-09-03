import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import './Comp_Menu.css'



export default function PositionedMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <MenuIcon sx={{fontSize: "5em", color: 'white'}} />
      </Button>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}

      >
        <Link to={'/'} className='Link'><MenuItem onClick={handleClose} >Homepage</MenuItem></Link>
        <Link to={'/Kontakt'} className='Link'><MenuItem onClick={handleClose}>Kontakt / Anfahrt</MenuItem></Link>
        <Link to={'/Gebäude'} className='Link'><MenuItem onClick={handleClose}>Gebäude</MenuItem></Link>
        <Link to={'/Links'} className='Link'><MenuItem onClick={handleClose}>Links</MenuItem></Link>
        <Link to={'/ÖkologischeLandwirtschaft'} className='Link'><MenuItem onClick={handleClose}>ÖkologischeLandwirtschaft</MenuItem></Link>
        <Link to={'/Presse'} className='Link'><MenuItem onClick={handleClose}>Presse</MenuItem></Link>
        <Link to={'/Reiten'} className='Link'><MenuItem onClick={handleClose}>Reiten</MenuItem></Link>
        <Link to={'/SpeisenAmHof'} className='Link'><MenuItem onClick={handleClose}>Speisen Am Hof</MenuItem></Link>
        <Link to={'/ÜbernachtenAmHof'} className='Link'><MenuItem onClick={handleClose}>Übernachten Am Hof</MenuItem></Link>
        <Link to={'/Stellenangebote'} className='Link'><MenuItem onClick={handleClose}>Stellenangebote</MenuItem></Link>
        <Link to={'/TeamtrainingUndFirmenevents'} className='Link'><MenuItem onClick={handleClose}>Teamtraining Und Firmenevents</MenuItem></Link>
        <Link to={'/VeranstaltungenKunstKultur'} className='Link'><MenuItem onClick={handleClose}>Veranstaltungen Kunst & Kultur</MenuItem></Link>
      </Menu>
    </div>
  );
}