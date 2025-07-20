import React from 'react'
import Layout from '../../components/Layout/Layout'
import Hero from '../../components/Hero/Hero'
import Service from '../../components/Service/Service'
import Gallery from '../../components/Gallery/Gallery'
import Testimonial from '../../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Gallery/>
      <Testimonial/>
      <Service/>
    </div>
  )
}

export default Home