import React from 'react'
import Footer from '../Footer/Footer'
import AfterRealNav from './AfterRealNav/AfterRealNav'
import RealNav from './RealNav/RealNav'
import UpperNav from './UpperNav/UpperNav'

function LoginScreen() {
  return (
    <div>
        <UpperNav />
        <RealNav />
      <div className='LoginScreen'>
      <AfterRealNav  />
      </div>
        <Footer />
    </div>
  )
}

export default LoginScreen