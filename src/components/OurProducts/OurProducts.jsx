import React from 'react'
import arrow from './Arrow.png'
import './OurProducts.css'
function OurProducts() {
  return (
    <div className='our-product'>
        <h1>Our Products</h1>
        <div className="products">
            {/* beginning of the first product content */}
            <div className="first-product">
                <ul>
                    <li>Unifies Sales platform</li>
                </ul>
               <p>
               To increase your sales success rate, we help you create a sales procedure.
               </p>
            </div> 
            {/* closing */}
            <img src={arrow} alt="" />
             {/* beginning of the second product content */}
             <div className="second-product">
                <ul>
                    <li>All in one suite</li>
                </ul>
                <p>
                We offer you at the tools necessary for the management and growth of your business
                </p>
            </div> 
            {/* closing */}
            <img src={arrow} alt="" />
             {/* beginning of the third product content */}
             <div className="second-product">
                <ul>
                    <li>Help Desk management</li>
                </ul>
                <p>
                We offer you most automations and prompt customer support with our live chat services
                </p>
            </div> 
            {/* closing */}
        </div>
    </div>
  )
}

export default OurProducts