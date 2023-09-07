import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    
    <footer className='Footer'>

      <Link to={'/'}><img src="SVGLogo.svg" alt="Logo" width={'130px'} height={'100%'} className='Logo'/></Link>
      
    </footer>
  )
}
