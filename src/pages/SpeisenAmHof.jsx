import React from 'react'
import Comp_SpeisenAmHof from '../assets/Comp_SpeisenAmHof'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SpeisenCustomImageList from '../assets/Comp_ImageListSpeisen';





const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));


export default function SpeisenAmHof() {
  return (
    
      

      <Box sx={{ flexGrow: 1, mt:'10px'}}>

        <Comp_SpeisenAmHof></Comp_SpeisenAmHof>

      <Grid container spacing={2} >
        <Grid xs={12} lg={3}>
                <Item sx={{backgroundColor:"primary.dark"}}>
                  <Typography fontSize={'xx-large'}>Speisen am Hof</Typography>
                  <Typography fontSize={'x-large'}> 
                    Wir freuen uns immer, Sie in unserem sanierten Bauernhaus aus dem 16. Jahrhundert als Gast empfangen zu dürfen. Ein erfahrenes Küchenteam rund um Frank Schiffner kocht täglich für Sie – ob die bereits bekannten und beliebten Klassiker der Hofküche (auch mit Fleisch von den hofeigenen Rindern) oder neuartige Kreationen mit einem Mix aus Elementen der mediterranen und japanischen Küche, inspiriert von Axel Henkel. Wichtig sind uns dabei die frischen Produkte, mit denen neue Ideen auf der regelmäßig wechselnden Karte umgesetzt werden. Essen soll, davon sind wir überzeugt, generationenübergreifend Spaß machen!
                  </Typography> 
                </Item>
                <Item sx={{backgroundColor:"primary.dark", mt:'10px'}}>
                    <Typography fontSize={'x-large'}> Bitte reservieren Sie rechtzeitig einen Tisch, besonders wenn Sie am Wochenende oder zum Abendessen kommen möchten…Sie können auch auf unserer Diele mit bis zu 75 Personen in attraktiv sanierter historischer Umgebung feiern und tagen. Wir besprechen gerne Anlass und passende Gerichte und Getränke</Typography>
                </Item>
        </Grid>
        <Grid xs={12} lg={6}>
          <Item sx={{backgroundColor:"primary.dark"}}>
            <SpeisenCustomImageList></SpeisenCustomImageList>
          </Item>
          <Item sx={{backgroundColor:"primary.dark", mt:'10px'}}> 
          <CardMedia
                                component="img"
                                image="Stube.jpeg"
                                height='550'
                                alt="Stube"
                                />
          </Item>
        </Grid>
        <Grid xs={12} lg={3}>
          <Item sx={{backgroundColor:"primary.dark", padding:'30px'}}>
            <Typography fontSize={'xx-large'}> Büffetbeispiel ab 20 Personen</Typography>
            <Typography fontSize={'x-large'}> 
                          Tomatensuppe mit Crème Fraîche, Croûtons und Basilikum
                          Hof & Gut Anti-Pasti
                          Rote Bete-Carpaccio
                          Blattsalate mit Hausdressing
                          Schweinefilet vom Bio-Schwein auf Rotwein-Thymianzwetschgen
                          Gefüllte Spitzpaprika mit Gemüse-Couscous und Chili-Limonen-Joghurt
                          Kartoffelgratin
                          Reis
                          Crème Brulée mit Waldbeerenkompott
                          Gern erstellen wir Ihnen individuell ein Buffet oder Menü
            </Typography>
          </Item>
          <Item sx={{backgroundColor:"primary.dark", mt:'10px', padding:'30px'}}>
          <Typography fontSize={'xx-large'}>Menübeispiele ab 20 Personen</Typography>
            <Typography  fontSize={'x-large'}>
                  Menü 1
                  Karotten-Ingwer-Suppe***<br></br>Zanderfilet auf tomatisiertem Rahmsauerkraut mit Hofkartoffeln***<br></br>Schokoladenmousse mit Himbeer-Chilisauce
                  Menü 2
                  Rote Bete–Carpaccio mit Trüffel-Limonendressing und Basilikumparmesan***<br></br>Kalbsvoltini gefüllt mit Scampi-Aprikosenfarce auf Balsamico-Linsengemüsemit Koriander und gerösteten Pinienkernen***<br></br>Käsebrett mit Weintrauben
                  Gerne stellen wir Ihnen ein individuelles Menü zusammen
            </Typography>
          </Item>
        </Grid>



      </Grid>
    </Box>
    
  )
}
