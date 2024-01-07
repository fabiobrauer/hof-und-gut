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
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function ReitenBasicGrid() {
  return (
    <Box sx={{ flexGrow: 1}}>
      <Grid container spacing={2}>
        <Grid xs={12} lg={4} display={'flex'} justifyContent={'space-between'} flexDirection={'column'} gap={'15px'}>
                <Item sx={{backgroundColor:"primary.dark", height:'100%'}}> 
                        <Typography fontSize='xx-large' sx={{m:'10px'}}>
                        Unsere aktuellen Angebote im Reitbetrieb zum Herunterladen
                        </Typography>
                        <Typography  fontSize='x-large'> 
                            Hier findet Ihr alle Angebote der Reitschule, einfach anklicken:
                        </Typography>
                            <Typography fontSize='x-large'>
                                      <a href="Tages.Ponyferien.Information.AKTUELL1.pdf">Tages.Ponyferien</a> <br></br>
                                        <a href="Jahresprogramm-05.2023.pdf">Jahresprogramm 05.2023</a> <br></br>
                                        <a href="Reitschulvertrag01.23 (1).pdf">Reitschulvertrag01.23</a> <br></br>
                                       <a href="Info.Ponygeburtstagsfeiern (1).pdf">Ponygeburtstagsfeier.pdf</a><br></br>
                                       {/* <a href="">Anmeldung Pony Sommer 23</a>  */}
                                        
                            </Typography>
                </Item>
                <Item sx={{backgroundColor:"primary.dark"}}>
            <Typography fontSize={'xx-large'} m={'10px'}>
                Reitworkshops
            </Typography>
            <Typography fontSize={'x-large'}>
                Wir bieten in den Ferien Reitworkshops für Kinder ab 6 Jahren an, sowie auch Programme für Kindergeburtstage
            </Typography>
          </Item>
        </Grid>
        <Grid xs={12} lg={8}>
          <Item sx={{backgroundColor:"primary.dark", height:'100%', padding:'0px'}} >
          <CardMedia
                                component="img"
                                image="PoniesReiten.jpeg"
                                alt="Poniereiten"
                                />
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}