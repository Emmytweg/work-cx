import React from 'react'
import DashboardOneSideBar from './DashboardOneSideBar/DashboardOneSideBar'
import './DashBoardOne.css'
import HomeContents from './HomeContents/HomeContents'
function DashboardOne() {
  return (
    <div className='dashboardOne'>
        <DashboardOneSideBar />
        <HomeContents />
    </div>
  )
}

export default DashboardOne