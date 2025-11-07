import React from 'react'
import Home from './sections/Home'
import NavBar from './components/Navbar'
import WhySection from './sections/WhySection'
import PartnerSatisfaction from './sections/PartnerSatisfaction'
import ServicesSection from './sections/ServiceSection'
import IndustriesSection from './sections/IndustriesSection'
import CallToActionSection from './sections/CallToAction'
import SubscribeSection from './sections/SubscribeSection'
import TestimonialsSection from './sections/TestimonialsSection'
import ContactUs from './sections/ContactUs'


const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <WhySection />
      <PartnerSatisfaction />
      <ServicesSection />
      <TestimonialsSection />
      <ContactUs />
    </div>
  )
}

export default App