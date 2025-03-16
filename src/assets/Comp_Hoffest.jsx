import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.primary.dark : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  color: theme.palette.text.secondary,
}));

export default function Hoffest() {
  return (
    <Box sx={{ flexGrow: 1, mt: '5px' }}>
      <Grid container spacing={2}>
        
        {/* Left Section: Hoffest Image */}
        <Grid xs={12} lg={4}>
          <Item sx={{ backgroundColor: "primary.dark", height: '100%', padding: '10px' }}>
            <Typography fontSize={'x-large'} gutterBottom>
              Hoffest
            </Typography>
            <CardMedia 
              component="img"
              image="20230501_123221.jpg"
              alt="Hoffest"
              sx={{ width: '100%', height: '520px', objectFit: 'cover' }}
            />
          </Item>
        </Grid>

        {/* Center Section: Hoffest Description */}
        <Grid xs={12} lg={4}>
          <Item sx={{ backgroundColor: "primary.dark", height: '100%', padding: '10px' }}>
            <Typography fontSize={'x-large'} gutterBottom>
              Hoffest
            </Typography>
            <Typography sx={{ fontSize: { xs: 'small', xl: 'medium' } }}>
              Am 1. Mai und am 3. Oktober feiern wir Hoffest. Am Vorabend wird getanzt, entweder in den Mai oder im Oktober zünftig 
              mit Dirndl und Lederhos’n ins Oktoberfest. Das nächste Hoffest findet am <b>1. Mai 2025</b> statt und am 
              <b> 30. April ab 19 Uhr</b> ist Tanz in den Mai mit DJ und Co. Um Euch einen Eindruck von unserem Hoffest 
              und etwas Vorfreude darauf zu verschaffen, hier ein kleiner Film auf YouTube:
            </Typography>
            <Button 
              variant="contained" 
              color="secondary"
              sx={{ mt: '10px', color:'white' }}
              component="a"
              href="https://youtu.be/UELE6Nx0z3E"
            >
              Zum YouTube-Video
            </Button>
          </Item>
        </Grid>

        {/* Right Section: Agriculture Image */}
        <Grid xs={12} lg={4}>
          <Item sx={{ backgroundColor: "primary.dark" }}>
            <Typography fontSize={'x-large'} gutterBottom>
              Ökologische Landwirtschaft
            </Typography>
            <CardMedia
              component="img"
              image="KüheNeu.jpeg"
              alt="Kühe"
              sx={{ height: '520px', objectFit: 'cover', width: '100%' }}
            />
          </Item>
        </Grid>

      </Grid>
    </Box>
  );
}
