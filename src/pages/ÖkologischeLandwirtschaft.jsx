import React from 'react'
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

export default function ÖkologischeLandwirtschaft() {
  return (
    <Box sx={{ flexGrow: 1, mt:'15px'}}>

      <Helmet>
          <title>Ökologische Landwirtschaft Hof&Gut Jesteburg</title>
          <meta name="description"  content="Alles über unsere Tiere und die Landwirtschaft"/>
          <link rel='canonical' href="/ÖkologischeLandwirtschaft"/>
          <meta name="fragment" content="!"/>
      </Helmet>


    <Grid container spacing={2} direction={'row-reverse'}>
                <Grid xs={12} lg={9}>
                  <Item sx={{backgroundColor:"primary.dark", mb:'15px'}}>
                    <Typography fontSize={'xx-large'}>Verkauf von Rindfleisch aus Biologischer Haltung (Rindfleisch und Gänse)</Typography>
                    <Typography fontSize={'large'}>
                      Wir verkaufen in regelmäßigen Abständen Rindfleisch aus eigener Produktion. Es kann jeweils in 15- oder 20-kg-Paketen erworben werden (Preis 170,- bzw. 320,- Euro). Enthalten sind immer Rouladen, Hack, Braten, Gulasch, Beinscheibe, Suppenfleisch und Steaks. Außerdem können Sie bereits jetzt eine Weihnachtsgans 2024 bestellen, solange Vorrat reicht! Bitte melden Sie sich bei Interesse gerne unter info@hof-und-gut.de, damit wir ein Paket Fleisch oder eine Gans für Sie reservieren!
>>>>>>> 45199c435a1e23e17d5c05bb30ae7eb6cd3575c1
                      </Typography>
                  </Item>
                            <Item sx={{backgroundColor:"primary.dark"}}>
                                <Typography fontSize={'x-large'}>
                                    Ökologische Landwirtschaft
                                </Typography>
                       {         <CardMedia
                                          component="img"
                                          height="520"
                                          image="Diewackerenvier.jpg"
                                          alt="Vier Kälber"
                                /> }
                            </Item>


                          <Item sx={{backgroundColor:"primary.dark", mt:'15px'}}> 
                          <CardMedia 
                            component="img"
                            image="hofplan 1.png"
                            alt="Hofplan"/>
                          </Item>
                          <Item sx={{backgroundColor:"primary.dark", mt:'15px'}} >
                      <Typography fontSize={'large'}>
                        Philosophie:<br></br>
                          Unser Ziel ist es, mit Hof&Gut einen Kreislauf (wieder)herzustellen, der Menschen in Lohn und Brot bringt und alle Tiere des Hofes ernährt. Außerdem soll sich die historische Hofstelle zu einem Ort der Begegnung entwickeln, an dem Kinder und Erwachsene als Gäste gerne verweilen, miteinander ihre Freizeit verbringen und einen historischen Bauernhof erleben. Die Hofstelle umfaßt eine Gesamtfläche von 85 Hektar, je hälftig Forst- und Ackerflächen. Die Ackerflächen werden seit 2007 biologisch bewirtschaftet und jährlich vom Ökokontrollverein in Karlsruhe zertifiziert. Die zum Hof gehörenden Rinder stehen durch die extensiven Grünflächen auf eigener Futtergrundlage.</Typography>
                    </Item>
                </Grid>


            <Grid xs={12} lg={3} >
              <Item sx={{backgroundColor:"primary.dark"}}>
                <CardMedia 
                        component="img"
                        image="EU-ELER_CMYK1-271x300 1.png"
                        alt="Hofplan"/>
              
              </Item>
              <Item sx={{backgroundColor:"primary.dark", mt:'15px'}}>        
                <Typography fontSize={'large'}>Hier investiert Europa in die ländlichen Gebiete mit „Agrarumwelt- und Klimaschutzmaßnahmen”. Mit diesen Maßnahmen werden landwirtschaftliche Betriebe bei der Erhaltung und Verbesserung der Umweltsituation unterstützt. Ziel ist eine nachhaltige und ressourcenschonende Bewirtschaftung in Bezug auf Artenvielfalt, Boden, Wasser und den Schutz des Klimas. siehe auch: www.eler.niedersachsen.de</Typography>
              </Item>
            </Grid>

    </Grid>
  </Box>
  )
}
