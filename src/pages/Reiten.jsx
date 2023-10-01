import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ReitenBasicGrid from '../assets/Comp_Reiten';
import ReitenCustomImageList from '../assets/Comp_ImageListReiten';
import { Button } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function EmtyGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt:'10px'}}>

      <ReitenBasicGrid></ReitenBasicGrid>

      <Grid container spacing={2} >
        <Grid xs={12} lg={4}>
                <Item sx={{backgroundColor:"primary.dark"}}>
                <CardMedia
                                component="img"
                                image="ponieReiten.jpeg"
                                alt="Foto Bauernhaus früher"
                                />
                </Item>
                <Item sx={{backgroundColor:"primary.dark", mt:'10px'}} >
                  <Typography fontSize={'xx-large'}>Unser wöchentliches Angebot</Typography>
                    <Typography fontSize={'x-large'}>Fortgeschrittenengruppen <br></br>
                    Longenunterricht<br></br>
                      Reitanfängergruppen ab dem 5. Lebensjahr<br></br>
                      Ponykindergarten regelmäßig samstags und sonntags<br></br>
                      <a href="https://doodle.com/meeting/participate/id/aOPWkxgb"><Button variant='contained'sx={{backgroundColor:'secondary.main', mt:'10px'}} >Hier Buchen</Button></a><br></br> 
                      <a href="https://doodle.com/meeting/participate/id/b4zlwZ2e"><Button variant='contained'sx={{backgroundColor:'secondary.main', mt:'10px'}}>Geführte Waldausritte</Button></a><br></br>
                      
                    </Typography>
                </Item>
            <Item sx={{backgroundColor:"primary.dark", mt:'10px'}} >
              <Typography fontSize={'x-large'}>
              Feldenkrais – Reiten aus der Körpermitte
              Die Feldenkraisarbeit und das Reiten aus der Körpermitte heraus sind effektive Lernmethoden, um Bewegung mit Aufmerksamkeit wahrzunehmen. Man lernt zu fühlen und zu erforschen, verloren geglaubte Bewegungsmöglichkeiten wieder neu zu entdecken.
              Ein verbessertes Körpergefühl zwischen Mensch und Pferd kann zu mehr Ruhe und Harmonie führen. Sie und Ihr Pferd fühlen sich wohl und gewinnen dabei mehr Lebensfreude.
              </Typography>
            </Item>
        </Grid>
        <Grid xs={12} lg={4}>
          <Item sx={{backgroundColor:"primary.dark"}}>
          <Typography fontSize={'xx-large'}>Kontakt und Aktuelles</Typography> 
                  <Typography fontSize={'x-large'}>Liebe Reitkinder und liebe Eltern,
                              seit dem Sommer 2021 hat Carmen Knott den Reitbetrieb am Hof von Anne Strufe übernommen. Sie und ihr Team freuen sich auf Euch!<br></br> 
                              Alle Informationen zum Angebot sowie den aktuellen Vertrag findet Ihr im separaten Kasten, einfach draufklicken.
                              <br></br>Carmen Knott: 
                              <br></br>Tel. 0163 3796966
                              <br></br>Mail: ponyreitschule.knott@gmx.de<br></br><br></br>
                              …und das Team der Reitschule
                              Stefanie Krecklow
                              Alina Eckhardt
                              Laura Meyer
                              Andrea Ulrich
                              Tessa Horstmann
                              Hannah Richter
                              Immi
                              Lina
                              …und viele große und kleine Helferinnen und Helfer
                    </Typography>
          </Item>
          <Item sx={{backgroundColor:"primary.dark", mt:'10px'}} >
              <Typography fontSize={'xx-large'}>Preisliste</Typography>
              <Typography fontSize={'x-large'}>
                  Kinder und Jugendgruppen 85,- €/Monat
                  <br></br><br></br>Einzelstunde Kinder (30 Min.) inkl. Vorbereitung Pony 30€ <br></br><br></br>Einzelstunde Kinder (60 Min.) inkl. Vorbereitung Pony 55 €<br></br><br></br>Einzelstunde Erwachsene (30 Min.) inkl. Schulpferd 40 €<br></br><br></br>Einzelstunde Erwachsene (45 Min.) inkl. Schulpferd 55 €<br></br><br></br>
                  Alle Preise inkl. MwSt.Irrtümer und Änderungen vorbehalten.
                  Gerne organisieren wir auch individuelle Programme. Ruft einfach an!
              </Typography>
            </Item>
        </Grid>
        <Grid xs={12} lg={4}>
          <Item sx={{backgroundColor:"primary.dark"}}>
          <CardMedia
                                component="img"
                                image="PonieReiten2.jpeg"
                                alt="Foto Bauernhaus früher"
                                />
            </Item>
            <Item sx={{backgroundColor:"primary.dark", mt:'10px'}} >
              <Typography fontSize={'x-large'}>
                Wir bieten kompetenten Reitunterricht für Kinder von 6 bis 12 Jahren und für die ganz Kleinen ab 3 Jahren gibt es die sogenannte Ponyspielzeit. Unser Schwerpunkt liegt in der ganzheitlichen Reitausbildung. Für uns sind Pferde mehr als ein Sportgerät. Die Ausbildung erfolgt in kleinen Gruppen auf dem Reitplatz und im Gelände. Der Unterricht findet ganzjährig statt. Wir freuen uns über Euer Interesse und versprechen Euch, dass Ihr viel Freude haben werdet!
              </Typography>
            </Item>

            <Item sx={{backgroundColor:"primary.dark", mt:'10px'}} >
              <Typography fontSize={'x-large'}>
                  Die ganzheitliche Behandlung auf dem Pferderücken
                  In Bewegung sein heißt lebendig sein – körperlich-geistig-seelisch.
                  Motorische Störungen und körperliche Erkrankungen können gelindert und harmonisiert werden. Kinder erleben eine Bewegungsfreiheit auf vier Beinen. Das Selbstbewusstsein wird gestärkt.
              </Typography>
            </Item>

        </Grid>
        <Grid xs={12} lg={12}>
          <Item sx={{backgroundColor:"primary.dark", mt:'10px'}} >
              <ReitenCustomImageList></ReitenCustomImageList>
          </Item>
        </Grid>


      </Grid>
    </Box>
  );
}