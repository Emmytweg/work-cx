import React from 'react'
import image from './image.jpg'
import logo from './logo.jpg'
import { Link } from 'react-router-dom'
import './SignUpThree.css'
function SignUpThree() {
  return (
    <div className='SignUpThree'>
         <div>
                <img src={image} alt="" />
        </div>
<div>
<div>
        <img src={logo} alt="" />
            <span>Step 3</span> 
        </div>
        <div>
            
            <span>Based on your experienced, we recommend you start by:</span>
            <h1>Adding some contacts in 2 easy steps</h1>
            <span>With contacts in your CRM, you are just a step away from success</span>
            <button>Add some contacts <br /> Takes just a few minutes</button>
            <button>Invite a teammate to add some contacts <br />
Take less than a minute.</button>
        </div>
        <Link to='/dashboardone'>        <h4> <u>I'll try this later, explore CX365</u></h4>
</Link>
</div>
    </div>
  )
}

export default SignUpThree