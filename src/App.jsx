import { useState } from 'react'
import { Element } from 'react-scroll'; 
import DarkModeToggle from './components/Darkmood/Darkmoood'
import  Nav from './components/NavComponent/Nav'
import  HeroSection from './components/Hero-section/Herosection'
import  Howitwork from './components/How-It-Works/Steps'
import  steps from './components/How-It-Works/StepsData'
import  Contact from './components/ContactComponents/Contact'
import WhyUs  from './components/Why-Us/Why-Us'
import points  from './components/Why-Us/WhyUsData'
import Testimonials  from './components/Testimonials/Testimonials'
import testimonialData  from './components/Testimonials/TestimonailData'
import ChatWidget from './components/library/ChatWidget';
import Footer from './components/Footer/Footer'
import './App.css'

function App() {

  return (
    <>
         {/* Navigation */}
         <Nav />
      
      {/* Sections wrapped with Element for smooth scrolling */}
      <Element id="home" name="home">
        <HeroSection />
      </Element>

      <Element id="How it Works" name="How it Works ">
        <Howitwork steps={steps} />
      </Element>

      <Element id="Why Choose Us" name="Why Choose Us">
        <WhyUs points={points} />
      </Element>

      <Element id="Testimonials" name="Testimonials">
        <Testimonials testimonials={testimonialData} />
      </Element>

      <Element id="contact" name="contact">
        <Contact />
      </Element>

      {/* Dark Mode Toggle */}
      <DarkModeToggle />
      <ChatWidget />
      <Footer />
    </>
  )
}

export default App
