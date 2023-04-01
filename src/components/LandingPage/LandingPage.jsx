import React from 'react'
import ContactUs from '../ContactUs/ContactUs'
import Footer from '../Footer/Footer'
import Nav from '../HeaderNav/Nav'
import Nextone from '../NextOne/Nextone'
import OurProducts from '../OurProducts/OurProducts'
import SecondBody from '../SecondBody/SecondBody'
import Whywork from '../WhyWork/Whywork'
import './LandingPage.css'
function LandingPage() {
  return (
    <div className='LandingPage'>
      <Nav />
      <SecondBody />
      <Whywork />
      <Nextone />
      <OurProducts />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default LandingPage
