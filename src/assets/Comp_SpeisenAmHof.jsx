import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';



const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Comp_SpeisenAmHof() {
  return (
    <Box sx={{ flexGrow: 1, mt:'10px'}}>
      <Grid container spacing={2} >
        <Grid xs={12} lg={8}>
                <Item sx={{backgroundColor:"primary.dark"}}> 
                <CardMedia
                component="img"
                height='650'
                image="Entrecôte.jpg"
                alt="Entrecote"
              />
                </Item>
        </Grid>
        <Grid xs={12} lg={4}>
          <Item sx={{backgroundColor:"primary.dark" , minHeight:'650px'}}>
                <Typography fontSize={'xx-large'} sx={{ m:'30px'}} >
                    Öffnungszeiten:
                </Typography>
                <Typography fontSize={'x-large'}>
                    Montag - Freitag: 17:00 - 22:00 Uhr (warme Küche)
                    <br></br>
                  Samstag, Sonntag und Feiertag: 12:00 - 22:00 Uhr (warme Küche)
                </Typography>
                <Typography sx={{ fontSize: 'x-large', lineHeight:'3.5rem'}} >
                    Kontakt:
                    <br></br>
                    E-Mail: info@hof-und-gut.de
                    <br></br>
                    Tel: 04181 9199500
                    <br></br>
                    Tel mobil: 0176 70671532
                </Typography>

                    <Button variant='contained' sx={{bgcolor:'secondary.main', m:"30px"}} >Aktuelle Speisekarte</Button>
                    <Button variant='contained' sx={{bgcolor:'secondary.main'}}>Tisch Buchem mit Resmio</Button>

          </Item>

        </Grid>
      </Grid>
    </Box>
  );
}