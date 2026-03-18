import React from 'react'
import HeroHome from '../components/hero-home.jsx'
import AboutusHome from '../components/aboutus-home.jsx'
import ServiceHome from '../components/service-home.jsx'
import FaqHome from '../components/faq-home.jsx'
import ContactusHome from '../components/contactus-home.jsx'

function home() {
  return (
    <>
        <HeroHome/>
        <AboutusHome/>
        <ServiceHome/>
        <FaqHome/>
        <ContactusHome/>
    </>
  )
}

export default home