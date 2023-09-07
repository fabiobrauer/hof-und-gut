import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ReitenBasicGrid() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2} >
        <Grid xs={12} lg={4}>
                <Item sx={{backgroundColor:"primary.dark", minHeight:'650px'}}> 
                        <Typography fontSize='xx-large' sx={{m:'10px'}}>
                        Unsere aktuellen Angebote im Reitbetrieb zum Herunterladen
                        </Typography>
                        <Typography  fontSize='x-large'> 
                            Hier findet Ihr alle Angebote der Reitschule, einfach anklicken:
                        </Typography>
                            <Typography fontSize='x-large'>
                                      <a href="Tages.Ponyferien.Information.AKTUELL.pdf">Tages.Ponyferien.Information</a> <br></br>
                                        <a href="Jahresprogramm-05.2023.pdf">Jahresprogramm 05.2023</a> <br></br>
                                        <a href="Reitschulvertrag01.23.pdf">Reitschulvertrag01.23</a> <br></br>
                                       <a href="Info.Ponygeburtstagsfeiern.pdf">Ponygeburtstagsfeier.pdf</a><br></br>
                                       {/* <a href="">Anmeldung Pony Sommer 23</a>  */}
                                        
                            </Typography>
                </Item>
        </Grid>
        <Grid xs={12} lg={8}>
          <Item sx={{backgroundColor:"primary.dark"}}>
          <CardMedia
                                component="img"
                                image="Ponies2.jpg"
                                height='650'
                                alt="Poniereiten"
                                />
          </Item>
        </Grid>
        <Grid xs={12} lg={7}>
          <Item sx={{backgroundColor:"primary.dark"}}>
          <CardMedia
                                component="img"
                                image="PoniesReiten.jpeg"
                                height='650'
                                alt="Poniereiten"
                                /></Item>
        </Grid>
        <Grid xs={12} lg={5}>
          <Item sx={{backgroundColor:"primary.dark", minHeight:'650px'}}>
            <Typography fontSize={'xx-large'} m={'30px'}>
                Reitworkshops
            </Typography>
            <Typography fontSize={'x-large'}>
            Wir bieten in den Ferien Reitworkshops für Kinder ab 6 Jahren an, sowie auch Programme für Kindergeburtstage
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}