import React from 'react'
import Comp_SpeisenAmHof from '../assets/Comp_SpeisenAmHof'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SpeisenCustomImageList from '../assets/Comp_ImageListSpeisen';
import {Helmet} from "react-helmet-async";





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));


export default function SpeisenAmHof() {
  return (
    
      

      <Box sx={{ flexGrow: 1, mt:'15px'}}>

      <Helmet>
        <title>Speisen am Hof</title>
        <link rel='canonical' href="/SpeisenAmHof"/>
        <meta name="description"  content="Süddeutsche Küche in Jesteburg"/>
        <meta name="description"  content="Restaurant Jesteburg"/>
        <meta name="fragment" content="!"/>
      </Helmet>

        <Comp_SpeisenAmHof></Comp_SpeisenAmHof>

      <Grid container spacing={2} mt={'10px'}>
        <Grid xs={12} lg={6}>
                <Item sx={{backgroundColor:"primary.dark"}}>
                  <Typography fontSize={'x-large'}>Speisen am Hof</Typography>
                  <Typography fontSize={'large'}> 
                    Wir freuen uns immer, Sie in unserem sanierten Bauernhaus aus dem 16. Jahrhundert als Gast empfangen zu dürfen. Ein erfahrenes Küchenteam rund um Frank Schiffner kocht täglich für Sie – ob die bereits bekannten und beliebten Klassiker der Hofküche (auch mit Fleisch von den hofeigenen Rindern) oder neuartige Kreationen mit einem Mix aus Elementen der mediterranen und japanischen Küche, inspiriert von Axel Henkel. Wichtig sind uns dabei die frischen Produkte, mit denen neue Ideen auf der regelmäßig wechselnden Karte umgesetzt werden. Essen soll, davon sind wir überzeugt, generationenübergreifend Spaß machen!
                  </Typography> 
                </Item>
                <Item sx={{backgroundColor:"primary.dark", mt:'15px'}}>
                    <Typography fontSize={'large'}> Bitte reservieren Sie rechtzeitig einen Tisch, besonders wenn Sie am Wochenende oder zum Abendessen kommen möchten…Sie können auch auf unserer Diele mit bis zu 75 Personen in attraktiv sanierter historischer Umgebung feiern und tagen. Wir besprechen gerne Anlass und passende Gerichte und Getränke</Typography>
                </Item>

                              <Grid xs={12} lg={3}>
                        <Item sx={{backgroundColor:"primary.dark"}}>
                          <Typography fontSize={'x-large'}> Büffetbeispiel ab 20 Personen</Typography>
                          <Typography fontSize={'large'}> 
                                        Tomatensuppe mit Crème Fraîche 
                                        Croûtons und Basilikum <br></br>
                                        Hof & Gut Anti-Pasti <br></br>
                                        Rote Bete-Carpaccio <br></br>
                                        Blattsalate mit Hausdressing <br></br>
                                        Schweinefilet vom Bio-Schwein auf Rotwein-Thymianzwetschgen <br></br>
                                        Gefüllte Spitzpaprika mit Gemüse-Couscous und Chili-Limonen-Joghurt <br></br>
                                        Kartoffelgratin <br></br>
                                        Reis <br></br>
                                        Crème Brulée mit Waldbeerenkompott <br></br><br></br>
                                        Gern erstellen wir Ihnen individuell ein Buffet oder Menü
                          </Typography>
                        </Item>
                        <Item sx={{backgroundColor:"primary.dark", mt:'15px'}}>
                        <Typography fontSize={'x-large'}>Menübeispiele ab 20 Personen</Typography>
                          <Typography  fontSize={'large'}>
                                Menü 1<br></br>
                                Karotten-Ingwer-Suppe***<br></br>Zanderfilet auf tomatisiertem Rahmsauerkraut mit Hofkartoffeln***<br></br>Schokoladenmousse mit Himbeer-Chilisauce
                                <br></br><br></br>Menü 2<br></br>
                                Rote Bete–Carpaccio mit Trüffel-Limonendressing und Basilikumparmesan***<br></br>Kalbsvoltini gefüllt mit Scampi-Aprikosenfarce auf Balsamico-Linsengemüsemit Koriander und gerösteten Pinienkernen***<br></br>Käsebrett mit Weintrauben
                                Gerne stellen wir Ihnen ein individuelles Menü zusammen
                          </Typography>
                        </Item>        {/*   <Item sx={{backgroundColor:"primary.dark", mt:'15px'}}> 
                        <CardMedia
                                              component="img"
                                              image="Stube.jpeg"
                                              height='550'
                                              alt="Stube"
                                              /> 
                        </Item>*/}
                      </Grid>


        </Grid>
        <Grid xs={12} lg={6}>
          <Item sx={{backgroundColor:"primary.dark"}}>
            <SpeisenCustomImageList></SpeisenCustomImageList>
          </Item>

        </Grid>
       


      </Grid>
    </Box>
    
  )
}
