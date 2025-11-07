import React from 'react'
import Home from './sections/Home'
import NavBar from './components/Navbar'
import WhySection from './sections/WhySection'
import PartnerSatisfaction from './sections/PartnerSatisfaction'
import ServicesSection from './sections/ServiceSection'
import TestimonialsSection from './sections/TestimonialsSection'
import ContactUs from './sections/ContactUs'


const App = () => {
  return (
    <main className='bg-black'>
      <NavBar />
      <section id="home"><Home /></section>
      <section id="why"><WhySection /></section>
      <section id="partners"><PartnerSatisfaction /></section>
      <section id="services"><ServicesSection /></section>
      <section id="testimonials"><TestimonialsSection /></section>
      <section id="contact"><ContactUs /></section>
    </main>
  )
}

export default App