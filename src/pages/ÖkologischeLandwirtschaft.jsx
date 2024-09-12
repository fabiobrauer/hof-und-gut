import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Helmet } from "react-helmet-async";
import LandwiBanner from '../assets/Comp_LandwiBanner';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function ÖkologischeLandwirtschaft() {
  return (
    <Box sx={{ flexGrow: 1, mt: '15px' }}>
      <LandwiBanner />

      <Helmet>
        <title>Ökologische Landwirtschaft Hof&Gut Jesteburg</title>
        <meta name="description" content="Alles über unsere Tiere und die Landwirtschaft" />
        <link rel='canonical' href="/ÖkologischeLandwirtschaft" />
        <meta name="fragment" content="!" />
      </Helmet>

      <Grid container spacing={2}>

        {/* Main Content with Images */}
        <Grid xs={12} lg={9} display={'flex'}>
          <Item sx={{ backgroundColor: "primary.dark", display: { xs: 'none', md: 'block' }, flexGrow: '1' }}>
            <Typography fontSize={'x-large'}>
              Ökologische Landwirtschaft
            </Typography>
            <CardMedia
              component="img"
              height="520"
              image="KüheNeu.jpeg"
              alt="Kühe"
              sx={{ objectFit: 'cover' }}
            />
          </Item>
          <Item sx={{ backgroundColor: "primary.dark", display: { xs: 'block', md: 'none' } }}>
            <Typography fontSize={'x-large'}>
              Ökologische Landwirtschaft
            </Typography>
            <CardMedia
              component="img"
              height="520"
              image="KüheNeu_Mobil.jpg"
              alt="Kühe"
            />
          </Item>
        </Grid>

        {/* Sidebar */}
        <Grid xs={12} lg={3}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <CardMedia
              component="img"
              image="EU-ELER_CMYK1-271x300 1.png"
              alt="EU Förderung"
            />
          </Item>
          <Item sx={{ backgroundColor: "primary.dark", mt: '15px' }}>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              Hier investiert Europa in die ländlichen Gebiete mit „Agrarumwelt- und Klimaschutzmaßnahmen”. Mit diesen Maßnahmen werden landwirtschaftliche Betriebe bei der Erhaltung und Verbesserung der Umweltsituation unterstützt. Ziel ist eine nachhaltige und ressourcenschonende Bewirtschaftung in Bezug auf Artenvielfalt, Boden, Wasser und den Schutz des Klimas. Siehe auch: <a href="https://www.eler.niedersachsen.de" target="_blank" rel="noopener noreferrer">www.eler.niedersachsen.de</a>
            </Typography>
          </Item>
        </Grid>

        {/* Philosophy Section */}
        <Grid xs={12} lg={4} display={'flex'}>
          <Item sx={{ backgroundColor: "primary.dark", flexGrow: '1' }}>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              <b>Philosophie</b><br /><br />
              Unser Ziel ist es, mit Hof&Gut einen Kreislauf (wieder)herzustellen, der Menschen in Lohn und Brot bringt und alle Tiere des Hofes ernährt. Außerdem soll sich die historische Hofstelle zu einem Ort der Begegnung entwickeln, an dem Kinder und Erwachsene als Gäste gerne verweilen, miteinander ihre Freizeit verbringen und einen historischen Bauernhof erleben. Die Hofstelle umfasst eine Gesamtfläche von 85 Hektar, je hälftig Forst- und Ackerflächen. Die Ackerflächen werden seit 2007 biologisch bewirtschaftet und jährlich von der Gesellschaft für Ressourcenschutz mbH (GfRS) aus Göttingen zertifiziert. Die zum Hof gehörenden Rinder stehen durch die extensiven Grünflächen auf eigener Futtergrundlage.
            </Typography>
          </Item>
        </Grid>

        {/* Map and Details Section */}
        <Grid xs={12} lg={8}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <CardMedia
              component="img"
              image="hofplan 1.png"
              alt="Hofplan"
            />
          </Item>
          <Item sx={{ backgroundColor: "primary.dark", mt: '15px' }}>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              Unsere Daten für die ökologische Bewirtschaftung:<br />
              Hof & Gut Jesteburg Agrar GmbH &Co KG<br />
              Betriebsnummer: 276033530200088<br />
              ÖkokontrollNr. DE-NI-039-08263-
            </Typography>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
