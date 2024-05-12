import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export default function ActionAreaCard() {
  return (
    <Card sx={{backgroundColor: "rgb(80, 140, 103)"}}>
      <CardActionArea>
      <h1>Willkommen bei Hof&Gut</h1>
        <CardMedia
          component="img"
          height="500"
          image="Banner2.gif"
          alt="Bauernhaus"
        />
        <CardContent sx={{ display:{ xs:'none', xl:'block'}}}>
          
                <Accordion sx={{backgroundColor:'primary.dark', width:'60%', borderRight:'1px solid black'}}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  ><Typography  fontSize="large">
                      Hof&Gut Jesteburg liegt am Rande des Naturparks Lüneburger Heide. Die anspruchsvoll sanierte und modernisierte historische Hofstelle umfasst 85 Hektar und wurde 2007 unter der Bezeichnung Hof&Gut Jesteburg zu neuem Leben erweckt.
                      
                  </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography fontSize="large">
                    Unter dem Dach von Hof&Gut Jesteburg finden sich ökologische Landwirtschaft, ein Reitbetrieb, ein Einstellbetrieb, 
                    generationenübergreifendes Wohnen sowie Kunst und Kultur. Gastronomie und Gästezimmer am Hof werden betrieben unter 
                    der Marke “Speisen am Hof” und “Übernachten am Hof”. Das Ensemble lädt Gäste ein zu Freizeitvergnügen, Genuss, 
                    Entschleunigung, Erholung im Schlaf und dem Erleben von kultureller Vielfalt inmitten schöner Natur.
                    </Typography>
                  </AccordionDetails>
                </Accordion>
          
        </CardContent>
      </CardActionArea>
    </Card>
  );
}