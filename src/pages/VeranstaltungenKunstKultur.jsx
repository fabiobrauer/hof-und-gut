import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Helmet} from "react-helmet-async";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function EmtyGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt:'15px'}}>

    <Helmet>
          <title>Veranstaltungen Kunst und Kultur bei Hof und Gut</title>
          <meta name="description"  content="Veranstaltungen Kunst und Kultur bei Hof und Gut in Jesteburg"/>
          <link rel='canonical' href="/VeranstaltungenKunstKultur"/>
          <meta name="fragment" content="!"/>
      </Helmet>


      <Grid container spacing={2} >
        <Grid xs={12} lg={6}>
                <Item sx={{backgroundColor:"primary.dark"}}>
                <Typography fontSize={'x-large'}>Fotografien von Walter Schmitz</Typography>
                <CardMedia
                                component="img"
                                image="SchmitzFoto.jpg"
                                alt="Firmen Event"
                                />
                  <Typography fontSize={'large'}>
                      Der berühmte Fotograf Walter Schmitz aus Hamburg hat rund um Hof&Gut Bilder eingefangen und stellt sie im Restaurant Stub’n aus. Anschauen lohnt!
                  </Typography>
            </Item>
            <Item sx={{backgroundColor:"primary.dark", mt:'15px'}}>
                            <Typography fontSize={'x-large'}>Hoffest</Typography>
                <CardMedia
                                component="img"
                                image="20230501_123221.jpg"
                                alt="Firmen Event"
                                />
                  <Typography fontSize={'large'}>
                  Am 1. Mai und am 3. Oktober feiern wir Hoffest. Am Vorabend wird getanzt, entweder in den Mai oder im Oktober zünftig mit Dirndl und Lederhos’n ins Oktoberfest. Das nächste Oktoberfest findet am 2. und 3. Oktober 2023 statt. Um Euch einen Eindruck von unserem Hoffest und etwas Vorfreude darauf zu verschaffen, hier ein kleiner Film auf youtube: <a href="https://youtu.be/UELE6Nx0z3E">https://youtu.be/UELE6Nx0z3E</a>                  
                  </Typography>
                          </Item>
        </Grid>
        <Grid xs={12} lg={6}>  
          <Item sx={{backgroundColor:"primary.dark"}}>
                                
                <Typography fontSize={'x-large'}>Hof&Gut im Fernsehen</Typography>
                <Typography fontSize={'large'}>
                  Am 13. Januar 2016 wurde im NDR in der Sendung “Mein Nachmittag” ein kurzer Film über Hof&Gut und schöne Orte in der Umgebung ausgestrahlt. Live im Studio war Chefkoch Frank Schiffner, der ein Lieblingsgericht vorgestellt hat! Hier der Link zur Sendung…die letzten 12 Minuten sind die spannendsten: <a href="https://www.ndr.de/fernsehen/sendungen/mein_nachmittag/Mein-Nachmittag,meinnachmittag12852.html">NDR Mein Nachmitag</a></Typography>
                                
          </Item>
              <Item sx={{backgroundColor:"primary.dark" , mt:'15px'}}>
              <Typography fontSize={'x-large'}>Ausstellung von Karola Römermann in den “Künstlerstuben”</Typography>
                <Typography fontSize={'large'}>
                      Karola Römermann stellt derzeit Werke ihres Schaffens aus 4 Jahrzehnten in den Künstlerstuben aus, kommen Sie gerne zum Schauen und Staunen…
                </Typography>
              </Item>                            
              <Item sx={{backgroundColor:"primary.dark", mt:'15px'}}>
                            <Typography fontSize={'large'}>Kinder spielen…Klassik: “Alcina” von Georg Friedrich Händel auf Hof&Gut! Vier tolle Aufführungen im Juli 2015…Fortsetzung folgt…</Typography>
                <CardMedia
                                component="img"
                                image="Kinder.png"
                                alt="Firmen Event"
                                />
                              <Typography fontSize={'large'}>Musik im Allgemeinen und klassische Musik im Besonderen kann uns dort berühren, wo Worte nicht ankommen. Wir halten inne und erleben, dass da etwas ist, das unsere Seele anspricht. Jedes Kind sollte im besten Falle die Möglichkeit bekommen, einmal oder öfter “Klassik selber zu machen”. Genau das können Sie mit diesem fantastischen Projekt von Cornelia Salje erleben. Alle Informationen finden Sie unter: <a href="https://www.kinder-spielen-klassik.de/">https://www.kinder-spielen-klassik.de/</a>.</Typography>
                          
                          </Item>
        </Grid>




      </Grid>
    </Box>
  );
}