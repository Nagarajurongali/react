import React from 'react';
import {Link} from 'react-router-dom';
import './header.css'
function Header() {
  return (
    <div>
      <ul>
      <Link to='/' > <li>Home</li></Link>
      <Link to='/about' > <li>About</li></Link>
      <Link to='/services' > <li>Services</li></Link>
      <Link to='/contact' > <li>Contact</li></Link>
      </ul>
    </div>
  )
}

export default Header