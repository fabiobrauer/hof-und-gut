import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardContent } from '@mui/material';
import FerienwohungCustomImageList from '../assets/Comp_ImageListFerienwohnung';
import ZimmerCustomImageList from '../assets/Comp_ImageListZimmer';


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
                  <Typography fontSize={'xx-large'}>Erholung im Schlaf unterm Reetdach!</Typography> 
                  <Typography fontSize={'x-large'}>Alle Zimmer sind mit einem Fernseher ausgestattet, aber noch schöner ist der Blick aus dem Fenster! Internetzugang über Hotspot ist kostenlos verfügbar. 
                            Anreise täglich ab 16 Uhr, am Wochenende ab 14 Uhr möglich. Bei früh oder später Anreise nach 22 Uhr bitte anrufen unter 04181 9199500 oder mobil 0176 070671532.
                  </Typography>
                  <Typography fontSize={'x-large'}>Das Team von Hof & Gut wünscht eine geruhsame Nacht unterm Reetdach und ländliche Träume!
                              Reservierungen per E-Mail an info@hof-und-gut.de
                              Preise gültig ab 1. März 2023. Änderungen vorbehalten.
                  </Typography> 
                </Item>
        </Grid>

        <Grid xs={12} lg={4}>
          <Item sx={{backgroundColor:"primary.dark"}}>
            <Typography fontSize={'xx-large'}>Preise</Typography>
            <Typography fontSize={'x-large'}>
                        DZ 90 €<br></br>
                        EZ 78 €<br></br>
                        Ferienwohnung ab 125 €<br></br>
                        Zustellbett für ein Kind 25 €<br></br>
              </Typography>
          </Item>
        
          
              <Grid xs={12} lg={4} sx={{backgroundColor:"primary.dark", mt:'10px', display: 'flex', justifyContent:'space-between', alignItems:'center'}}>
                    <CardContent>
                      <Typography fontSize={'x-large'} sx={{wordBreak:'break-word'}}>
                          Wir sind ein Nichtraucherhaus!
                      </Typography>
                    </CardContent>
                  <CardMedia
                        component="img"
                        sx={{ width: 131 }}
                        image="NoSmoking.png"
                        alt="No smoking sign"
                  />
              </Grid>

            
            <Item sx={{backgroundColor:"primary.dark", mt:'10px'}}>
                <Typography fontSize={'x-large'}>
                  Die Zimmer sollten am Abreisetag bis 11 Uhr geräumt sein. Handtücher zum Austausch bitte auf den Boden. Und natürlich dabei immer an die schöne Natur um uns herum denken…
                </Typography>
            </Item>

        </Grid>


                <Grid xs={12} lg={4}>
                    <Item sx={{backgroundColor:"primary.dark"}}>
                              <Typography fontSize={'xx-large'}>
                                Hof-Frühstück
                              </Typography>
                              <Typography fontSize={'x-large'}>
                                Das Frühstück wird für unsere Hausgäste von <br></br>8 – 10:00 Uhr serviert.<br></br> Das Frühstück kostet 14.50 € p. P,<br></br> Kinderfrühstück (3 – 7 Jahre) 8, 00 € p.P.<br></br><br></br> und es gibt Wurst, Käse, Bio-Ei, Konfitüre, Brotkorb, Kaffee und Tee nach Wunsch!
                              </Typography>

                          <CardMedia
                                component="img"
                                image="Frühstück.jpg"
                                alt="Frühstück"
                          />
                    </Item>
                </Grid>


            <Grid xs={12} lg={6}>
              <Item sx={{backgroundColor:"primary.dark"}}>
                <Typography fontSize={'xx-large'}>Ferienwohnung</Typography>

                <FerienwohungCustomImageList></FerienwohungCustomImageList>
              </Item>
            </Grid>


            <Grid xs={12} lg={6}>
              <Item sx={{backgroundColor:"primary.dark"}}>
              <Typography fontSize={'xx-large'}>Zimmer</Typography>


                <ZimmerCustomImageList></ZimmerCustomImageList>
              </Item>
            </Grid>


      </Grid>
    </Box>
  );
}