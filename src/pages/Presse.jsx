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



/* Hier noch Download Links einfügen */

export default function Presse() {
  return (
    <Box sx={{ flexGrow: 1, mt:'10px'}}>
      <Grid container spacing={2} justifyContent='center'>

                <Grid xs={12} lg={9}>
                    <Item sx={{backgroundColor:"primary.dark"}}>
                      <CardMedia
                        component="img"
                        image="Zeitung4.png"
                        alt="Zeitungsartikel"/> 
                    </Item>
                </Grid>

              <Grid xs={12} lg={4}>
                  <Item sx={{backgroundColor:"primary.dark"}}>
                        <CardMedia
                        component="img"
                        height={'770px'}
                        image="Zeitung1.jpeg"
                        alt="Foto Bauernhaus früher"/>
                  </Item>
              </Grid>


              <Grid xs={12} lg={4}>
                  <Item sx={{backgroundColor:"primary.dark"}}>
                  <CardMedia
                        component="img"
                        image="Zeitung2.jpeg"
                        height={'770px'}
                        alt="Foto Bauernhaus früher"/>
                  </Item>
              </Grid>
        <Grid></Grid>


            <Grid xs={12} lg={4}>
              <Item sx={{backgroundColor:"primary.dark"}}>
                  <Typography  fontSize={'large'}>
                            Auszubildender Marianus von Hörsten gewinnt Silbermedaille!
                            Pressemitteilung
                            Jesteburg, 20.04.2012
                            Silbermedaille für Marianus von Hörsten vom Restaurant „Stub’n“, Hof&Gut Jesteburg GmbH in Jesteburg
                            Bei den niedersächsischen Jugendmeisterschaften vom 17.-19.04.2012 in Cuxhaven hat unser Auszubildender Marianus von Hörsten im Wettbewerb des Gastgewerbes die Silbermedaille geholt. „Wir sind sehr stolz auf diese Leistung“, freuen sich Chefkoch Frank Schiffner und Geschäftsführer Axel Brauer.
                            An drei spannenden Wettkampftagen in Cuxhaven kämpften die 70 besten Auszubildenden aus dem niedersächsischen Gastgewerbe mit viel Engagement um den Titel des Landesmeisters. Marianus von Hörsten hat auch unter den Wettkampfbedingungen und unter den kritischen Blicken der fachkundigen Jury die Nerven behalten – das ist nicht immer leicht“ weiß Chefkoch Frank Schiffner die tolle Leistung zu schätzen. „Besonders hat es uns gefreut, dass unser Auszubildender nach einer verkürzten Ausbildungszeit von heute weniger als zwei Jahren in einem Betrieb, der erst im September 2010 an den Start ging, diese Leistung erbringen konnte“, sagt Axel Brauer, Geschäftsführer und Gründer der Hof&Gut Jesteburg GmbH. „Das spricht zwar in erster Linie für das Talent unseres Auszubildenden, aber auch für gute Ausbildungsbedingungen in unserem Betrieb mit einem erfahrenen Chefkoch.“
                            Nach den schriftlichen Arbeiten und der Warenerkennung am ersten Tag standen an den beiden folgenden Tagen die praktischen Prüfungen auf dem Programm. Unter dem Motto „Naturwunder der Erde“ gab es vielfältige Aufgaben zu erledigen. Je nach Ausbildungsberuf waren Speisen zu kochen und zu servieren, Cocktails zu mixen, Tische einzudecken und zu dekorieren, Speisekarten zu gestalten, Gespräche am Hotelempfang zu führen, Hotelzimmer abzunehmen und vieles mehr. Höhepunkt war in allen 3 Gruppen das Prüfungsessen. Jeder Koch musste aus einem vorgegebenen Warenkorb ein Menü für 6 Personen zubereiten. Dieses wurde anschließend von den Hotel- und Restaurantfachleuten professionell serviert.
                            Erster Gratulant war Niedersachsens DEHOGA-Präsident Hermann Kröger, der gerne den Weg nach Cuxhaven fand, um den Nachwuchs in Augenschein zu nehmen.„Sie haben den Grundstein für eine erfolgreiche Karriere im Gastgewerbe gelegt. Wenn Sie weiterhin so engagiert in Ihrem Beruf bleiben, kann eigentlich nichts schief gehen“, gratulierte Kröger.
                            Pressekontakt:
                            Hof&Gut Jesteburg GmbH
                            Restaurant „Stub’n“
                            Johanna Coleman
                            Mobil 0174 3494811
                  </Typography>
                </Item>
            </Grid>


            <Grid xs={12} lg={4} >
              <Item sx={{backgroundColor:"primary.dark"}}>
                          <Typography fontSize={'large'}>
                              Hof & Gut im Hamburger Abendblatt
                              Dass in Itzenbüttel Feuer im Kamin brennt, ist Johanna Coleman und Axel Brauer zu verdanken. Auf einer geerbten Hofstelle starteten sie ein Projekt, das weit über einen Restaurantbetrieb hinausgeht. Die Ursprünge der Anlage gehen zurück bis ins 16. Jahrhundert. Immer schon spielten Pferde hier eine wichtige Rolle. Deswegen begann man 2007 mit der Eröffnung einer Reitschule. 15 Ponys und Pferde stehen für Unterricht, Ausritte und Kindergeburtstage im Stall. In der ehemaligen Korn- und Kartoffelscheune verwirklichten die Betreiber ein Wohnprojekt, in dem Kinder und Erwachsene ein modernes Zuhause auf dem Land gefunden haben.Das Herz der Anlage ist das alte Bauernhaus. Sein Innenleben wurde saniert, bis zum vorläufigen Höhepunkt der Hofgeschichte: die Eröffnung des Restaurants Stub’n im Herbst vorigen Jahres. Mittendrin ein offener Kamin mit Gästen drumherum. Für die kalte Jahreszeit haben sich Küchenchef Frank Schiffner und Restaurantleiter Ulf Röbe vorgenommen, einen Klassiker neu zu etablieren: das Fondue. Vor dem Kaminfeuer ist das gesellige Essen besonders kuschelig. Zur Wahl stehen Käse- oder Fleischfondue (19,50 Euro/ 27,50 Euro). Ersteres passt hervorragend als langsamer Begleiter eines gemütlichen Weinabends.Die österreichische Sommeliere Anni Schwaiger empfiehlt die passenden Gewächse zum Eintunken von Brot (selbst gebacken) und Biokartoffeln (selbst geerntet) in den gasbeflammten Pott mit Cheddar, Emmentaler und Bergkäse. Das Fleischfondue kommt mit vorportionierten Rinderstücken aus Filet, Rumpsteak und Entrecote auf den Tisch, vornehmlich aus der Nachbarschaft. Hier weiden die hofeigenen Aubrac-Rinder, eine französische Rasse, die in Itzenbüttel gezüchtet wird.Nach Lust und Laune spießen die Gäste Fleisch oder Gemüse auf und tunken es in die Brühe. Frank Schiffner hat vier feine Dips kreiert: Cocktail, Kräuter, Honig-Schmand-Chili und Sardelle-Kapern-Tomate. Dazu schenkt Anni Schwaiger “Carmino” ins Glas, eine Rotweincuvée vom Kaiserstuhl. Das große Fondue-Finale besteht traditionell aus der gebrauchten Brühe, die mit Port oder Sherry aus einer Espressotasse getrunken wird. Tolles Aroma.
                              Link: Artikel im Abendblatt
                          </Typography>
              </Item>
            </Grid>


                <Grid xs={12} lg={4}>
                  <Item sx={{backgroundColor:"primary.dark"}}>
                              <Typography  fontSize={'large'}>
                                  Hof&Gut im Fernsehen
                                  Am 13. Januar 2016 wurde im NDR in der Sendung “Mein Nachmittag” ein kurzer Film über Hof&Gut und schöne Orte in der Umgebung ausgestrahlt. Live im Studio war Chefkoch Frank Schiffner, der ein Lieblingsgericht vorgestellt hat! Hier der Link zur Sendung…die letzten 12 Minuten sind die spannendsten: <br></br><a href="https://www.ndr.de/fernsehen/sendungen/mein_nachmittag/Mein-Nachmittag,meinnachmittag12852.html">NDR Mein-Nachmittag</a> 
                              </Typography>
                  </Item>
                  <Item sx={{backgroundColor:"primary.dark", mt:'10px'}}>
                            <Typography>Land und Forst: “Über 400 Jahre alt und gut gedämmt”
                                Und hier geht es zm Link: LUF07022013
                            </Typography>
                  </Item>
                  <Item sx={{backgroundColor:"primary.dark", mt:'10px'}}>
                            <Typography>
                              Rinderzucht bei Hof&Gut in der DLZ
                              Und hier geht es zum Link: ArtikelDLZJuni2017
                            </Typography>
                  </Item>
                  <Item sx={{backgroundColor:"primary.dark", mt:'10px'}}>
                            <Typography>
                            Hof&Gut im Hamburger Abendblatt “Neues Leben auf dem alten Hof”
                            Hamburger Abendblatt25082014
                            </Typography>
                  </Item>

                  <Item sx={{backgroundColor:"primary.dark", mt:'10px'}}>
                            <Typography>
                                Wohn-Scheune Itzenbüttel
                                Wohn-Scheune Itzenbüttel(download PDF)
                            </Typography>
                  </Item>
                  <Item sx={{backgroundColor:"primary.dark", mt:'10px'}}>
                  <CardMedia
                        component="img"
                        image="schleppjagt.jpeg"
                        alt="Schleppjagd"/>
                            <Typography>
                            Am 17.10.2016 war auf Hof&Gut wieder richtig was los: die große Schleppjagd des Hamburger Schlappjagd-Vereins fand nun schon zum 6. Mal auf dem Gelände von Hof&Gut und den benachbarten Höfen statt. Um 13 Uhr ist Abritt ab Hof&Gut und gegen 15 Uhr treffen Reiter und Meute zum krönenden Abschluß, dem Curée, auf dem Hof ein – Zuschauer sind herzlich willkommen!
                            </Typography>
                  </Item>
                </Grid>

        </Grid>
    </Box>
  )
}
