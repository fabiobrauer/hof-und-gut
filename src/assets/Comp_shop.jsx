import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { motion } from 'framer-motion';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Comp_shop() {
  return (
    <Grid container sx={{mt:'10px', mb:'10px'}}>
        <Grid lg={12} xs={12}>
          <Item sx={{backgroundColor:"primary.dark"}}>
          
          <motion.div className='carousell' style={{maxWidth:'80%', border:'1px solid red', margin:'0 auto'}}>
            <motion.div drag='x' dragConstraints={{}} style={{display:'flex', justifyContent:'center', gap:'4em', cursor:'grab'}}>

                  <Card sx={{ minWidth: 500 }}>
                  <CardActionArea>
                      <CardMedia
                        component="img"
                        width={"100%"}
                        image="ProduktBild-01.jpg"
                        alt="green iguana"
                      />
                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          beschreibung
                        </Typography>
                      </CardContent>
                    </CardActionArea>
                  </Card>



                    <Card sx={{ minWidth: 500 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image="ProduktBild-15.jpg"
                          alt="green iguana"
                        />
                        <CardContent>

                          <Typography variant="body2" color="text.secondary">
                          beschreibung
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>



                        <Card sx={{ minWidth: 500 }}>
                          <CardActionArea>
                            <CardMedia
                              component="img"
                              image="ProduktBild-36.jpg"
                              alt="green iguana"
                            />
                            <CardContent>
                              <Typography variant="body2" color="text.secondary">
                              beschreibung
                              </Typography>
                            </CardContent>
                          </CardActionArea>
                        </Card>


                    <Card sx={{ minWidth: 500 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image="ProduktBild-40.jpg"
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                          beschreibung
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>

                    <Card sx={{ minWidth: 500 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image="ProduktBild-40.jpg"
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                          beschreibung
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>


                    <Card sx={{ minWidth: 500 }}>
                      <CardActionArea>
                        <CardMedia
                          component="img"
                          image="ProduktBild-40.jpg"
                          alt="green iguana"
                        />
                        <CardContent>
                          <Typography variant="body2" color="text.secondary">
                          beschreibung
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>


                  </motion.div>
              </motion.div>             
          </Item>
        </Grid>




  </Grid>
  )
}

