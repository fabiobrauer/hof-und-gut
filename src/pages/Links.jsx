import React from 'react'
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'light' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  backgroundColor: 'primary.main',
}));

export default function Links() {
  return (

      <Grid container justifyContent={'center'} >
        <Grid lg={7} xs={12}>
          <Item sx={{backgroundColor:"primary.dark", m:'5px'}}>
            <Typography fontSize={'x-large'}>
                        Weitere interessante Links in Jesteburg und Umgebung:
                        Kunststätte Bossard <a href="https://www.bossard.de/">https://www.bossard.de/</a><br></br>
                        Fotos von Verena Brockshus-Sprung <a href="https://www.brockshus-sprung.de/">https://www.brockshus-sprung.de/</a><br></br>
                        Kunsthaus Jesteburg <a href="https://www.kunsthaus-jesteburg.de/">https://www.kunsthaus-jesteburg.de/</a><br></br>
                        Kunstraum Schräg & Gut <a href="https://www.schraegundgut.de/">https://www.schraegundgut.de/</a><br></br>
                        Physiotherapie Knupper-Papendorf & Vandersee <a href="www.physio-jesteburg.de">www.physio-jesteburg.de</a><br></br>
                        Naturheilpraxis Wiehe <a href="www.naturheilpraxis-wiehe.de">www.naturheilpraxis-wiehe.de</a><br></br> 
                        Reiten mit Wohlgefühl <a href="www.reiten-mit-wohlgefuehl.de">www.reiten-mit-wohlgefuehl.de</a><br></br> 
                        Hamburger Land-und Golfclub Hittfeld <a href="https://www.hlgc-hittfeld.de/">https://www.hlgc-hittfeld.de/</a><br></br> 
            </Typography>
          </Item>
        </Grid>

        <Grid lg={7} xs={12}>
          <Item sx={{backgroundColor:"primary.dark", m:'5px'}}>
          <Typography fontSize={'x-large'}>
                  Diese Unternehmen aus der Region & deutschlandweit beliefern uns mit Produkten für das Hofrestaurant:<br></br>
                  Wir sind begeisterte Anhänger von “Bienenlustwelt” - Honig von diesen Künstlerinnen und aus unserem Ort gibt’s im Hofrestaurant: .
                  <a href="www.bienenlustwelt.de/honig-aus-jesteburg/">www.bienenlustwelt.de/honig-aus-jesteburg/</a><br></br>
                  Wilkenshoff in Ochtmannsbruch <a href="www.wilkenshoff.de">www.wilkenshoff.de</a><br></br>
                  Hof Wörme <a href="www.hofwoerme.de">www.hofwoerme.de</a><br></br>
                  Arpshof <a href="www.arpshof.de">www.arpshof.de</a><br></br>
                  Weingut Richard Schmidt, Kaiserstuhl, erster Biowinzer in Deutschland <a href="https://www.schmidt-weingut.de/index.html">https://www.schmidt-weingut.de/index.html</a>
            </Typography>
          </Item>
        </Grid>

        <Grid lg={7} xs={12}>
          <Item sx={{backgroundColor:"primary.dark", m:'5px'}}>
            <CardMedia
                 component="img"
                 image="erlebniskochen 1.png"
                 alt="Erlebniskochen"
            />
            <Typography fontSize={'x-large'}>Wir sind Partner von Erlebniskochen & Weinschmecken. Kochkurse und Weinproben mit den Profis. Link: <a href="www.erlebniskochen.de">www.erlebniskochen.de</a> </Typography>
          </Item>
        </Grid>
        
      </Grid>
  )
}
