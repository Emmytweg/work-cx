import React from 'react'
import DashboardOneSideBar from '../DashboardOne/DashboardOneSideBar/DashboardOneSideBar'
import DealContent from './DealsContents/DealContent'
import './Deal.css'
function Deal() {
  return (
    <div className='Deal'>
      <DashboardOneSideBar />
      <DealContent />
    </div>
  )
}

export default Deal
