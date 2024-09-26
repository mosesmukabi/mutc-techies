import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../../components/About/About'
import Tittle from '../../components/Tittle/Tittle'
function Home() {
  return (
    <>
    <Hero  />
    <Tittle mainTittle ="About us"/>
    <About />
    <Tittle mainTittle ="Testimonials"/>
    </>
  )
}

export default Home