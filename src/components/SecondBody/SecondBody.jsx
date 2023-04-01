import React from 'react'
import logo from './logo.jpg'
import customer from './customer.jpg'
import './SecondBody.css'
import { Link } from 'react-router-dom'
function SecondBody() {
  return (
    <div className='main-con'>
      <div className='first-con'>
        {/* container containing the logo and some words */}
        <img src={logo} alt="logo" />
        <h1>Multi <br /> Customer Relationship Management</h1>
        <p>We are focused on changing the way <br /> people do work</p>
       <Link to='/SignUp'> <button>Get Started</button></Link>
      </div>
      <div className='second-con'>
        {/* Cartoon */}
        <img src={customer} alt="cartoon" />
      </div>
    </div>
  )
}

export default SecondBody
