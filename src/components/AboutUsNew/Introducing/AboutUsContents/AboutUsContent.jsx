import React from 'react'
import customer from './customer.jpg'
import './AboutUsContent.css'
function AboutUsContent() {
  return (
    <div className='aboutuscontent'>
        <div>
            <img src={customer} alt="" />
        </div>
        <div>
            <h3>About us</h3>
            <p>CX 365 is for growing businesses all over the world who want to manage  all their company’s relationships and  interactions with both customers and potential customers, improve business relationships, growth, track customers 
information and support request.</p>
        </div>
    </div>
  )
}

export default AboutUsContent