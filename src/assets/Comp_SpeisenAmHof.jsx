import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

                      
                      
    (function(d, s) {
        var js, rjs = d.getElementsByTagName(s)[0];     
            js = d.createElement(s);     
            js.src = "//static.resmio.com/static/de/button.js";     
            js.async = true;    
            rjs.parentNode.insertBefore(js, rjs);
                  }(document, "script")   );
                    


export default function Comp_SpeisenAmHof() {
  return (
    <Box sx={{ flexGrow: 1, mt:'15px'}}>
      <Grid container spacing={2} >

        <Grid xs={12} lg={3} >
          <Item sx={{backgroundColor:"primary.dark" , height:'100%', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Typography fontSize={'xx-large'} sx={{ m:'30px'}} >
                    Öffnungszeiten:
                </Typography>
                <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>
                    Montag - Freitag: 17:00 - 22:00 Uhr (warme Küche)
                    <br></br>
                  Samstag, Sonntag und Feiertag: 12:00 - 22:00 Uhr (warme Küche)
                </Typography>
                <Box>
                <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>
                    Kontakt:
                    <br></br>
                    <a href="mailto:info@hof-und-gut.de">E-Mail: info@hof-und-gut.de</a>
                    
                    <br></br>
                    <a href="tel:04181 9199500">Tel: 04181 9199500</a>
                    <br></br>
                    <a href="tel:0176 70671532">Tel mobil: 0176 70671532</a>
                    
                </Typography >
                </Box>
                
<Box>
<a href='https://cdn.shopify.com/s/files/1/0756/4568/2002/files/Aktuelle_Speisekarte.pdf?v=1731358156' /* download={'Speisekarte07.09.2023.pdf'} */><Button variant='contained' sx={{bgcolor:'secondary.main', m:'15px;'}} >Aktuelle Speisekarte</Button></a>
                    
                    <script
                    type="text/javascript" 
                    data-resmio-button="hof-gut-jesteburg" 
                    data-resmio-fontsize="14px" 
                    data-resmio-fontcolor="%23FFFFFF" 
                    data-resmio-buttontext="Jetzt%20reservieren" 
                    data-resmio-bordercolor="%23FFFFFF" 
                    data-resmio-borderwidth="0" 
                    data-resmio-buttoncolor="%23c41500" 
                    data-resmio-buttonshadow="true" 
                    data-resmio-widget-color="%23555555" 
                    data-resmio-widget-width="275" 
                    data-resmio-widget-height="400" 
                    data-resmio-widget-fontsize="14px" 
                    data-resmio-widget-facebooklogin="true" 
                    data-resmio-widget-backgroundcolor="%23ffffff" 
                    data-resmio-widget-commentsdisabled="false" 
                    data-resmio-widget-newslettersignup="true" 
                    data-resmio-widget-linkbackgroundcolor="%23c40e07"> 
                    </script >
</Box>
<Typography sx={{fontSize:'small'}}>falls "jetzt reservieren" nicht erscheint bitte neu laden</Typography>

          </Item>

        </Grid>
        
        <Grid xs={12} lg={6} >
                <Item sx={{backgroundColor:"primary.dark", height:'100%'}}> 
                <CardMedia
                component="img"
                image="Entrecôte.jpg"
                alt="Entrecote"
                sx={{ 
                  height: '100%', 
                  width: '100%', 
                  objectFit: 'cover' 
                }}
              />
                </Item>
        </Grid>

        <Grid xs={12} lg={3}>
          <Item sx={{backgroundColor:"primary.dark", height:'100%'}}>
            <Typography fontSize={'xx-large'} sx={{ m:'10px'}} >Anfahrt</Typography>
            <iframe title='Navigiere zu Hof&Gut Jesteburg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.221622002947!2d9.933264077093998!3d53.32138507659057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1bd89bb3a0267%3A0x23876e66af16eac5!2sHof%20%26%20Gut%20Jesteburg!5e0!3m2!1sen!2sde!4v1693483721231!5m2!1sen!2sde" width="100%" height="400px"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </Item>
        </Grid>


      </Grid>
    </Box>
  );
}