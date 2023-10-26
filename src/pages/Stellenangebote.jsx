import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../index.css'
import {Helmet} from "react-helmet-async";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function EmtyGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt:'15px'}}>

      <Helmet>
        <title>Stellenangebote bei Hof und Gut in Jesteburg</title>
        <meta name="description"  content="Arbeitsplätze bei Hof und Gut in Jesteburg"/>
        <link rel='canonical' href="/Stellenangebote"/>
      </Helmet>

      <Grid container spacing={2} >
        <Grid xs={12} lg={6}>
                <Item sx={{backgroundColor:"primary.dark"}}>
                      <Card sx={{backgroundColor:"primary.dark"}}>
                        <CardActionArea >
                          <CardMedia
                            component="img"
                            height="540"
                            image="Köche.png"
                            alt="Cheff Koch und Azubis"
                          />
                              <Grid container spacing={2} mt={'10px'}>
                                  <Grid xs={12} lg={6} >
                                        <Item sx={{backgroundColor:"primary.light", height:'100%'}}>
                                            <CardContent>
                                              <Typography fontSize={'xx-large'}>
                                                Auszubildende/r Koch/in
                                              </Typography>
                                              <Typography fontSize={'x-large'}>
                                              Auszubildender zum Koch gesucht!
                                              Wir suchen zum nächstmöglichen Zeitpunkt einen Kochauszubildenden. Bisher haben wir auf Hof&Gut bereits zwei Kochauszubildende sehr erfolgreich zur Prüfung geführt. Ab sofort suchen wir einen motivierten neuen Auszubildenden, der das Kochhandwerk lernen möchte. Wie immer freuen wir uns über schriftliche Bewerbungen an <br></br><br></br>info@hof-und-gut.de. <br></br><br></br>Bitte auch weitersagen….
                                              </Typography>
                                            </CardContent>
                                      </Item>
                                  </Grid >


                                  <Grid xs={12} lg={6}>
                                        <Item sx={{backgroundColor:"primary.light", height:'100%'}}>
                                          <CardContent>
                                            <Typography fontSize={'xx-large'}>
                                              Koch/in oder Küchenhelfer/in
                                            </Typography>
                                            <Typography fontSize={'x-large'}>
                                            Küchenhilfe/ Koch in Voll- oder Teilzeit gesucht
                                            Wir suchen motivierte Köche oder Kücheninterressierte sowie Spüler (Voll- oder Teilzeit). Unser Restaurant ist unter der Woche ab 17 Uhr geöffnet und am Wochenende durchgehend ab 12 Uhr. Wichtig sind bei uns Teamfähigkeit und Freude an der Arbeit. Ein professionelles Team erwartet Sie. Bewerbungen bitte schriftlich, am besten per Mail, an <br></br><br></br>info@hof-und-gut.de.<br></br> <br></br>Bitte auch weitersagen….
                                            </Typography>
                                          </CardContent>
                                      </Item>
                                  </Grid>
                              </Grid>

                        </CardActionArea>
                      </Card>
                </Item>

        </Grid>


        <Grid xs={12} lg={6} >
          <Item sx={{backgroundColor:"primary.dark", height:'100%'}} >
          <Card sx={{backgroundColor:"primary.dark"}}>
                        <CardActionArea >
                          <CardMedia
                            component="img"
                            height="540"
                            image="Speisen1.jpeg"
                            alt="Cheff Koch und Azubis"
                          />
                              <Grid container spacing={2} mt={'10px'} >
                                  <Grid xs={12} lg={6} >
                                        <Item sx={{backgroundColor:"primary.light", height:'100%'}}>
                                            <CardContent>
                                              <Typography fontSize={'xx-large'}>
                                              Auszubildende/r im Restaurantfach 
                                              </Typography>
                                              <Typography fontSize={'x-large'}>
                                              Wir suchen zum nächstmöglichen Zeitpunkt eine/n Auszubildende/n im Restaurantfach. Wichtig sind bei uns Teamfähigkeit und Freude an der Arbeit. Ein professionelles Service-Team erwartet Euch. Bewerbungen bitte schriftlich, am besten per Mail, an <br></br><br></br>info@hof-und-gut.de.<br></br><br></br>Bitte auch weitersagen….
                                              </Typography>
                                            </CardContent>
                                      </Item>
                                  </Grid >


                                  <Grid xs={12} lg={6}>
                                        <Item sx={{backgroundColor:"primary.light", height:'100%'}}>
                                          <CardContent>
                                            <Typography fontSize={'xx-large'}>
                                              Servicekraft
                                            </Typography>
                                            <Typography fontSize={'x-large'}>
                                            Servicekräfte in Voll- oder Teilzeit gesucht
                                            Wir suchen motivierte Kräfte im Service (Voll- oder Teilzeit). Unser Restaurant ist unter der Woche ab 17 Uhr geöffnet und am Wochenende durchgehend ab 12 Uhr. Wichtig sind bei uns Teamfähigkeit und Freude an der Arbeit. Ein professionelles Service-Team erwartet Sie. Bewerbungen bitte schriftlich, am besten per Mail, an <br></br><br></br>info@hof-und-gut.de.<br></br><br></br>Bitte auch weitersagen….
                                            </Typography>
                                          </CardContent>
                                      </Item>
                                  </Grid>
                              </Grid>

                        </CardActionArea>
                      </Card>
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}