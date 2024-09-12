import React from 'react';
import Comp_SpeisenAmHof from '../assets/Comp_SpeisenAmHof';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import SpeisenCustomImageList from '../assets/Comp_ImageListSpeisen';
import { Helmet } from "react-helmet-async";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function SpeisenAmHof() {
  return (
    <Box sx={{ flexGrow: 1, mt: '15px' }}>
      <Helmet>
        <title>Speisen am Hof</title>
        <link rel='canonical' href="/SpeisenAmHof" />
        <meta name="description" content="Süddeutsche Küche in Jesteburg, Restaurant Jesteburg" />
        <meta name="fragment" content="!" />
      </Helmet>

      <Comp_SpeisenAmHof />

      <Grid container spacing={2} mt="10px">
        <Grid xs={12} lg={6}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <Typography fontSize="x-large">Speisen am Hof</Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              Wir freuen uns immer, Sie in unserem sanierten Bauernhaus aus dem 16. Jahrhundert als Gast empfangen zu dürfen. Ein erfahrenes Küchenteam rund um Frank Schiffner kocht täglich für Sie – ob die bereits bekannten und beliebten Klassiker der Hofküche (auch mit Fleisch von den hofeigenen Rindern) oder neuartige Kreationen mit einem Mix aus Elementen der mediterranen und japanischen Küche, inspiriert von Axel Henkel. Wichtig sind uns dabei die frischen Produkte, mit denen neue Ideen auf der regelmäßig wechselnden Karte umgesetzt werden. Essen soll, davon sind wir überzeugt, generationenübergreifend Spaß machen!
            </Typography>
          </Item>

          <Item sx={{ backgroundColor: "primary.dark", mt: '15px', mb: '15px' }}>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              Bitte reservieren Sie rechtzeitig einen Tisch, besonders wenn Sie am Wochenende oder zum Abendessen kommen möchten… Sie können auch auf unserer Diele mit bis zu 75 Personen in attraktiv sanierter historischer Umgebung feiern und tagen. Wir besprechen gerne Anlass und passende Gerichte und Getränke.
            </Typography>
          </Item>

          <Grid xs={12} lg={3}>
            <Item sx={{ backgroundColor: "primary.dark" }}>
              <Typography fontSize="x-large">Büffetbeispiel ab 20 Personen</Typography>
              <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                Tomatensuppe mit Crème Fraîche <br />
                Croûtons und Basilikum <br />
                Hof & Gut Anti-Pasti <br />
                Rote Bete-Carpaccio <br />
                Blattsalate mit Hausdressing <br />
                Schweinefilet vom Bio-Schwein auf Rotwein-Thymianzwetschgen <br />
                Gefüllte Spitzpaprika mit Gemüse-Couscous und Chili-Limonen-Joghurt <br />
                Kartoffelgratin <br />
                Reis <br />
                Crème Brulée mit Waldbeerenkompott <br /><br />
                Gern erstellen wir Ihnen individuell ein Buffet oder Menü.
              </Typography>
            </Item>

            <Item sx={{ backgroundColor: "primary.dark", mt: '15px' }}>
              <Typography fontSize="x-large">Menübeispiele ab 20 Personen</Typography>
              <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                Menü 1<br />
                Karotten-Ingwer-Suppe***<br />
                Zanderfilet auf tomatisiertem Rahmsauerkraut mit Hofkartoffeln***<br />
                Schokoladenmousse mit Himbeer-Chilisauce<br /><br />
                Menü 2<br />
                Rote Bete–Carpaccio mit Trüffel-Limonendressing und Basilikumparmesan***<br />
                Kalbsvoltini gefüllt mit Scampi-Aprikosenfarce auf Balsamico-Linsengemüse mit Koriander und gerösteten Pinienkernen***<br />
                Käsebrett mit Weintrauben<br /><br />
                Gerne stellen wir Ihnen ein individuelles Menü zusammen.
              </Typography>
            </Item>
          </Grid>
        </Grid>

        <Grid xs={12} lg={6}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <SpeisenCustomImageList />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
