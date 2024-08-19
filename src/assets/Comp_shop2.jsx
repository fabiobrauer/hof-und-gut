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
        <Item sx={{backgroundColor:"primary.dark", mb:'15px'}}>
              <Typography sx={{wordBreak:'break-word',fontSize:{xs:"x-large", lg:"x-large"}}}>Besuchen Sie unseren Onlineshop</Typography>
              <Typography sx={{fontSize:{xs:'small', xl:"xs"}}}>Hier bieten wir nur unsere besten Produkte an, sowie griechisches Olivenöl, Produkte aus unserer Landwirtschaft und von uns ausgewähle Weine</Typography>
          </Item>
          <Item sx={{backgroundColor:"primary.dark"}}>
                <Box className="container" sx={{width:{xs:'100%', lg:'50%', margin:'0 auto'}}}>
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
                          <a href="https://shop-hof-und-gut.de/collections/olivenol/products/olivenol"> 
                          <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-103.jpg"
                            alt="Olivenöl"
                          /> </a>
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
{/*                         <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-114.jpg"
                            alt="Mirival Weißwein"
                          />
                        </SwiperSlide> */}
                        <SwiperSlide>
                        <a href="https://shop-hof-und-gut.de/collections/prosecco-champagner/products/schmidt-secco-weiss">
                          <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-115.jpg"
                            alt="Schmidt Secco"
                          /> </a>
                        </SwiperSlide>
                        <SwiperSlide>
                       <a href="https://shop-hof-und-gut.de/products/bulgarini-lugana">
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-117.jpg"
                            alt="Lugana Weißwein"
                          /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                       
                       <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-120.jpg"
                            alt="Rose d`Anjou"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                        <a href="https://shop-hof-und-gut.de/collections/weine/products/bla-bla"> 
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-123.jpg"
                            alt="Kimich Riesling"
                          /></a> 
                        </SwiperSlide>
                        <SwiperSlide>
                        <a href="https://shop-hof-und-gut.de/collections/weine/products/metzger-blanc-de-noir">
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-125.jpg"
                            alt="Metzger blanc de Noir"
                          /></a>
                        </SwiperSlide>
{/*                         <SwiperSlide>
                          <a href="https://shop-hof-und-gut.de/collections/weine/products/gruner-veltiner-pfaffl">
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-128.jpg"
                            alt="Grüner Veltliner Pfaffl"
                          /></a>
                        </SwiperSlide> */}
                        <SwiperSlide>
                          <a href="https://shop-hof-und-gut.de/collections/weine/products/hartmann-sauvignon-blanc">
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-130.jpg"
                            alt="Hartmann Weißwein"
                          /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a href="https://shop-hof-und-gut.de/collections/weine/products/mariage-chardonay-weissburgnuder">
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-133.jpg"
                            alt="Mariage Chardonay"
                          /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a href="https://shop-hof-und-gut.de/collections/weine/products/hofgefluster">
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-137.jpg"
                            alt="Hofgeflüster Weißwein"
                          /></a>
                        </SwiperSlide>
{/*                         <SwiperSlide>
                          <a href="https://shop-hof-und-gut.de/collections/weine/products/sophie-helene-rose">
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-139.jpg"
                            alt="Sophie Helene Rose"
                          /></a>
                        </SwiperSlide> */}
                        <SwiperSlide>
                          <a href="https://shop-hof-und-gut.de/collections/weine/products/fonterutoli-mazzei-2019">
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-141.jpg"
                            alt="Fonterutoli Mazzei Rotwein"
                          /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-144.jpg"
                            alt="Primitivo Rotwein"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <a href="https://shop-hof-und-gut.de/collections/weine/products/il-grande-silenzio">
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-146.jpg"
                            alt="Il grande Silenzio Rotwein"
                          /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a href="https://shop-hof-und-gut.de/collections/weine/products/fabelhaft">
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-147.jpg"
                            alt="Fabelhaft Rotwein Nieport"
                          /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a href="https://shop-hof-und-gut.de/collections/weine/products/wein1">
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-151.jpg"
                            alt="Kiefer Spätburgunder Rot"
                          /></a>
                        </SwiperSlide>
                        <SwiperSlide>
                          <a href="https://shop-hof-und-gut.de/collections/weine/products/martin-schmidt-spatburgunder">
                        <CardMedia sx={{width:"250px", height:"450px", borderRadius:'2em', margin:'0 auto'}}
                            component="img"
                            image="ProduktBild-153.jpg"
                            alt="Martin Schmidt Rotwein"
                          /></a>
                        </SwiperSlide>
                       

                                <div className="swiper-button-prev slider-arrow" style={{width:'100px'}}>
                                    <ArrowBackIcon name="arrow-back-outline" sx={{transform:{xs:'scale(1.2)',lg:'scale(2)'}}}></ArrowBackIcon>
                                </div>

                                <div className="swiper-button-next slider-arrow" style={{width:'100px'}}>
                                    <ArrowForwardIcon name="arrow-forward-outline" sx={{transform:{xs:'scale(1.2)',lg:'scale(2)'}}}></ArrowForwardIcon>
                                </div>

                                <div className="swiper-pagination">
                                </div>

                    </Swiper>
                </Box>
          </Item>

          <Item sx={{backgroundColor:"primary.dark", mt:'15px', mb:'10px'}}>
              <a href="https://shop-hof-und-gut.de/"><Button variant='outlined' sx={{bgcolor:'secondary.main', m:"30px", color:'white'}}>Zum Shop</Button></a>
          </Item>
        </Grid>


    
    


    </Grid>
</Box>
  );
}

export default Comp_Swiper;