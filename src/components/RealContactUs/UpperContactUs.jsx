import React from 'react'
import './UpperContactUs/UpperContactUs.css'
import { Link } from 'react-router-dom'
function UpperContactUs() {
  return (
    <div className='UpperContactUs'>
        <h2>Introducing CX-365</h2>
        <div>
            <Link to='/LogIn'><button>Sign In</button></Link>
            <Link to='/SignUp'><button>Sign Up</button></Link>
        </div>
    </div>
  )
}

export default UpperContactUs