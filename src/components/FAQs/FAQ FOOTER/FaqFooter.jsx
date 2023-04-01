import React from 'react'
import Footer from '../../Footer/Footer'
import girlOne from './girlOne.jpg'
import girlTwo from './girlTwo.png'
import male from './male.png'
import './FaqFooter.css'
function FaqFooter() {
  return (
    <div className='Faqfooter'>
        <div className='top-foot'>
            <div className="three-images">
                <img src={girlOne} alt="" />
                <img src={male} alt="" />
                <img src={girlTwo} alt="" />
            </div>
            <div>
                <h3>Still have questions?</h3>
                <p>Can't find the Answer you are looking for? Chat Our Team.</p>
            </div>
            <button>Chat</button>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default FaqFooter