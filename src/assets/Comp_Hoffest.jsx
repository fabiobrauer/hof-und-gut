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

export default function Hoffest() {
  return (
    <Box sx={{ flexGrow: 1, mt:'10px'}}>
      <Grid container spacing={2} >
        <Grid xs={12} lg={4}>
                <Item sx={{backgroundColor:"primary.dark", minHeight:'650px'}}>
                    <Typography fontSize={'xx-large'} m={'30px'}>Hoffest</Typography>
                    <Typography sx={{fontSize:'x-large'}}>
                    Am 1. Mai und am 3. Oktober feiern wir Hoffest. Am Vorabend wird getanzt, entweder in den Mai oder im Oktober zünftig mit Dirndl und Lederhos’n ins Oktoberfest. Das nächste Oktoberfest findet am 2. und 3. Oktober 2023 statt. Um Euch einen Eindruck von unserem Hoffest und etwas Vorfreude darauf zu verschaffen, hier ein kleiner Film auf youtube:
                    </Typography>
                    <Button><a href="https://youtu.be/UELE6Nx0z3E">Youtube Hoffest</a></Button>
                </Item>
        </Grid>
        <Grid xs={12} lg={4}>
          <Item sx={{backgroundColor:"primary.dark"}}>
                    <CardMedia 
                        component="img"
                        image="20230501_123221.jpg"
                        height='650'
                        alt="Bauernhaus"
                    /> 
          </Item>
        </Grid>
        <Grid xs={12} lg={4}>
                <Item sx={{backgroundColor:"primary.dark", height:'650px'}}>
                    <Typography fontSize={'xx-large'} m={'30px'}>
                        Ökologische landwirtschaft
                    </Typography>
                    <CardMedia
                              component="img"
                              height={520}
                              image="Diewackerenvier.jpg"
                              alt="Vier Kälber"
                    /> 
                </Item>
          </Grid>

      </Grid>
    </Box>
  );
}