import React from 'react'
import logo from './logo.jpg'
import './AboutUsNav.css'
import { Link } from 'react-router-dom'
function AboutUsNav() {
  return (
    <div className='aboutusnav'>
        <ul>
            <li><img src={logo} alt="" /> </li>
        </ul>
        <ul className='inner-aboutusnav'>
           <Link to='/'><li>Home</li> </Link> 
           <Link to='/aboutus'><li>About Us</li> </Link> 
           <Link to='/faqs'><li>FAQs</li> </Link> 
           <Link to='/contactus'><li>Contact Us</li> </Link> 
        </ul>
        <ul >
            <Link to='/SignUp'><li><button>Sign Up</button></li></Link>
            <Link to='/LogIn'><li><button>Log In</button></li></Link>
        </ul>
    </div>
  )
}

export default AboutUsNav