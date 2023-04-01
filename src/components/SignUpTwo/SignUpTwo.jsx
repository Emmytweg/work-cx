import React from 'react'
import question from './question.jpg'
import logo from './logo.jpg'
import { Link } from 'react-router-dom'
import './SignUpTwo.css'
function SignUpTwo() {
  return (
    <div className='SignUpTwo'>
        <div>
            <img src={question} alt="" />
        </div>
        <div>
            <img src={logo} alt="" />
            <span>Step 2</span>
            <div className='SignUpTwoCon'>
                <span>Nice to meet you <b>UserName</b> </span>
                <h1 >What industry are you in?</h1>
                <form action="">
                    <label htmlFor="">
                        Search Industries... <br /> <br />
                        <input type="text" placeholder='Type to search...' />
                        <Link to='/signupthree'><button>Next</button></Link>
                    </label>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUpTwo