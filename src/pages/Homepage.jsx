import React from 'react'
import './Homepage.css'
import ActionAreaCard from '../assets/Comp_ImgCard'
import ArchitkturBauernhaus from '../assets/Comp_ArchitekturBaurnhaus'
import ReitenBasicGrid from '../assets/Comp_Reiten'
import SpeisenAmHof from '../assets/Comp_SpeisenAmHof'
import Hoffest from '../assets/Comp_Hoffest'
import Comp_Swiper from '../assets/Comp_shop2'




export default function Homepage() {
  return (
    <>

    <ActionAreaCard></ActionAreaCard>
    
    <SpeisenAmHof ></SpeisenAmHof> 
    <ReitenBasicGrid></ReitenBasicGrid>
    <Comp_Swiper></Comp_Swiper>
    <Hoffest></Hoffest>
    <ArchitkturBauernhaus></ArchitkturBauernhaus>


    </>
  )
}
