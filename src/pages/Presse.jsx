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

/* Hier noch Download Links einfügen */

export default function Presse() {
  return (
    <Box sx={{ flexGrow: 1, mt: '10px' }}>
      <Helmet>
        <title>Hof&Gut Presse und Zeitungsartikel</title>
        <meta name="description" content="Auftritt von Hof & Gut in der Presse" />
        <link rel='canonical' href="/Presse" />
        <meta name="fragment" content="!" />
      </Helmet>

      <Grid container spacing={2} justifyContent='center'>
        <Grid xs={12} lg={9}>
          <Item sx={{ backgroundColor: "primary.dark", marginBottom: '10px' }}>
            <CardMedia
              component="img"
              image="Zeitung4.png"
              alt="Zeitungsartikel"
            />
          </Item>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <CardMedia
              component="img"
              height={'770px'}
              image="Zeitung1.jpeg"
              alt="Foto Bauernhaus früher"
            />
          </Item>
        </Grid>

        <Grid xs={12} lg={5}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              Hof & Gut im Hamburger Abendblatt
              Dass in Itzenbüttel Feuer im Kamin brennt, ist Johanna Coleman und Axel Brauer zu verdanken. Auf einer geerbten Hofstelle starteten sie ein Projekt, das weit über einen Restaurantbetrieb hinausgeht. Die Ursprünge der Anlage gehen zurück bis ins 16. Jahrhundert. Immer schon spielten Pferde hier eine wichtige Rolle. Deswegen begann man 2007 mit der Eröffnung einer Reitschule. 15 Ponys und Pferde stehen für Unterricht, Ausritte und Kindergeburtstage im Stall. In der ehemaligen Korn- und Kartoffelscheune verwirklichten die Betreiber ein Wohnprojekt, in dem Kinder und Erwachsene ein modernes Zuhause auf dem Land gefunden haben. Das Herz der Anlage ist das alte Bauernhaus. Sein Innenleben wurde saniert, bis zum vorläufigen Höhepunkt der Hofgeschichte: die Eröffnung des Restaurants Stub’n im Herbst vorigen Jahres. Mittendrin ein offener Kamin mit Gästen drumherum. Für die kalte Jahreszeit haben sich Küchenchef Frank Schiffner und Restaurantleiter Ulf Röbe vorgenommen, einen Klassiker neu zu etablieren: das Fondue. Vor dem Kaminfeuer ist das gesellige Essen besonders kuschelig. Zur Wahl stehen Käse- oder Fleischfondue (19,50 Euro/ 27,50 Euro). Ersteres passt hervorragend als langsamer Begleiter eines gemütlichen Weinabends. Die österreichische Sommelière Anni Schwaiger empfiehlt die passenden Gewächse zum Eintunken von Brot (selbst gebacken) und Biokartoffeln (selbst geerntet) in den gasbeflammten Pott mit Cheddar, Emmentaler und Bergkäse. Das Fleischfondue kommt mit vorportionierten Rinderstücken aus Filet, Rumpsteak und Entrecôte auf den Tisch, vornehmlich aus der Nachbarschaft. Hier weiden die hofeigenen Aubrac-Rinder, eine französische Rasse, die in Itzenbüttel gezüchtet wird. Nach Lust und Laune spießen die Gäste Fleisch oder Gemüse auf und tunken es in die Brühe. Frank Schiffner hat vier feine Dips kreiert: Cocktail, Kräuter, Honig-Schmand-Chili und Sardelle-Kapern-Tomate. Dazu schenkt Anni Schwaiger “Carmino” ins Glas, eine Rotweincuvée vom Kaiserstuhl. Das große Fondue-Finale besteht traditionell aus der gebrauchten Brühe, die mit Port oder Sherry aus einer Espressotasse getrunken wird. Tolles Aroma.
              Link: Artikel im Abendblatt
            </Typography>
          </Item>
        </Grid>

        <Grid xs={12} lg={4}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <CardMedia
              component="img"
              image="schleppjagt.jpeg"
              alt="Schleppjagd"
            />
            <Typography>
              Hamburger Schleppjagdverein veranstaltet Schleppjagd bei Hof und Gut.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  )
}
