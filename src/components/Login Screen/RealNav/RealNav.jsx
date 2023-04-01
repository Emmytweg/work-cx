import React from 'react'
import logo from './logo.jpg'
import { Link } from 'react-router-dom'
import './RealNav.css'
function RealNav() {
  return (
    <div>
        <ul className='realnav'>
            <li>
                <img src={logo} alt="logo" />
            </li>
            <ul className='inner-realnav'>
                <Link to='/home'><li>Home</li></Link>
                <Link to='/aboutus'><li>About Us</li></Link>
                <Link to='/faqs'><li>FAQs</li></Link>
                <Link to='/contactus'><li>Contact Us</li></Link>
            </ul>
        </ul>
    </div>
  )
}

export default RealNav