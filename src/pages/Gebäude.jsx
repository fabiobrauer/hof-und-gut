import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import CustomImageList from '../assets/Comp_ImageList';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Gebäude() {
  return (
    <Grid container sx={{mt:'10px'}}>
        <Grid lg={7} xs={12}>
          <Item sx={{backgroundColor:"primary.dark", m:'5px'}}>
                          <CardMedia
                                component="img"
                                image="60842f03bdc80b89a1408476bdd76460.jpeg"
                                height='750'
                                alt="Foto Bauernhaus früher"
                                />
          </Item>
        </Grid>
        <Grid lg={5} xs={12}>
          <Item sx={{backgroundColor:"primary.dark", m:'5px', minHeight:'750px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
              <Typography fontSize={'xx-large'} m={'10px'}>Das Bauernhaus Früher</Typography>
              <Typography fontSize={'x-large'}>Die Hofstelle Itzenbütteler Sood 13 (Harmsbur) gehört zu den Hofstellen in Itzenbüttel, die auf das Mittelalter zurückgehen. Die Ursprünge des Hauptgebäudes liegen nach neusten Erkenntnissen im 16. Jahrhundert.
                Anfang der 1990-er Jahre wurden große Teile des Reet-Dachs des Hofgebäudes erneuert. In den Jahren 2003/2004 wurde das Bauernhaus mit Unterstützung von Mitteln aus der Dorferneuerung und aus dem ETLR-Fonds grundlegend konstruktiv als ortsbildprägendes Gebäude saniert. Kleinere Sanierungsmaßnahmen erfolgten im Rahmen des Anschlusses an die Kanalisation.</Typography>
          </Item>
        </Grid>
        <Grid lg={5} xs={12}>
          <Item sx={{backgroundColor:"primary.dark", m:'5px' , minHeight:'750px', display:'flex', flexDirection:'column', justifyContent:'center'}}>
          <Typography fontSize={'xx-large'} m={'10px'}>Das Bauernhaus Heute</Typography>
          <Typography fontSize={'x-large'}>Im Jahr 2010 wurde das alte Bauernhaus auch im Inneren denkmalgerecht saniert und das historische Ständerwerk wiederhergestellt. Hofseitig und zur Straße hin erhielt das Gebäude neue Sprossenfenster und Gauben, die nun auch das Obergeschoss mit Licht versorgen. Eindrucksvoll lässt sich nun im Gastraum und auch im Küchenbereich das historische und teilweise wieder hergestellte Ständerwerk besichtigen. Bei der Renovierung wurden ausschließlich Eichen aus dem eigenen Itzenbütteler Wald verwendet. Durch ihre helle Farbe lassen sich die “neuen” Hölzer gut von den historischen unterscheiden.</Typography>

          </Item>
        </Grid>
        <Grid lg={7} xs={12}>
          <Item sx={{backgroundColor:"primary.dark", m:'5px'}}>
           <CardMedia
                                component="img"
                                image="Bauernhaus2010.jpeg"
                                height='750'
                                alt="Foto Bauernhaus 2010"
                                />
          </Item>
        </Grid>
        <Grid lg={7} xs={12}>
          <Item sx={{backgroundColor:"primary.dark", m:'5px', minHeight:'700px'}}>

            <Grid>
              <Item sx={{backgroundColor:"primary.light", m:'5px'}}>
                <CustomImageList></CustomImageList>
              </Item>
            </Grid>
            <Grid>
              <Item sx={{backgroundColor:"primary.light", m:'5px'}}>
                <Typography fontSize={'x-large'}>
                  Hintergrund des Projekts Konversion Scheune (Umsetzung 2005/2006) war die Suche nach einer Nutzung, welche die Erhaltung der (teilweise bereits abgängigen) Substanz im Ensemble ermöglicht und gleichzeitig im Einklang steht mit einer nachhaltigen Entwicklung der Hofstelle.Konzept:- Gemeinschaftliches und generationenübergreifendes Wohnkonzept auf dem Dorf mit 8 Wohneinheiten (50-160 m2).- Im Innenbereich des Gebäudes entstand in ökologischer Holzständerbauweise moderner Wohnraum (Niedrigenergiestandard, Zellulosedämmung).- Das ökologische Konzept wird ergänzt durch eine Solarthermie- und eine Photovoltaikanlage auf der Dachfläche.- Die Erschließung des Gebäudes erfolgt über einen Lichthof, gleichzeitig Treppenraum und Ort der Begegnung.- 50.000 historische Ziegelsteine wurden sorgfältig geputzt und im gesamten Gebäude wieder eingebaut.- Die architektonische Gestaltung erfolgte in enger Abstimmung mit dem Denkmalschutzexperten des Landkreises.
                </Typography>
            </Item>
            </Grid>

          </Item>
        </Grid>


            <Grid lg={5} xs={12}>
              <Item sx={{backgroundColor:"primary.dark", m:'5px'}}>
                <Grid>
                  <Item sx={{backgroundColor:"primary.light", m:'5px'}}>
                  <CardMedia
                                        component="img"
                                        image="ReiterHaus.jpeg"
                                        height='650'
                                        alt="Foto Bauernhaus 2010"
                                        />
                  </Item>
                </Grid>
                <Grid>
                  <Item sx={{backgroundColor:"primary.light", m:'5px'}}>
                    <Typography fontSize={'x-large'}>
                      Dies ist unser “Kinderhaus”, in dem die Reitkinder sich vor und nach dem Unterricht aufhalten können.
                    </Typography>
                  </Item>
                </Grid>
              </Item>
            </Grid>

  </Grid>
  )
}
