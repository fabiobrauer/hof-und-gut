import React from 'react'
import './Homepage.css'
import ActionAreaCard from '../assets/Comp_ImgCard'
import ArchitkturBauernhaus from '../assets/Comp_ArchitekturBaurnhaus'
import ReitenBasicGrid from '../assets/Comp_Reiten'
import SpeisenAmHof from '../assets/Comp_SpeisenAmHof'
import Hoffest from '../assets/Comp_Hoffest'




export default function Homepage() {
  return (
    <>

    <ActionAreaCard></ActionAreaCard>
    <ArchitkturBauernhaus></ArchitkturBauernhaus>
    <SpeisenAmHof></SpeisenAmHof>
    <ReitenBasicGrid></ReitenBasicGrid>
    <Hoffest></Hoffest>


    </>
  )
}
