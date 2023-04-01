import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
function Nav() {
  return (
    <div>
      <div className='nav'>
        <ul>
        <Link to='/Features'><li>Features</li></Link>
        <Link to='/Pricing'><li>Pricing</li>
        </Link>
         <Link to='/Pricing'><li>Webinars</li>
</Link>
<Link to='/Blog'> <li>Blog</li>
</Link>
        <Link to='/Pages'> <li>Pages</li>
</Link>
        </ul>
        <ul>
        <Link to='/LogIn'><li><button>Sign In</button></li></Link>
        <Link to='/SignUp'> <li><button>Sign Up</button></li>
</Link>
        </ul>
      </div>
    </div>
  )
}

export default Nav
