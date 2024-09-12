import React, { useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { Helmet } from "react-helmet-async";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function ContactPage() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = "https://path-to-reservation-widget.js";  // Adjust with the actual script path
    script.async = true;
    script.dataset.resmioButton = "hof-gut-jesteburg";
    script.dataset.resmioFontsize = "14px";
    script.dataset.resmioFontcolor = "%23FFFFFF";
    script.dataset.resmioButtontext = "Jetzt reservieren";
    script.dataset.resmioButtoncolor = "%23c41500";
    script.dataset.resmioWidgetWidth = "275";
    script.dataset.resmioWidgetHeight = "400";
    document.body.appendChild(script);
  }, []);

  return (
    <Box sx={{ flexGrow: 1, mt: '10px' }}>
      <Helmet>
        <title>Anreise und Kontakt zu Hof&Gut Jesteburg</title>
        <meta name="description" content="Öffnungszeiten Kontakt Anreise Hof&Gut Jesteburg" />
        <link rel="canonical" href="/Kontakt" />
        <meta name="fragment" content="!" />
      </Helmet>

      <Grid container spacing={2}>
        <Grid xs={12} lg={4} display={'flex'}>
          <Item sx={{ backgroundColor: "primary.dark", padding: '0', paddingBottom: '10px', flexGrow: '1' }}>
            <Typography fontSize={'xx-large'}>
              Öffnungszeiten:
            </Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              Montag - Freitag: 17:00 - 22:00 Uhr (warme Küche)
              <br />
              Samstag, Sonntag und Feiertag: 12:00 - 22:00 Uhr (warme Küche)
            </Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
              Kontakt:
              <br />
              E-Mail: info@hof-und-gut.de
              <br />
              Tel: 04181 9199500
              <br />
              Mobil: 0176 70671532
            </Typography>

            <a href='https://cdn.shopify.com/s/files/1/0756/4568/2002/files/Aktuelle_Speisekarte.pdf?v=1724086530'>
              <Button variant='contained' sx={{ bgcolor: 'secondary.main', m: '15px' }}>
                Aktuelle Speisekarte
              </Button>
            </a>

            <Typography sx={{ mt: '10px' }}>Falls "Jetzt reservieren" nicht erscheint, bitte neu laden</Typography>
          </Item>
        </Grid>

        <Grid xs={12} lg={8}>
          <Item sx={{ backgroundColor: "primary.dark", height: '100%', padding: '0' }}>
            <Typography fontSize={'xx-large'}>So erreichen Sie uns:</Typography>

            <Grid>
              <Item sx={{ backgroundColor: "primary.light" }}>
                <Typography sx={{ fontSize: { xs: 'xs', xl: "large" } }}>
                  Hof & Gut Jesteburg GmbH bildet das Dach für die angesiedelten Betriebe
                </Typography>
                <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                  Büroadresse: Hauptstr.3 -21266 Jesteburg
                </Typography>
              </Item>
            </Grid>

            <Grid container gap={'10px'} justifyContent={'center'}>
              <Grid lg={3} xs={12} mb={2}>
                <Item sx={{ backgroundColor: "primary.light", height: '100%', wordBreak: 'break-word' }}>
                  <Typography sx={{ fontSize: { xs: 'xs', xl: "large" } }}>Reitbetrieb Knott:</Typography>
                  <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                    Reitgruppeneinteilung Carmen Knott
                    <br />
                    E-Mail: ponyreitschule.knott@gmx.de
                    <br />
                    Tel: 01633796966
                  </Typography>
                </Item>
              </Grid>

              <Grid lg={4} xs={12} mb={2}>
                <Item sx={{ backgroundColor: "primary.light", height: '100%', wordBreak: 'break-word' }}>
                  <Typography sx={{ fontSize: { xs: 'xs', xl: "large" } }}>Speisen und Übernachten am Hof:</Typography>
                  <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                    Inhaber Familie Spaqi
                    <br /><br />
                    E-Mail: info@hof-und-gut.de
                    <br />
                    Tel: 04181 9199500
                    <br />
                    Mobil: 0176 70671532
                  </Typography>
                </Item>
              </Grid>

              <Grid lg={4} xs={12} mb={2}>
                <Item sx={{ backgroundColor: "primary.light", height: '100%' }}>
                  <Typography sx={{ fontSize: { xs: 'xs', xl: "large" } }}>Landwirtschaft: Hof & Gut Jesteburg Agrar GmbH & Co. KG</Typography>
                  <Typography sx={{ fontSize: { xs: 'small', xl: "xs" } }}>
                    Büroadresse: Itzenbütteler Sod 15, 21266 Jesteburg
                    <br />
                    E-Mail: buchhaltung@hof-und-gut.de
                    <br />
                    Tel.: 04183 9759994
                  </Typography>
                </Item>
              </Grid>
            </Grid>
          </Item>
        </Grid>

        <Grid xs={12}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <Typography fontSize={'xx-large'} sx={{ m: '10px' }}>Anfahrt</Typography>
            <iframe
              title='Navigiere zu Hof&Gut Jesteburg'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2383.221622002947!2d9.933264077093998!3d53.32138507659057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47b1bd89bb3a0267%3A0x23876e66af16eac5!2sHof%20%26%20Gut%20Jesteburg!5e0!3m2!1sen!2sde!4v1693483721231!5m2!1sen!2sde"
              width="100%"
              height="700px"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
