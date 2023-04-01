import React from 'react'
import eclipse from './eclipse.png'
import './Nextone.css'
function Nextone() {
  return (
    <div className='aims-all'>
        <img src={eclipse} alt="" />
        <h1>Here's how our CRM can <br /> help you</h1>
        <ul className='aims'>
            <li>Increase your lead-to-deal</li>
            <li>Get a 360 degree view of your business</li>
            <li>Quickly get to see your next-best actions</li>
            <li>Track important sales and marketing opportunities</li>
            <li>Track your business with you everywhere you go</li>
        </ul>
    </div>
  )
}

export default Nextone