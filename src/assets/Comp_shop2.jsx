import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Button, CardActionArea } from '@mui/material';





import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));





function Comp_Swiper() {
  return (

<Box sx={{ flexGrow: 1, mt:'10px'}}>
      <Grid container spacing={2} >

        <Grid xs={12} lg={12}>
        <Item sx={{backgroundColor:"primary.dark", mb:'10px'}}>
              <Typography fontSize={'xxx-large'} sx={{wordBreak:'break-word'}}>Besuchen sie Unseren online Shop</Typography>
              <Typography fontSize={'xx-large'}>Hier bieten wir nur unsere besten Produkte an. Sowie griechisches Olivenöl und von uns ausgewähle Weine</Typography>
          </Item>
          <Item sx={{backgroundColor:"primary.dark"}}>
                <div className="container">
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        loop={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 25.5,
                        }}
                        pagination={{ el: '.swiper-pagination', clickable: true }}
                        navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                        clickable: true,
                        }}
                        modules={[EffectCoverflow, Pagination, Navigation]}
                        className="swiper_container"
                    >
                        <SwiperSlide>
                                    <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-103.jpg"
                            alt="Olivenöl"
                          />
                       </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-106.jpg"
                            alt="Eberbach Schäfer Champagner"
                          />
                      </SwiperSlide>

                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-109.jpg"
                            alt="Bouvet Champagner"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-111.jpg"
                            alt="MOET Champagner"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-114.jpg"
                            alt="Mirival Weißwein"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-115.jpg"
                            alt="Schmidt Secco"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-117.jpg"
                            alt="Lugana Weißwein"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-120.jpg"
                            alt="Rose d`Anjou"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-123.jpg"
                            alt="Kimich Riesling"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-125.jpg"
                            alt="Metzger blanc de Noir"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-128.jpg"
                            alt="Grüner Veltliner Pfaffl"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-130.jpg"
                            alt="Hartmann Weißwein"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-133.jpg"
                            alt="Mariage Chardonay"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-137.jpg"
                            alt="Hofgeflüster Weißwein"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-139.jpg"
                            alt="Sophie Helene Rose"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-141.jpg"
                            alt="Fonterutoli Mazzei Rotwein"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-144.jpg"
                            alt="Primitivo Rotwein"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-146.jpg"
                            alt="Il grande Silenzio Rotwein"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-147.jpg"
                            alt="Fabelhaft Rotwein Nieport"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-151.jpg"
                            alt="Kiefer Spätburgunder Rot"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-153.jpg"
                            alt="Martin Schmidt Rotwein"
                          />
                        </SwiperSlide>
                       
                        

                        
                            
                                <div className="swiper-button-prev slider-arrow" style={{width:'100px'}}>
                                    <ArrowBackIcon name="arrow-back-outline" sx={{transform:{xs:'scale(1.2)',lg:'scale(3)'}}}></ArrowBackIcon>
                                </div>

                                <div className="swiper-button-next slider-arrow" style={{width:'100px'}}>
                                    <ArrowForwardIcon name="arrow-forward-outline" sx={{transform:{xs:'scale(1.2)',lg:'scale(3)'}}}></ArrowForwardIcon>
                                </div>

                                <div className="swiper-pagination">
                                </div>
                           
                        

                    </Swiper>
                </div>
          </Item>

          <Item sx={{backgroundColor:"primary.dark", mt:'10px'}}>
              <a href="https://shop-hof-und-gut.de/"><Button variant='outlined' sx={{bgcolor:'secondary.main', m:"30px", color:'white', fontSize:'xx-large'}}>Zum Shop</Button></a>
              <Typography fontSize={'xx-large'} sx={{wordBreak:'break-word'}}>in Zukunft werden wir auch Gewürze und Gewürzmischungen anbieten</Typography>
          </Item>
        </Grid>


    
    


    </Grid>
</Box>
  );
}

export default Comp_Swiper;