import React from 'react'
import './AfterRealNav.css'
import { Link } from 'react-router-dom'
import squares from './squares.png'
import { useReducer } from 'react'
import { ACTIONS } from '../../../Reducer'
import { reducer } from '../../../Reducer'
function AfterRealNav(  ) {
const [state, dispatch] = useReducer(reducer, {show : false})

function showPassword() {
    dispatch({type : ACTIONS.REVEALPASSWORD})
}
  
  return (

    <div className='all-conta'>
        <div className="first-conta">
            <h1>Welcome Back</h1>
            <p>Getting you back  into your CRM should only take a minute.
Please enter your details to gain access.</p>
<img src={squares} alt="" />
        </div>
        <div className="second-conta">
            <form action="">
                <label htmlFor="">
                    Email <br />
                    <input type="email"    placeholder='Enter your email address'  className='unchange'/>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg'  >
<path d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z" stroke="#222222" strokeOpacity="0.5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9" stroke="#222222" strokeOpacity="0.5" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </label>
                <label htmlFor="">
                    Password <br />
                    <input type={state.show ? 'text' : 'password'} placeholder='Enter your password'   className='unchange' />
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='svg' onClick={showPassword} >
<path d="M6 10V8C6 4.69 7 2 12 2C17 2 18 4.69 18 8V10" stroke="#222222" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 18.5C13.3807 18.5 14.5 17.3807 14.5 16C14.5 14.6193 13.3807 13.5 12 13.5C10.6193 13.5 9.5 14.6193 9.5 16C9.5 17.3807 10.6193 18.5 12 18.5Z" stroke="#222222" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M17 22H7C3 22 2 21 2 17V15C2 11 3 10 7 10H17C21 10 22 11 22 15V17C22 21 21 22 17 22Z" stroke="#222222" strokeOpacity="0.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</svg>

                </label>
                        <div className='resetPassword'>
                               {/* remember me and forgot password container */}
                    <label htmlFor="" className="remember-me">
                        <input type="checkbox" />
                        Remember Me
                    </label>
                    <label htmlFor="">
                        Forgot Password? <Link>Reset Password</Link> 
                    </label>

                        </div>
                 
                    <label htmlFor="">
                        <button className='login-btn'>Login</button>
                    </label>
                    <label htmlFor="">Don't have an account? <Link to='/SignUp'>Sign Up</Link></label>
                
            </form>
        </div>
    </div>
  )
}

export default AfterRealNav