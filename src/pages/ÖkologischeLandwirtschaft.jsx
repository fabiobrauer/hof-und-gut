import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Height } from '@mui/icons-material';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ÖkologischeLandwirtschaft() {
  return (
    <Box sx={{ flexGrow: 1, mt:'10px'}}>
    <Grid container spacing={2} direction={'row-reverse'}>
      <Grid xs={12} lg={9}>
              <Item sx={{backgroundColor:"primary.dark"}}> 
              <CardMedia 
                component="img"
                image="hofplan 1.png"
                alt="Hofplan"/>
              </Item>
              <Item sx={{backgroundColor:"primary.dark", mt:'5px'}} >
          <Typography fontSize={'x-large'}>
            Philosophie
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
        <Item sx={{backgroundColor:"primary.dark", mt:'5px'}}>        
          <Typography fontSize={'x-large'}>Hier investiert Europa in die ländlichen Gebiete mit „Agrarumwelt- und Klimaschutzmaßnahmen”. Mit diesen Maßnahmen werden landwirtschaftliche Betriebe bei der Erhaltung und Verbesserung der Umweltsituation unterstützt. Ziel ist eine nachhaltige und ressourcenschonende Bewirtschaftung in Bezug auf Artenvielfalt, Boden, Wasser und den Schutz des Klimas. siehe auch: www.eler.niedersachsen.de</Typography>
        </Item>
      </Grid>


    </Grid>
  </Box>
  )
}
