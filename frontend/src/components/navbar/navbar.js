import React from 'react';
import './navbar.css';

function navbar() {
  return (
    <div className='navbar'>
        <h1 className='navbar-logo'>DLVery</h1>
        <ul className='nav-menu'>
           <li className='nav-links'>Home</li>
           <li className='nav-links'>Statistics</li>
           <li className='nav-links'>Products</li>
        </ul>
    </div>
  )
}

export default navbar;