import React from 'react'
import devicemessage from './device-message.jpg'
import './RealContactUsContent.css'
function RealContactUsContent() {
  return (
    <div className='RealContactUsContent '>
        <div>
            <div>
            <h1>Get in Touch</h1>
            <img src={devicemessage} alt="" />
            </div>
            <small>
            Our customers’ satisfaction is our upmost priority! Our support service is available round the clock to assist with any question you may have regarding our platform.
            </small>
        </div>
        
        <form action="">
            <label htmlFor="">
                Email <br /> <br />
                <input type="email" placeholder='Enter your email address' />
            </label> <br /> <br />
            <label htmlFor="">
                Phone Number <br /> <br />
                <input type="number" placeholder='Enter your Phone Number' /><br /><br />
            </label>
            <label htmlFor="">
                Message <br /> <br />
                <textarea name="" id="" cols="30" rows="10" placeholder='Content of your message'></textarea>
            </label>
            <label htmlFor="">
                <button>Send</button>
            </label>
        </form>
    </div>
  )
}

export default RealContactUsContent