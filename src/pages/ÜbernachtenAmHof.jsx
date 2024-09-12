import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import FerienwohungCustomImageList from '../assets/Comp_ImageListFerienwohnung';
import ZimmerCustomImageList from '../assets/Comp_ImageListZimmer';
import { Helmet } from "react-helmet-async";

/* Booking.com Link */

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
        <title>Übernachten am Hof</title>
        <meta name="description" content="Übernachten bei Hof und Gut in Jesteburg" />
        <link rel="canonical" href="/ÜbernachtenAmHof" />
        <meta name="fragment" content="!" />
      </Helmet>

      <Grid container spacing={2}>
        <Grid xs={12} lg={4}>
          <Item sx={{ backgroundColor: "primary.dark", height: '100%', padding: '0' }}>
            <Typography fontSize="x-large">Erholung im Schlaf unterm Reetdach!</Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              Alle Zimmer sind mit einem Fernseher ausgestattet, aber noch schöner ist der Blick aus dem Fenster! Internetzugang über Hotspot ist kostenlos verfügbar.
              <br /><br />
              Anreise täglich ab 16 Uhr, am Wochenende ab 14 Uhr möglich. Bei früher oder später Anreise nach 22 Uhr bitte anrufen unter 04181 9199500 oder mobil 0176 070671532.
            </Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              Das Team von Hof & Gut wünscht eine geruhsame Nacht unterm Reetdach und ländliche Träume!
              <br /><br />
              Reservierungen per E-Mail an info@hof-und-gut.de
              <br /><br />
              Preise gültig ab 1. März 2023. Änderungen vorbehalten.
            </Typography>
          </Item>
        </Grid>

        <Grid xs={12} lg={4} display="flex" flexDirection="column" justifyContent="space-between" gap="10px">
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <Typography fontSize="xx-large">Preise</Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              DZ 110 €<br />
              EZ 95 €<br />
              Apartment für 2 Personen 150 €<br />
              Apartment für 3 Personen 175 €<br />
              Apartment für 4 Personen 200 €<br />
              Zustellbett für ein Kind 25 €
            </Typography>
          </Item>

          <Grid xs={12} lg={4} sx={{ backgroundColor: "primary.dark", mt: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRadius: '5px', height: '100%' }}>
            <CardContent>
              <Typography fontSize="x-large" sx={{ wordBreak: 'break-word' }}>
                Wir sind ein Nichtraucherhaus!
              </Typography>
            </CardContent>
            <CardMedia
              component="img"
              sx={{ width: 131 }}
              image="NoSmoking.png"
              alt="No smoking sign"
            />
          </Grid>

          <Item sx={{ backgroundColor: "primary.dark", mt: '10px' }}>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              Die Zimmer sollten am Abreisetag bis 11 Uhr geräumt sein. Handtücher zum Austausch bitte auf den Boden legen. Und natürlich dabei immer an die schöne Natur um uns herum denken…
            </Typography>
          </Item>
        </Grid>

        <Grid xs={12} lg={4}>
          <Item sx={{ backgroundColor: "primary.dark", height: '100%', padding: '0' }}>
            <Typography fontSize="x-large">Hof-Frühstück</Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              Das Frühstück wird für unsere Hausgäste von <br /> 8 – 10:00 Uhr serviert. <br />
              Das Frühstück kostet 14.50 € p. P, <br />
              Kinderfrühstück (3 – 7 Jahre) 8,00 € p.P. <br /><br />
              Es gibt Wurst, Käse, Bio-Ei, Konfitüre, Brotkorb, Kaffee und Tee nach Wunsch!
            </Typography>
            <CardMedia
              component="img"
              image="Frühstück.jpg"
              alt="Frühstück"
            />
          </Item>
        </Grid>

        <Grid xs={12} lg={6}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <Typography fontSize="x-large">Ferienwohnung</Typography>
            <FerienwohungCustomImageList />
          </Item>
        </Grid>

        <Grid xs={12} lg={6}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <Typography fontSize="x-large">Zimmer</Typography>
            <ZimmerCustomImageList />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
