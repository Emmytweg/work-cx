import React from 'react'
import logo from './logo.jpg'
import profilePic from './profilePic.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome , faPeopleGroup, faPeopleArrows, faPlaceOfWorship, faCalendar, faMessage, faListCheck, faCreditCard, faArrowsSpin, faComments, faCircleQuestion} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './DashboardOneSideBar.css'
function DashboardOneSideBar() {
  return (
   <div className="beforeSideBar">
     <div className='dashBoardSideBar'>
        <div className="sideBarLogo">
            <img src={logo} alt="" />
        </div>
        <div className="sideBarFeatures">
            <ul className="profile-info">
            <li> 
                <img src={profilePic} alt="" /> 
                </li>   {/*  /*This is a container for profile picture */ }
              <ul>
              <li>
                    Tonye JohnSon {/* Container for name */}
                </li>
                <li>
                    tonyejognson@example.com  {/* Container for email */}
                </li>
              </ul>
            </ul>
            
            <ul className="lowerFeatures">
              <Link to='/dashboardone'>
              <li>
                    <FontAwesomeIcon icon={faHome} className='sideBarIcon' /> Home
                </li>
                </Link>
               
               <Link>
               <li>
                    <FontAwesomeIcon icon={faPeopleGroup} className='sideBarIcon' /> Employees
                </li>
                </Link>
               
                
                <Link to='/customers'>
                <li>
                    <FontAwesomeIcon icon={faPeopleArrows} className='sideBarIcon' /> Customers
                </li></Link>
                
                <Link to='/deals'>
                <li>
                    <FontAwesomeIcon icon={faPlaceOfWorship} className='sideBarIcon' /> Deals
                </li></Link>

                <Link>
                <li>
                    <FontAwesomeIcon icon={faCalendar} className='sideBarIcon' /> Calendar
                </li>
                </Link>

               <Link to='/message'>
               <li>
                    <FontAwesomeIcon icon={faMessage} className='sideBarIcon' /> Messages
                </li>
               </Link>
              
                <Link >
                <li>
                    <FontAwesomeIcon icon={faListCheck} className='sideBarIcon' /> Tasks
                </li></Link>

                <Link>
                <li>
                    <FontAwesomeIcon icon={faCreditCard} className='sideBarIcon' /> Upgrade Subscription
                </li></Link>
            </ul>
        </div>
        <hr className="the-line" />
        <div className="sideBarSupport">
            <ul>
            <Link>
            <li>
                    <FontAwesomeIcon icon={faArrowsSpin} className='sideBarIcon' /> Share
                </li>
                </Link>
            <Link>
            <li>
                    <FontAwesomeIcon icon={faComments} className='sideBarIcon' /> Support
                </li>
                </Link>
               
              <Link>
              <li>
                    <FontAwesomeIcon icon={faCircleQuestion} className='sideBarIcon' /> Need Help?
                </li>
              </Link>
              </ul>
        </div>
    </div>
   </div>
  )
}

export default DashboardOneSideBar