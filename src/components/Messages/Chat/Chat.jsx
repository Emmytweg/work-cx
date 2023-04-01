import React from 'react'
import './Chat.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faBell, faGear } from '@fortawesome/free-solid-svg-icons'
function Chat() {
  return (
    <div>
        <div className="searchBar">
            <div className="searchInput">
                <input type="text" placeholder='Search...' />
                <FontAwesomeIcon icon={faSearch} className='searchIcon' />
            </div>
            <FontAwesomeIcon icon={faBell} className='bell' /> <FontAwesomeIcon icon={faGear} className='notification' />
        </div>
        <div className='chatContent'>
            
        </div>
    </div>
  )
}

export default Chat