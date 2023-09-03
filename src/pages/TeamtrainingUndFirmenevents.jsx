import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function EmtyGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt:'10px'}}>
      <Grid container spacing={2} >
        <Grid xs={12} lg={4}>
                <Item sx={{backgroundColor:"primary.dark"}}>
                <CardMedia
                                component="img"
                                image="FirmenEvent.jpeg"
                                alt="Firmen Event"
                                />
                </Item>
                <Item sx={{backgroundColor:"primary.dark", mt:'10px'}}>
          <CardMedia
                                component="img"
                                image="angebote 1.png"
                                alt="Angebot"
                                />
            
            </Item>
        </Grid>
        <Grid xs={12} lg={6}>  
          <Item sx={{backgroundColor:"primary.dark"}}>
                                
                <Typography fontSize={'xx-large'}>Teamtraining und Firmenevents</Typography>
                <Typography fontSize={'x-large'}>Events für jede Kragenweite.Hof & Gut ist und bleibt das Thema der Hofstelle Itzenbüttler Sod.Leckere, regionale Gerichte in der gemütlichen Atmosphäre des Restaurants Stub‘n, Erfrischungen im Biergarten und die Hoffeste haben diesen Ort zu einem Gehimtipp in Sachen Gastlichkeit gemacht und erfreuen sich großer Beliebtheit.Aber darauf ruhen wir uns nicht aus!Ab sofort bieten wir Ihnen ausgefallene Events. Natürlich in gewohnt hoher Qualität.Veranstaltungspakete mit gutem Essen und ausgesuchten Aktionen (Genuss & Gut), Teamtrainings für Firmen, Vereine und Schulen (Team & Gut) und auf Sie passend zugeschnittene Team-Sport-Events (Aktiv & Gut).Alle Angebote stimmen wir natürlich individuell auf Ihre Bedürfnisse ab.Bei uns gibt es weder im Restaurant, noch bei Veranstaltungen etwas von der Stange!</Typography>
                                
          </Item>
              <Item sx={{backgroundColor:"primary.dark" , mt:'10px'}}>
                <Typography fontSize={'x-large'}>
                          Sie haben Interesse? Möchten mehr Informationen? Fragen sich, ob wir auch für Ihre Veranstaltung die richtigen Ideen haben?
                          Hof & Gut Jesteburg GmbH Itzenbütteler Sod 13-1521266 Jesteburg OT Itzenbüttel
                          Rufen Sie uns an!Mona Rickert 0157-8560 0194 Marc Wollrab 0157-8677 1150 Büro Hof & Gut 04181-2170 714
                          Mailen Sie uns! wollrab@hof-und-gut.de
                          Wir freuen uns auf Ihre Anfragen! Mona Rickert & Marc Wollrab
                </Typography>
              </Item>
        </Grid>

        <Grid xs={12} lg={2}>              
                            <Item sx={{backgroundColor:"primary.dark"}}>
                                  <CardMedia
                                                component="img"
                                                image="ihr-event1 1.png"
                                                alt="flyer"
                                                />
                          </Item>
                </Grid>
      </Grid>
    </Box>
  );
}