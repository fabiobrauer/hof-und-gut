import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ReitenBasicGrid from '../assets/Comp_Reiten';
import ReitenCustomImageList from '../assets/Comp_ImageListReiten';
import { Button } from '@mui/material';
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
        <title>Reiten bei Carmen Knott</title>
        <meta name="description" content="Reiten und Ponniereiten in Jesteburg" />
        <link rel="canonical" href="/Reiten" />
        <meta name="fragment" content="!" />
      </Helmet>

      <ReitenBasicGrid />

      <Grid container spacing={2}>
        <Grid xs={12} lg={12}>
          <Item sx={{ backgroundColor: "primary.dark", mt: '15px' }}>
            <ReitenCustomImageList />
          </Item>
        </Grid>

        <Grid container spacing={2}>
          <Grid xs={12} lg={4}>
            <Item sx={{ backgroundColor: "primary.dark", mt: '10px' }}>
              <CardMedia
                component="img"
                image="ponieReiten.jpeg"
                alt="Reiten"
              />
            </Item>

            <Item sx={{ backgroundColor: "primary.dark", mt: '15px' }}>
              <Typography fontSize="x-large">Unser wöchentliches Angebot</Typography>
              <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                Fortgeschrittenengruppen <br />
                Longenunterricht <br />
                Reitanfängergruppen ab dem 5. Lebensjahr <br />
                Ponykindergarten regelmäßig samstags und sonntags <br />
                <a href="https://doodle.com/meeting/participate/id/aOPWkxgb">
                  <Button variant="contained" sx={{ backgroundColor: 'secondary.main', mt: '10px' }}>Hier Buchen</Button>
                </a> <br />
                <a href="https://doodle.com/meeting/participate/id/b4zlwZ2e">
                  <Button variant="contained" sx={{ backgroundColor: 'secondary.main', mt: '10px' }}>Geführte Waldausritte</Button>
                </a>
              </Typography>
            </Item>

            <Item sx={{ backgroundColor: "primary.dark", mt: '15px' }}>
              <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                Feldenkrais – Reiten aus der Körpermitte
                Die Feldenkraisarbeit und das Reiten aus der Körpermitte heraus sind effektive Lernmethoden, um Bewegung mit Aufmerksamkeit wahrzunehmen. Man lernt zu fühlen und zu erforschen, verloren geglaubte Bewegungsmöglichkeiten wieder neu zu entdecken.
                Ein verbessertes Körpergefühl zwischen Mensch und Pferd kann zu mehr Ruhe und Harmonie führen. Sie und Ihr Pferd fühlen sich wohl und gewinnen dabei mehr Lebensfreude.
              </Typography>
            </Item>
          </Grid>

          <Grid xs={12} lg={4}>
            <Item sx={{ backgroundColor: "primary.dark", mt: '10px', flexGrow: 1 }}>
              <Typography fontSize="x-large">Kontakt und Aktuelles</Typography>
              <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                Liebe Reitkinder und liebe Eltern, <br />
                Seit dem Sommer 2021 hat Carmen Knott den Reitbetrieb am Hof von Anne Strufe übernommen. Sie und ihr Team freuen sich auf Euch! <br />
                Alle Informationen zum Angebot sowie den aktuellen Vertrag findet Ihr im separaten Kasten, einfach draufklicken. <br />
                Carmen Knott: <br />
                Tel. 0163 3796966 <br />
                Mail: ponyreitschule.knott@gmx.de <br />
                …und das Team der Reitschule: <br />
                Stefanie Krecklow, Alina Eckhardt, Laura Meyer, Andrea Ulrich, Tessa Horstmann, Hannah Richter, Immi, Lina, und viele weitere Helferinnen und Helfer.
              </Typography>
            </Item>

            <Item sx={{ backgroundColor: "primary.dark", mt: '15px', flexGrow: 1 }}>
              <Typography fontSize="x-large">Preisliste</Typography>
              <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                Kinder und Jugendgruppen: 85,- €/Monat <br /><br />
                Einzelstunde Kinder (30 Min.) inkl. Vorbereitung Pony: 30 € <br /><br />
                Einzelstunde Kinder (60 Min.) inkl. Vorbereitung Pony: 55 € <br /><br />
                Einzelstunde Erwachsene (30 Min.) inkl. Schulpferd: 40 € <br /><br />
                Einzelstunde Erwachsene (45 Min.) inkl. Schulpferd: 55 € <br /><br />
                Alle Preise inkl. MwSt. Irrtümer und Änderungen vorbehalten. <br />
                Gerne organisieren wir auch individuelle Programme. Ruft einfach an!
              </Typography>
            </Item>
          </Grid>

          <Grid xs={12} lg={4}>
            <Item sx={{ backgroundColor: "primary.dark", mt: '10px' }}>
              <CardMedia
                component="img"
                image="PonieReiten2.jpeg"
                alt="Ponie Reiten"
              />
            </Item>

            <Item sx={{ backgroundColor: "primary.dark", mt: '15px', flexGrow: 1 }}>
              <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                Wir bieten kompetenten Reitunterricht für Kinder von 6 bis 12 Jahren. Für die ganz Kleinen ab 3 Jahren gibt es die sogenannte Ponyspielzeit. Unser Schwerpunkt liegt in der ganzheitlichen Reitausbildung. Pferde sind für uns mehr als ein Sportgerät. Die Ausbildung erfolgt in kleinen Gruppen auf dem Reitplatz und im Gelände. Der Unterricht findet ganzjährig statt. Wir freuen uns über Euer Interesse und versprechen Euch, dass Ihr viel Freude haben werdet!
              </Typography>
            </Item>

            <Item sx={{ backgroundColor: "primary.dark", mt: '15px', flexGrow: 1 }}>
              <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                Die ganzheitliche Behandlung auf dem Pferderücken: <br />
                In Bewegung sein heißt lebendig sein – körperlich-geistig-seelisch. <br />
                Motorische Störungen und körperliche Erkrankungen können gelindert und harmonisiert werden. Kinder erleben eine Bewegungsfreiheit auf vier Beinen. Das Selbstbewusstsein wird gestärkt.
              </Typography>
            </Item>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
