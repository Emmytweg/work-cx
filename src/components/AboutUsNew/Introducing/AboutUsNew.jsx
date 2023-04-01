import React from 'react'
import AboutUsContent from './AboutUsContents/AboutUsContent'
import AboutUsNav from './AboutUsNav/AboutUsNav'
import Introducing from './Introducing'

function AboutUsNew() {
  return (
    <div>
     <Introducing />
     <AboutUsNav /> 
     <AboutUsContent />  
    </div>
  )
}

export default AboutUsNew