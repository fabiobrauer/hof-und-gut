import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));



export default function ArchitkturBauernhaus() {
  const theme = useTheme();

  return (
    <Box sx={{ flexGrow: 1, mt:'10px'}}>
      <Grid container spacing={2} >

        <Grid xs={12} lg={7}>
          <Item sx={{backgroundColor:"primary.dark", height:'100%', padding:'0'}}>
            <Typography fontSize={'xx-large'}>
                Architektur
            </Typography>
            <Typography fontSize='x-large'> 
            Hof&Gut ist ausgewählter Ort 2012 der Architektenkammer Niedersachsen
            Gute Architektur ist nicht nur eine Frage des Preises, sondern insbesondere der Phantasie und des Könnens der Architekten, die Wünsche und Anforderungen ihrer Bauherren optimal umzusetzen. Architekturqualität lohnt sich überall und an jedem Ort. Daher freut es uns umso mehr, dass Hof&Gut als ausgewählter Ort nominiert wurde:
            <br></br><a href="https://www.aknds.de/architektur_tda2012.html">www.aknds.de/architektur</a>
          </Typography>
          </Item>
        </Grid>
        <Grid xs={12} lg={5}>
          <Item sx={{backgroundColor:"primary.dark", height:'100%', padding:'0'}}>
                                <CardMedia
                                component="img"
                                image="20230720_115731_resized.jpg"
                                alt="Bauernhaus"
                                />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
