import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Helmet } from 'react-helmet-async';
import Comp_Swiper from '../assets/Comp_shop2';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Hofladen() {
  return (
    <Box sx={{ flexGrow: 1, mt: '15px' }}>
      <Helmet>
        <title>Hofladen</title>
        <meta name="description" content="Der Hof und Gut Hofladen" />
        <link rel="canonical" href="/Hofladen" />
        <meta name="fragment" content="!" />
      </Helmet>
      <Grid container mt="10px">
        {/* Image and description section */}
        <Grid xs={12} lg={4} sx={{ p: '10px' }}>
          <Item sx={{ backgroundColor: 'primary.dark' }}>
            <CardMedia
              component="img"
              image="Hofladen1.jpg"
              alt="Hofladen Bild"
              sx={{
                objectFit: 'cover',
                objectPosition: 'bottom',
                maxHeight: '420px',
                minHeight: '410px',
              }}
            />
          </Item>
        </Grid>

        <Grid xs={12} lg={4} sx={{ p: '10px' }}>
          <Item sx={{ backgroundColor: 'primary.dark', height: '100%' }}>
            <Typography fontSize="x-large">Der Hofladen</Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: 'xs' } }}>
              Unser kleiner Hofladen ist immer Dienstag abends und am Samstag von 11-15 Uhr geöffnet. Es gibt Fleisch, Wurst und Grillgut vom Hof&Gut Aubrac, Hühnchenfleisch und allerlei frische Salate und Saucen vom Hof Warnke, saisonales Gemüse und Bioeier von den Biohöfen Wurzelreich und Koch, sowie eine kleine Auswahl von italienischen Spezialitäten und Erlesenes aus dem Hof&Gut-Weinkeller. Für Hübsches sorgen Bea und Heike...
            </Typography>
          </Item>
        </Grid>

        <Grid xs={12} lg={4} sx={{ p: '10px' }}>
          <Item sx={{ backgroundColor: 'primary.dark' }}>
            <CardMedia
              component="img"
              image="Produktauswahlt.jpg"
              alt="Produktauswahl"
              sx={{
                objectFit: 'cover',
                objectPosition: 'bottom',
                maxHeight: '420px',
                minHeight: '410px',
              }}
            />
          </Item>
        </Grid>

        {/* Rindfleisch and Gänse sales section */}
        <Grid xs={12} lg={4} sx={{ p: '10px', display: 'flex' }}>
          <Item sx={{ backgroundColor: 'primary.dark', flexGrow: 1 }}>
            <Typography fontSize="large">
              Verkauf von Rindfleisch aus ökologischer Haltung (Rindfleisch und Gänse)
            </Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: 'xs' } }}>
              Wir verkaufen in regelmäßigen Abständen Rindfleisch aus eigener Produktion. Es kann jeweils in 10- oder 20-kg-Paketen erworben werden (Preis 170,- bzw. 320,- Euro). Enthalten sind immer Rouladen, Hack, Braten, Gulasch, Beinscheibe, Suppenfleisch und Steaks. Außerdem können Sie bereits jetzt eine Weihnachtsgans 2024 bestellen, solange der Vorrat reicht! Bitte melden Sie sich bei Interesse gerne unter info@hof-und-gut.de, damit wir ein Paket Fleisch oder eine Gans für Sie reservieren!
            </Typography>
          </Item>
        </Grid>

        {/* Additional images */}
        <Grid xs={12} lg={4} sx={{ p: '10px' }}>
          <Item sx={{ backgroundColor: 'primary.dark' }}>
            <CardMedia
              component="img"
              image="Gemuese.jpg"
              alt="Gemüse"
              sx={{
                objectFit: 'cover',
                objectPosition: 'bottom',
                maxHeight: '550px',
                minHeight: '540px',
              }}
            />
          </Item>
        </Grid>

        <Grid xs={12} lg={4} sx={{ p: '10px' }}>
          <Item sx={{ backgroundColor: 'primary.dark' }}>
            <CardMedia
              component="img"
              image="Produkte2.jpg"
              alt="Produkte"
              sx={{
                objectFit: 'cover',
                objectPosition: 'bottom',
                maxHeight: '550px',
                minHeight: '540px',
              }}
            />
          </Item>
        </Grid>

        {/* Swiper component */}
        <Grid xs={12} lg={12} sx={{ pr: '10px', pl: '10px' }}>
          <Comp_Swiper />
        </Grid>
      </Grid>
    </Box>
  );
}
