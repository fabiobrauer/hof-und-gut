import React from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import NightShelterIcon from '@mui/icons-material/NightShelter';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';
import Comp_LogoBanner from './LogoSVG2';
import LogoViereckSVG from './LogoViereckSVG'






export default function Footer() {
  return (
    
    <Box sx={{backgroundColor: 'rgb(7, 190, 138, 0.2)', border: "1px solid black", mt: "10px", display:'flex', justifyContent:'space-between', flexDirection:{xs:'column', lg:'row'}, textAlign:{xs:'center', lg:'left'}}} >

      <Box sx={{display:{xs:'none', xl:'block'}, marginLeft:'20px'}}>
          <Link to={'/'}><LogoViereckSVG></LogoViereckSVG></Link>
      </Box>
      
      
      <Box sx={{justifyItems:'center', padding:'50px'}}>
        <Typography sx={{fontSize:'md', wordWrap:'break-word',fontWeight:'700'}}>Hof & Gut Jesteburg GmbH</Typography>
        <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>Handelsregisternummer: HRB 736947</Typography>
        <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}><a href="/Disclaimer" style={{wordWrap:'break-word'}}>Haftungsausschluss</a></Typography>
        
      </Box>
      <Box sx={{padding:'50px'}}>
        <Typography sx={{fontSize:'md',fontWeight:'700'}}>Restaurant & Übernachtung</Typography>
        <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>E-Mail: <a href="mailto:">info@hof-und-gut.de</a></Typography>
        <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>Tel.: <a href="tel:04181 9199500">04181 9199500</a> </Typography>
   
 {/*        <Typography sx={{fontSize:'md',fontWeight:'700'}}>Büro</Typography>
        <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>E-Mail: <a href="mailto:">info@hof-und-gut.de</a></Typography>
        <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>Tel.: <a href="tel:+49 4183 9759994">04183 9759994</a> </Typography> */}
      </Box>

        <Box sx={{display:'flex', flexDirection:'column',padding:'50px' }}>

          <Box sx={{display:'flex', margin:'0 auto'}}>
            <a href="https://www.instagram.com/hofundgutjesteburg/">
            <Box sx={{textAlign:'center', width:'150px'}}>          
              <InstagramIcon sx={{fontSize:'xxx-large'}}></InstagramIcon>
              <Typography >Instagram</Typography>
            </Box>
            </a>
            <a href="https://www.facebook.com/hofundgut/">
            <Box sx={{textAlign:'center', width:'150px'}}>  
              <FacebookIcon sx={{fontSize:'xxx-large'}}></FacebookIcon>
              <Typography >Facebook</Typography>
            </Box>
            </a>
          </Box>  


          <Box sx={{display:'flex', margin:'0 auto'}}>
            <a href="https://www.booking.com/hotel/de/hof-und-gut-jesteburg.de.html?label=gen173rf-1FCA0oO0IVaG9mLXVuZC1ndXQtamVzdGVidXJnSAdYA2g7iAEBmAEHuAEXyAEM2AEB6AEB-AECiAIBogIQc2VhcmNoLmJyYXZlLmNvbagCA7gC8easqAbAAgHSAiQwMWY2NGNiOC03MzY4LTQ5MzQtOTU4ZS0xMzRkMjEwM2RkODfYAgXgAgE&sid=1aa700cd70c9fe81fd137467d6ea43b7">
            <Box sx={{textAlign:'center', width:'150px'}}>
              <NightShelterIcon sx={{fontSize:'xxx-large'}}></NightShelterIcon>
              <Typography >Booking.com</Typography>
            </Box>  
            </a>        
            <a href="https://shop-hof-und-gut.de/">
            <Box sx={{textAlign:'center', width:'150px'}}>
              <ShoppingBagIcon sx={{fontSize:'xxx-large'}}></ShoppingBagIcon>
              <Typography >Onlineshop</Typography>
            </Box>
            </a>
          </Box>  


    </Box>


    </Box>
  )
}
