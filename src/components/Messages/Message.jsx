import React from 'react'
import DashboardOneSideBar from '../DashboardOne/DashboardOneSideBar/DashboardOneSideBar'
import './Message.css'
import Chat from './Chat/Chat'
function Message() {
  return (
    <div className='Message'>
        <DashboardOneSideBar />
        <Chat />
    </div>
  )
}

export default Message