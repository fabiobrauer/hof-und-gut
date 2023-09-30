import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



export default function ActionAreaCard() {
  return (
    <Card sx={{backgroundColor: "rgb(80, 140, 103)"}}>
      <CardActionArea>
      <h1>Willkommen bei Hof&Gut</h1>
        <CardMedia
          component="img"
          height="960"
          image="Banner.gif"
          alt="Bauernhaus"
        />
        <CardContent sx={{ display:{ xs:'none', xl:'block'}}}>
          <Typography variant="body2" color="white" fontSize="x-large" className='SubscriptionText'>
            Hof&Gut Jesteburg liegt am Rande des Naturparks Lüneburger Heide. Die anspruchsvoll sanierte und modernisierte historische Hofstelle umfasst 85 Hektar und wurde 2007 unter der Bezeichnung Hof&Gut Jesteburg zu neuem Leben erweckt.
            <a href="#">weiterlesen </a>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}