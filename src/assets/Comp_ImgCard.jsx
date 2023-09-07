import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function ActionAreaCard() {
  return (
    <Card sx={{backgroundColor: "rgb(80, 140, 103)"}}>
      <CardActionArea>
      <h1>Willkommen bei Hof&Gut</h1>
        <CardMedia
          component="img"
          height="640"
          image="Banner.gif"
          alt="Bauernhaus"
        />
        <CardContent sx={{ display:{ xs:'none', xl:'block'}}}>
          <Typography variant="body2" color="white" fontSize="x-large" className='SubscriptionText'>
            Hof&Gut Jesteburg liegt am Rande des Naturparks Lüneburger Heide. Die anspruchsvoll sanierte und modernisierte historische Hofstelle umfasst 85 Hektar und wurde 2007 unter der Bezeichnung Hof&Gut Jesteburg zu neuem Leben erweckt. Unter dem Dach von Hof&Gut Jesteburg finden sich ökologische Landwirtschaft, ein Reitbetrieb, ein Einstellbetrieb, generationenübergreifendes Wohnen sowie Kunst und Kultur. Gastronomie und Gästezimmer am Hof werden betrieben unter der Marke “Speisen am Hof” und “Übernachten am Hof”. Das Ensemble lädt Gäste ein zu Freizeitvergnügen, Genuss, Entschleunigung, Erholung im Schlaf und dem Erleben von kultureller Vielfalt inmitten schöner Natur.Wir bringen alles unter ein (Reet-) Dach  weiter
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}