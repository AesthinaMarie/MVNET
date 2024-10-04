import React from 'react'
import Navbar from '../components/Navbar.jsx'
import HeroSection from '../components/hero.jsx'
import Feature from '../components/feature.jsx'

function homepage() {
  return (
    <>
    <Navbar></Navbar>
    <div className='max-w-7xl mx-auto pt-20 px-6'>
    <HeroSection/>
    <Feature/>
    </div>
     </>
  )
}

export default homepage