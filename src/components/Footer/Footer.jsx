import React from 'react'
import './Footer.css'
import cx from './CX.png'
import instagram from './insta.png'
import tweeter from './tweet.png'
import facebook from './fb.png'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='all-footer'>
    <div className='footer'>
        <div className=" unmark footer-1">
            <img src={cx} alt="" />
            <ul className='footer-1-logo'>
                <li> <img src={facebook} alt="fb logo" /> </li>
                <li> <img src= {tweeter} alt="tweeter logo" /></li>
                <li> <img src={instagram} alt="ig logo" /></li>
            </ul>

        </div>
        <div className="unmark exempt footer-2">
            <h3>Quick Link</h3>
            <ul>
                <Link to='/home'><li>Home</li>
</Link>
            <Link to='/howitworks'><li>How it works</li></Link>
            <Link to='/aboutus'><li>About Us</li></Link>
            <Link to='/signup'> <li>Get Signed Up</li></Link>
            <Link to='/LogIn'><li>Login</li></Link>
            </ul>
        </div>
        <div className=" unmark exempt footer-3"> 
        <h1>Support</h1>
        <ul>
            <Link to='/faqs'><li>FAQs</li>
</Link>
<Link to='/help'><li>Help</li>
</Link>
            <li>Blogs</li>
        </ul>
        </div>
        <div className="unmark exempt footer-4">
            <h1>Connect with us</h1>
            <ul>
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Twitter</li>
            </ul>
        </div>
    </div>
    <hr />
    <small>Copyright © 2023 CX-365 </small>
    </div>
  )
}

export default Footer