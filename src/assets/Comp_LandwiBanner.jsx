import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';




export default function LandwiBanner() {
  return (
    <Card sx={{backgroundColor: "rgb(80, 140, 103)", mb:"10px", display:{xs:'none', md:'block'}}}>
      <CardActionArea>
      <h1>Landwirtschaft bei Hof&Gut</h1>
        <CardMedia
          component="img"
          image="LandWiBanner_Desk.jpg"
          alt="Banner Landwirtschaft"
        />

      </CardActionArea>
    </Card>
  );
}