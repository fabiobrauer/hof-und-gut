import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Helmet } from "react-helmet-async";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function EmtyGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt: '15px' }}>
      <Helmet>
        <title>Teamtraining und Firmenevents bei Hof&Gut in Jesteburg</title>
        <meta name="description" content="Teamtraining und Firmenevents bei Hof&Gut in der Nordheide" />
        <link rel="canonical" href="/TeamtrainingUndFirmenevents" />
        <meta name="fragment" content="!" />
      </Helmet>

      <Grid container spacing={2}>
        <Grid xs={12} lg={4}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <CardMedia
              component="img"
              image="FirmenEvent.jpeg"
              alt="Firmen Event"
            />
          </Item>
          <Item sx={{ backgroundColor: "primary.dark", mt: '10px' }}>
            <CardMedia
              component="img"
              image="angebote 1.png"
              alt="Angebot"
            />
          </Item>
        </Grid>

        <Grid xs={12} lg={6}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <Typography fontSize="x-large">Teamtraining und Firmenevents</Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" }, mt: 2 }}>
              Events für jede Kragenweite. Hof & Gut ist und bleibt das Thema der Hofstelle Itzenbüttler Sod. Leckere, regionale Gerichte in der gemütlichen Atmosphäre des Restaurants Stub’n, Erfrischungen im Biergarten und die Hoffeste haben diesen Ort zu einem Geheimtipp in Sachen Gastlichkeit gemacht und erfreuen sich großer Beliebtheit.
              <br /><br />
              Aber darauf ruhen wir uns nicht aus! Ab sofort bieten wir Ihnen ausgefallene Events. Natürlich in gewohnt hoher Qualität. Veranstaltungspakete mit gutem Essen und ausgesuchten Aktionen (Genuss & Gut), Teamtrainings für Firmen, Vereine und Schulen (Team & Gut) und auf Sie passend zugeschnittene Team-Sport-Events (Aktiv & Gut).
              <br /><br />
              Alle Angebote stimmen wir natürlich individuell auf Ihre Bedürfnisse ab. Bei uns gibt es weder im Restaurant, noch bei Veranstaltungen etwas von der Stange!
            </Typography>
          </Item>

          <Item sx={{ backgroundColor: "primary.dark", mt: '10px' }}>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              Sie haben Interesse? Möchten mehr Informationen? Fragen sich, ob wir auch für Ihre Veranstaltung die richtigen Ideen haben?
              <br /><br />
              Hof & Gut Jesteburg GmbH <br />
              Itzenbütteler Sod 13-15 <br />
              21266 Jesteburg OT Itzenbüttel
              <br /><br />
              Rufen Sie uns an! <br />
              Mona Rickert: 0157-8560 0194 <br />
              Marc Wollrab: 0157-8677 1150 <br />
              Büro Hof & Gut: 04181-2170 714
              <br /><br />
              Mailen Sie uns! <br />
              <a href="mailto:wollrab@hof-und-gut.de">wollrab@hof-und-gut.de</a>
              <br /><br />
              Wir freuen uns auf Ihre Anfragen! <br />
              Mona Rickert & Marc Wollrab
            </Typography>
          </Item>
        </Grid>

        <Grid xs={12} lg={2}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <CardMedia
              component="img"
              image="ihr-event1 1.png"
              alt="Flyer"
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
