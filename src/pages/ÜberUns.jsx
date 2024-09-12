import { Box, Typography, Divider } from '@mui/material';
import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function ÜberUns() {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        width: { xs: '100%', lg: '60%' },
        borderRadius: '10px',
        margin: '20px auto',
        padding: '20px',
        boxShadow: '0px 4px 12px rgba(0,0,0,0.1)',
        color: 'white'
      }}
    >
      <Helmet>
        <title>Über Hof&Gut Jesteburg</title>
        <meta name="description" content="Wissenswertes über Hof und Gut Jesteburg" />
        <link rel="canonical" href="/ÜberUns" />
        <meta name="fragment" content="!" />
      </Helmet>

      <Typography variant="h4" mb={2}>
        Über uns
      </Typography>

      <Typography sx={{ fontSize: 'medium', lineHeight: '1.6' }}>
        Unter dem Dach von Hof&Gut Jesteburg finden sich ökologische Landwirtschaft,
        ein Reitbetrieb, ein Einstellbetrieb, generationenübergreifendes Wohnen sowie Kunst und Kultur.
        Gastronomie und Gästezimmer am Hof werden betrieben unter der Marke „Speisen am Hof“ und „Übernachten am Hof“.
        Das Ensemble lädt Gäste ein zu Freizeitvergnügen, Genuss, Entschleunigung, Erholung im Schlaf und dem
        Erleben von kultureller Vielfalt inmitten schöner Natur. Wir bringen alles unter ein (Reet-) Dach.
      </Typography>

      <Divider sx={{ my: 3, borderColor: 'white' }} />

      <Typography sx={{ fontSize: 'medium', lineHeight: '1.6' }}>
        Die Hofstelle Itzenbütteler Sod 13-15 in 21266 Jesteburg-Itzenbüttel ist das Zentrum und die „Keimzelle“
        von Hof&Gut Jesteburg. Hier haben wir am 1. Oktober 2007 ein Projekt gestartet, mit dem wir eine Hofstelle,
        die auf das 16. Jahrhundert zurückgeht, neu beleben und für die breite Öffentlichkeit erlebbar machen wollen.
        Wir haben unseren Erlebnishof begonnen mit einem Reitbetrieb. Eine bunte Herde von insgesamt 40 Ponys und Pferden
        steht für den Unterricht und für Ausritte zur Verfügung. Kinder können professionell reiten lernen,
        ihre Kenntnisse vertiefen oder einfach Spaß am Reiten und dem Zusammensein mit Pferden entwickeln.
      </Typography>

      <Divider sx={{ my: 3, borderColor: 'white' }} />

      <Typography sx={{ fontSize: 'medium', lineHeight: '1.6' }}>
        Außerdem haben wir die zum Hof gehörenden Ackerflächen auf biologischen Anbau umgestellt, um hofeigene Produkte
        herzustellen. Inzwischen züchten wir Aubrac-Rinder und haben mittlerweile eine Herde von 40 Tieren. Das alte
        Bauernhaus haben wir im Jahr 2010 auch im Inneren denkmalgerecht saniert und der Öffentlichkeit mit unserer
        Gastronomie, die am 3. September 2010 eröffnet hat, zugänglich gemacht. Seit dem Sommer 2012 bietet der Hof
        schöne Gästezimmer unter dem Reetdach.
      </Typography>

      <Divider sx={{ my: 3, borderColor: 'white' }} />

      <Typography sx={{ fontSize: 'medium', lineHeight: '1.6' }}>
        Außerdem gibt es auf unserer Hofstelle ein modernes Wohnprojekt, die umgebaute ehemalige Korn- und Kartoffelscheune,
        in der viele Menschen ein neues Zuhause gefunden haben. Kunst und Kultur fördern wir mit verschiedenen Projekten und
        wechselnden Ausstellungen in den Gaststuben. Schaut gerne vorbei, um zu sehen, was auf unserem Hof passiert und
        in Bewegung ist.
      </Typography>

      <Divider sx={{ my: 3, borderColor: 'white' }} />

      <Typography sx={{ fontSize: 'small', lineHeight: '1.6' }}>
        Johanna Coleman und Axel Brauer, Hella Meyer-Alber und Nicolas Feltgen, Alexander Meyer-Alber und Annette Meyer-Alber
        mit dem „Hof&Gut-Team“ (Verwaltung, Reiten und Landwirtschaft), Andreas Ehring, Michael Hock, Esther Driessler,
        Carmen Knott und das Team der Ponyreitschule Knott, Stefanie Wiemer und Michaela Riemann für „Mellow Horsegarden“,
        sowie das Team von „Speisen und Übernachten am Hof“, Familie Spaqi, Frank Schiffner und das Küchenteam.
      </Typography>
    </Box>
  );
}
