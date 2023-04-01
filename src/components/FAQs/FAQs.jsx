import React from 'react'
import Faqscontents from './FaQs/Faqscontents'
import UpperContactUs from '../RealContactUs/UpperContactUs'
import RealNav from '../Login Screen/RealNav/RealNav'
import { questions } from '../../Questions'
import FaqFooter from './FAQ FOOTER/FaqFooter'
function FAQs() {
  return (
    <div>
        <UpperContactUs />
        <RealNav />
        <Faqscontents  questions={questions}  />
        <FaqFooter />
    </div>
  )
}

export default FAQs