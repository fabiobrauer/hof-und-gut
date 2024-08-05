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
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Hoffest() {
  return (
    <Box sx={{ flexGrow: 1, mt:'5px'}}>
      <Grid container spacing={2}>
        
         <Grid xs={12} lg={4}>
          <Item sx={{backgroundColor:"primary.dark", height:'100%', padding:'10'}}>
{                      <Typography fontSize={'x-large'}>Hoffest 2023</Typography>
}                      <CardMedia 
                        component="img"
                        image="20230501_123221.jpg"
                        alt="Hoffest"
                        width={"100%"}
                    />           
          </Item>
        </Grid>

        <Grid xs={12} lg={4} >
                <Item sx={{backgroundColor:"primary.dark", height:'100%', padding:'0'}}>
                    <Typography fontSize={'x-large'}>Hoffest</Typography>
                    <Typography sx={{fontSize:{xs:'small', xl:"large"}}}>
                    Am 1. Mai und am 3. Oktober feiern wir Hoffest. Am Vorabend wird getanzt, entweder in den Mai oder im Oktober zünftig mit Dirndl und Lederhos’n ins Oktoberfest. <span style={{fontStyle:'Bold'}}>Das nächste Hoffest findet am 30.04.2024 und 01.05.2024 statt.</span> Um Euch einen Eindruck von unserem Hoffest und etwas Vorfreude darauf zu verschaffen, hier ein kleiner Film auf youtube:
                    </Typography>
                    <Button sx={{fontSize:{xs:'small', xl:"small"}}}><a href="https://youtu.be/UELE6Nx0z3E">Youtube Hoffest</a></Button>
                </Item>
        </Grid>

        <Grid xs={12} lg={4}>
                <Item sx={{backgroundColor:"primary.dark", height:'100%', padding:'10'}}>
                    <Typography fontSize={'x-large'} >
                        Ökologische Landwirtschaft
                    </Typography>
                    <CardMedia
                              component="img"
                              image="Diewackerenvier.jpg"
                              alt="Vier Kälber"
                              width={"100%"}

                    /> 
                </Item>
          </Grid>

      </Grid>
    </Box>
  );
}