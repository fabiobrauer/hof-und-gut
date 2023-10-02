import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';




const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function EmtyGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt:'10px'}}>
      <Grid container spacing={2} >
        <Grid xs={12} lg={4}>
                <Item sx={{backgroundColor:"primary.dark", padding:'0', paddingBottom:'10px' }}>
                <Typography fontSize={'xx-large'}>
                    Öffnungszeiten:
                </Typography>
                <Typography fontSize={'x-large'}>
                    Montag - Freitag: 17:00 - 22:00 Uhr (warme Küche)
                    <br></br>
                  Samstag, Sonntag und Feiertag: 12:00 - 22:00 Uhr (warme Küche)
                </Typography>
                <Typography sx={{ fontSize: 'x-large', lineHeight:'3.5rem'}} >
                    Kontakt:
                    <br></br>
                    E-Mail: info@hof-und-gut.de
                    <br></br>
                    Tel: 04181 9199500
                    <br></br>
                    Tel mobil: 0176 70671532
                </Typography>

                    <Button variant='contained' sx={{bgcolor:'secondary.main', mr:"30px"}} >Aktuelle Speisekarte</Button>
                    <Button variant='contained' sx={{bgcolor:'secondary.main'}}>Tisch Buchem mit Resmio</Button>
                </Item>
        </Grid>

        <Grid xs={12} lg={8}>
          <Item sx={{backgroundColor:"primary.dark", height:'100%', padding:'0'}}>
            <Typography fontSize={'xx-large'} >So erreichen Sie uns:</Typography> 
        

              <Grid >
                <Item sx={{backgroundColor:"primary.light"}}>
                      <Typography>Hof & Gut Jesteburg GmbH bildet das Dach für die angesiedelten Betriebe</Typography>
                      <Typography>Büroadresse: Hauptstr. 321266 Jesteburg</Typography>
                </Item>
              </Grid>

            <Grid container gap={'10px'} justifyContent={'center'}>


              <Grid lg={3} xs={12} mb={2}>
                <Item sx={{backgroundColor:"primary.light", height:'100%'}}>
                    <Typography>Reitbetrieb Knott:</Typography>
                    <Typography>Reitgruppeneinteilung Carmen KnottE-Mail:   </Typography>
                    <Typography>ponyreitschule.knott@gmx.de</Typography>
                    <Typography>Tel. 01633796966</Typography>
                </Item>
              </Grid>


              <Grid lg={4} xs={12} mb={2}>
                <Item sx={{backgroundColor:"primary.light", height:'100%'}}>
                    <Typography>Speisen und Übernachten am Hof:</Typography>
                    <Typography>Inhaber Familie Spaqi <br></br><br></br>E-Mail: info@hof-und-gut.de</Typography>
                    <Typography>04181 9199500 (mobil 0176 70671532)</Typography>    
                </Item>
              </Grid>





            <Grid lg={4} xs={12} mb={2}>
              <Item sx={{backgroundColor:"primary.light", height:'100%'}}>
                  <Typography>Landwirtschaft: Hof & Gut Jesteburg Agrar GmbH & Co. KG</Typography> 
                  <Typography>Büroadresse: Hauptstr. 3 21266 Jesteburg</Typography>
                  <Typography>E-Mail: buchhaltung@hof-und-gut.de</Typography>
                  <Typography>Tel.: 04183 9759994</Typography>

              </Item>
              </Grid>
              







            </Grid>
          </Item>
        </Grid>

        <Grid xs={12} lg={12}>
          <Item sx={{backgroundColor:"primary.dark"}}>
            <Typography fontSize={'xx-large'} sx={{ m:'10px'}} >Anfahrt</Typography>
            <iframe title='Navigiere zu Hof&Gut Jesteburg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.221622002947!2d9.933264077093998!3d53.32138507659057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1bd89bb3a0267%3A0x23876e66af16eac5!2sHof%20%26%20Gut%20Jesteburg!5e0!3m2!1sen!2sde!4v1693483721231!5m2!1sen!2sde" width="100%" height="700px"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}