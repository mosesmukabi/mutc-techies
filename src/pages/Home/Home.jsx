import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Tittle from '../../components/Tittle/Tittle'
import Testimonials from '../../components/Testimonials/Testimonials'
function Home() {
  return (
    <>
    <Hero  />
    <Tittle mainTittle ="About us"/>
    <About />
    <Tittle mainTittle ="Testimonials"/>
    <Testimonials/>
    </>
  )
}

export default Home