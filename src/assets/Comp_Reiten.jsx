import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ReitenBasicGrid() {
  return (
    <Box sx={{ flexGrow: 1, marginTop: '5px' }}>
      <Grid container spacing={2}>
        {/* Left section with download links */}
        <Grid xs={12} lg={4}>
          <Item sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center',backgroundColor:"primary.dark"  }}>
            <Typography fontSize="x-large" sx={{ m: '10px' }}>
              Unsere aktuellen Angebote im Reitbetrieb zum Herunterladen
            </Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: 'xs' } }}>
              Hier findet Ihr alle Angebote der Reitschule, einfach anklicken:
            </Typography>
            <Typography sx={{ fontSize: 'small', mt: 2 }}>
              <a href="Tages.Ponyferien.Information.AKTUELL1.pdf">Tages-Ponyferien</a> <br />
              <a href="Jahresprogramm-2024.aktuell.pdf">Jahresprogramm 2024</a> <br />
              <a href="Reitschulvertrag01.23 (1).pdf">Reitschulvertrag 01.23</a> <br />
              <a href="Info.Ponygeburtstagsfeiern (1).pdf">Ponygeburtstagsfeiern</a>
            </Typography>

            <a href="https://ponyreitschuleknot.wixsite.com/pony-club">
              <Button variant="contained" sx={{ bgcolor: 'secondary.main', mt: '15px' }}>
                Zur Ponyreitschuleknott Webseite
              </Button>
            </a>

            <Box mt={4}>
              <Typography fontSize="x-large" m="5px">
                Reitworkshops
              </Typography>
              <Typography sx={{ fontSize: { xs: 'small', xl: 'xs' } }}>
                Wir bieten in den Ferien Reitworkshops für Kinder ab 6 Jahren an, sowie auch Programme für
                Kindergeburtstage.
              </Typography>
              <Typography sx={{ fontSize: { xs: 'small', xl: 'xs' }, mt: 1 }}>
                Weitere Angebote für Kinder
              </Typography>
              <a href="https://ponyreitschuleknot.wixsite.com/pony-club/book-online">
                <Button variant="contained" sx={{ bgcolor: 'secondary.main', mt: '10px' }}>
                  Hier buchen
                </Button>
              </a>
            </Box>
          </Item>
        </Grid>

        {/* Right section with image */}
        <Grid xs={12} lg={8}>
          <Item sx={{ height: '100%' , backgroundColor:"primary.dark" }}>
            <a href="https://ponyreitschuleknot.wixsite.com/ponyreitschule-carme">
              <CardMedia component="img" image="PoniesReiten.jpeg" alt="Kinder beim Poniereiten auf dem Hof" />
            </a>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
