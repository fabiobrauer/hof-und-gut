import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CustomImageList from '../assets/Comp_ImageList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import { Helmet } from "react-helmet-async";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Gebäude() {
  return (
    <Grid container mt="10px">

      <Helmet>
        <title>Gebäude bei Hof & Gut Jesteburg</title>
        <meta name="description" content="Renoviertes Bauernhaus, umgebaute Scheune und zukünftige Projekte" />
        <link rel="canonical" href="/Gebäude" />
        <meta name="fragment" content="!" />
      </Helmet>

      {/* Bauernhaus früher */}
      <Grid xs={12} lg={4} sx={{ padding: '10px' }}>
        <Item sx={{ backgroundColor: "primary.dark" }}>
          <CardMedia
            component="img"
            image="60842f03bdc80b89a1408476bdd76460.jpeg"
            alt="Foto Bauernhaus früher"
            sx={{
              objectFit: 'cover',
              objectPosition: 'bottom',
            }}
          />
        </Item>
      </Grid>

      {/* Text about the Bauernhaus früher */}
      <Grid xs={12} lg={8} sx={{ padding: '10px' }}>
        <Item sx={{ backgroundColor: "primary.dark", height: '100%' }}>
          <Typography fontSize="x-large">Das Bauernhaus früher</Typography>
          <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
            Die Hofstelle Itzenbütteler Sood 13 (Harmsbur) gehört zu den Hofstellen in Itzenbüttel, die auf das Mittelalter zurückgehen. Die Ursprünge des Hauptgebäudes liegen nach neuesten Erkenntnissen im 16. Jahrhundert. Anfang der 1990er Jahre wurden große Teile des Reetdachs des Hofgebäudes erneuert. In den Jahren 2003/2004 wurde das Bauernhaus mit Unterstützung von Mitteln aus der Dorferneuerung und aus dem ETLR-Fonds grundlegend saniert. Kleinere Sanierungsmaßnahmen erfolgten im Rahmen des Anschlusses an die Kanalisation.
          </Typography>
        </Item>
      </Grid>

      {/* Bauernhaus heute */}
      <Grid lg={5} xs={12} sx={{ padding: '10px' }}>
        <Item sx={{ backgroundColor: "primary.dark", height: '100%' }}>
          <Typography fontSize="x-large">Das Bauernhaus heute</Typography>
          <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
            Im Jahr 2010 wurde das alte Bauernhaus auch im Inneren denkmalgerecht saniert und das historische Ständerwerk wiederhergestellt. Hofseitig und zur Straße hin erhielt das Gebäude neue Sprossenfenster und Gauben, die nun auch das Obergeschoss mit Licht versorgen. Eindrucksvoll lässt sich im Gastraum und auch im Küchenbereich das historische und teilweise wiederhergestellte Ständerwerk besichtigen. Bei der Renovierung wurden ausschließlich Eichen aus dem eigenen Itzenbütteler Wald verwendet. Die “neuen” Hölzer lassen sich gut von den historischen unterscheiden.
          </Typography>
        </Item>
      </Grid>

      {/* Image of Bauernhaus today */}
      <Grid lg={7} xs={12} sx={{ padding: '10px' }}>
        <Item sx={{ backgroundColor: "primary.dark", height: '100%' }}>
          <CardMedia
            component="img"
            image="Bauernhaus2010.jpeg"
            height="550"
            alt="Foto Bauernhaus 2010"
          />
        </Item>
      </Grid>

      {/* Image List and Accordion */}
      <Grid lg={7} xs={12} sx={{ padding: '10px' }}>
        <Item sx={{ backgroundColor: "primary.dark" }}>
          <CustomImageList />

          {/* Accordion for more information */}
          <Accordion sx={{ backgroundColor: "primary.dark" }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                Hintergrund des Projekts Konversion Scheune (Umsetzung 2005/2006)
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                Ziel war es, eine nachhaltige Nutzung zu finden, um die Substanz der Scheune zu erhalten. Es entstand ein gemeinschaftliches und generationenübergreifendes Wohnkonzept mit 8 Wohneinheiten (50-160 m2). Der Innenbereich des Gebäudes wurde in ökologischer Holzständerbauweise moderner Wohnraum (Niedrigenergiestandard, Zellulosedämmung). Eine Solarthermie- und Photovoltaikanlage ergänzt das ökologische Konzept.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Item>
      </Grid>

      {/* Kinderhaus */}
      <Grid lg={5} xs={12} sx={{ padding: '10px' }}>
        <Item sx={{ backgroundColor: "primary.dark", height: '100%' }}>
          <CardMedia
            component="img"
            image="ReiterHaus.jpeg"
            height="650"
            alt="Foto vom Kinderhaus"
          />
          <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
            Dies ist unser “Kinderhaus”, in dem die Reitkinder sich vor und nach dem Unterricht aufhalten können.
          </Typography>
        </Item>
      </Grid>

    </Grid>
  );
}
