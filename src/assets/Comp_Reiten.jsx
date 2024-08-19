import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import { Button } from '@mui/material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function ReitenBasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop:"5px"}}>
      <Grid container spacing={2}>
        <Grid xs={12} lg={4}>
                <Item sx={{backgroundColor:"primary.dark", height:'100%', display:'flex', flexDirection:"column", justifyContent:"center", textAlign:"center"}}> 
                            <div>
                              <Typography fontSize='x-large' sx={{m:'10px'}}>
                              Unsere aktuellen Angebote im Reitbetrieb zum Herunterladen
                              </Typography>
                              <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}> 
                                  Hier findet Ihr alle Angebote der Reitschule, einfach anklicken:
                              </Typography>
                                  <Typography sx={{fontSize:'small'}}>
                                            <a href="Tages.Ponyferien.Information.AKTUELL1.pdf">Tages.Ponyferien</a> <br></br>
                                              <a href="Jahresprogramm-2024.aktuell.pdf">Jahresprogramm 2024</a> <br></br>
                                              <a href="Reitschulvertrag01.23 (1).pdf">Reitschulvertrag01.23</a> <br></br>
                                            <a href="Info.Ponygeburtstagsfeiern (1).pdf">Ponygeburtstagsfeier.pdf</a><br></br>
                                  </Typography>
                            </div>  
                              <a href="https://ponyreitschuleknot.wixsite.com/pony-club"><Button variant='contained'sx={{backgroundColor:'secondary.main', mt:'10px'}} >zur ponyreitschuleknott Webseite</Button></a>
                            <div>
                              <Typography fontSize={'x-large'} m={'5px'}>
                                  Reitworkshops
                              </Typography>
                              <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>
                                  Wir bieten in den Ferien Reitworkshops für Kinder ab 6 Jahren an, sowie auch Programme für Kindergeburtstage
                              </Typography>
                              <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>
                                Weitere Angebote für Kinder
                              </Typography>
                              <a href="https://ponyreitschuleknot.wixsite.com/pony-club/book-online"><Button variant='contained'sx={{backgroundColor:'secondary.main', mt:'10px'}} >hier buchen</Button></a>
                            </div>
                  </Item>
        </Grid>


        <Grid xs={12} lg={8}>
          <Item sx={{backgroundColor:"primary.dark", height:'100%', padding:'10px'}} >
            <a href="https://ponyreitschuleknot.wixsite.com/ponyreitschule-carme">
          <CardMedia
                                component="img"
                                image="PoniesReiten.jpeg"
                                alt="Poniereiten"
                                />
              </a>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}