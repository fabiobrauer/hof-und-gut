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

export default function EmtyGrid() {
  return (
    <Box sx={{ flexGrow: 1, mt:'10px'}}>
      <Grid container spacing={2} >
        <Grid xs={12} lg={4}>
                <Item sx={{backgroundColor:"primary.dark", height:'650px'}}> 
                </Item>
        </Grid>
        <Grid xs={12} lg={8}>
          <Item sx={{backgroundColor:"primary.dark"}}>
          </Item>
        </Grid>
        <Grid xs={12} lg={7}>
          <Item sx={{backgroundColor:"primary.dark"}}>
            
            </Item>
        </Grid>
        <Grid xs={12} lg={5}>
          <Item sx={{backgroundColor:"primary.dark"}}>

          </Item>
        </Grid>


      </Grid>
    </Box>
  );
}