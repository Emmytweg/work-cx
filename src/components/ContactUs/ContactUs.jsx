import React from 'react'

import './ContactUs.css'
function ContactUs() {
  return (
    <div className='contact-con'>
      
        <form action="" className='form'>
            <label htmlFor="">Contact Us</label>
            <input type="text" placeholder='Full Name' required />
            <input type="email" placeholder='Email Address' required />
            <textarea name="Description" id="" cols="30" rows="10" placeholder='Description'></textarea>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ContactUs