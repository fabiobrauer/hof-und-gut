import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    
    <footer className='Footer'>

      <Link to={'/'}><img src="SVGLogo3.svg" alt="Logo" width={'230px'} height={'100%'} className='Logo'/></Link>
      
    </footer>
  )
}
