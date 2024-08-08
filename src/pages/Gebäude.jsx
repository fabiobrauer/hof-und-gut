import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CustomImageList from '../assets/Comp_ImageList';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import {Helmet} from "react-helmet-async";


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Gebäude() {
  return (
    <Grid container mt={'10px'}>

      <Helmet>
          <title>Gebäude bei Hof & Gut Jesteburg</title>
          <meta name="description"  content="Renoviertes Bauernhaus umgebaute Scheune und zukünftige Projekte"/>
          <link rel='canonical' href="/Gebäude"/>
          <meta name="fragment" content="!"/>
      </Helmet>

        <Grid xs={12} lg={7}  sx={{padding:'10px'}}>
              <Item sx={{backgroundColor:"primary.dark", height:'100%'}}>
                              <CardMedia
                                    component="img"
                                    image="60842f03bdc80b89a1408476bdd76460.jpeg"
                                    alt="Foto Bauernhaus früher"
                                    height={'500'}
                                    />
              </Item>
          </Grid>

            <Grid lg={5} xs={12} sx={{padding:'10px'}}>
              <Item sx={{backgroundColor:"primary.dark", height:'100%'}}>
                  <Typography fontSize={'x-large'} >Das Bauernhaus früher</Typography>
                  <Typography sx={{fontSize:{xs:'small', xl:"xs"}}} >Die Hofstelle Itzenbütteler Sood 13 (Harmsbur) gehört zu den Hofstellen in Itzenbüttel, die auf das Mittelalter zurückgehen. Die Ursprünge des Hauptgebäudes liegen nach neusten Erkenntnissen im 16. Jahrhundert.
                    Anfang der 1990-er Jahre wurden große Teile des Reet-Dachs des Hofgebäudes erneuert. In den Jahren 2003/2004 wurde das Bauernhaus mit Unterstützung von Mitteln aus der Dorferneuerung und aus dem ETLR-Fonds grundlegend konstruktiv als ortsbildprägendes Gebäude saniert. Kleinere Sanierungsmaßnahmen erfolgten im Rahmen des Anschlusses an die Kanalisation.</Typography>
              </Item>
            </Grid>


        
        <Grid lg={5} xs={12}  sx={{padding:'10px'}}>
          <Item sx={{backgroundColor:"primary.dark", height:'100%'}}>
            <Typography fontSize={'x-large'} >Das Bauernhaus heute</Typography>
            <Typography sx={{fontSize:{xs:'small', xl:"xs"}}} >Im Jahr 2010 wurde das alte Bauernhaus auch im Inneren denkmalgerecht saniert und das historische Ständerwerk wiederhergestellt. Hofseitig und zur Straße hin erhielt das Gebäude neue Sprossenfenster und Gauben, die nun auch das Obergeschoss mit Licht versorgen. Eindrucksvoll lässt sich nun im Gastraum und auch im Küchenbereich das historische und teilweise wieder hergestellte Ständerwerk besichtigen. Bei der Renovierung wurden ausschließlich Eichen aus dem eigenen Itzenbütteler Wald verwendet. Durch ihre helle Farbe lassen sich die “neuen” Hölzer gut von den historischen unterscheiden.</Typography>

          </Item>
        </Grid>

        <Grid lg={7} xs={12} sx={{padding:'10px'}}>
          <Item sx={{backgroundColor:"primary.dark", height:'100%'}}>
           <CardMedia
                                component="img"
                                image="Bauernhaus2010.jpeg"
                                height='550'
                                alt="Foto Bauernhaus 2010"
                                />
          </Item>
        </Grid>


        <Grid lg={7} xs={12} sx={{padding:'10px'}}>
          <Item sx={{backgroundColor:"primary.dark"}}>
                <CustomImageList></CustomImageList>


                <Accordion sx={{backgroundColor:"primary.dark"}}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>
                        Hintergrund des Projekts Konversion Scheune (Umsetzung 2005/2006) war die Suche nach einer Nutzung,
                        welche die Erhaltung der (teilweise bereits abgängigen) Substanz im Ensemble ermöglicht und 
                        gleichzeitig im Einklang steht mit einer nachhaltigen Entwicklung der Hofstelle.Konzept:- 
                        Gemeinschaftliches und generationenübergreifendes Wohnkonzept auf dem Dorf mit 8 Wohneinheiten 
                        (50-160 m2).- Im Innenbereich des Gebäudes entstand in ökologischer Holzständerbauweise moderner 
                        Wohnraum (Niedrigenergiestandard, Zellulosedämmung).
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>
                          - Das ökologische Konzept wird ergänzt durch 
                          eine Solarthermie- und eine Photovoltaikanlage auf der Dachfläche.- Die Erschließung des Gebäudes 
                          erfolgt über einen Lichthof, gleichzeitig Treppenraum und Ort der Begegnung.- 50.000 historische 
                          Ziegelsteine wurden sorgfältig geputzt und im gesamten Gebäude wieder eingebaut.- 
                          Die architektonische Gestaltung erfolgte in enger Abstimmung mit dem Denkmalschutzexperten 
                          des Landkreises. 
                      </Typography>
                    </AccordionDetails>
                  </Accordion>  

          </Item>
        </Grid>


            <Grid lg={5} xs={12} sx={{padding:'10px'}}>
              <Item sx={{backgroundColor:"primary.dark", height:'100%'}}>
                  <CardMedia
                                        component="img"
                                        image="ReiterHaus.jpeg"
                                        height='650'
                                        alt="Foto Bauernhaus 2010"
                                        />
                    <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>
                      Dies ist unser “Kinderhaus”, in dem die Reitkinder sich vor und nach dem Unterricht aufhalten können.
                    </Typography>
              </Item>
            </Grid>

  </Grid>
  )
}
