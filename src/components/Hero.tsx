import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Footer from "@/components/Footer";

 
const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat bg-[url(/image.avif)] bg left lg:bg-[15%] bg-cover'
    style={{backgroundSize:"35%"}}>

        <Navbar/>
        <Header/>
        <Footer/>
      
    </div>
  )
}

export default Hero
