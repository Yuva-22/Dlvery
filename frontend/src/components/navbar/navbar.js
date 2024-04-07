import React from 'react';
import './navbar.css';

function navbar() {
  return (
    <div className='navbar'>
        <h1 className='navbar-logo'>DLVery</h1>
        <ul className='nav-menu'>
           {/* <li className='nav-links'>Home</li>
           <li className='nav-links'>Statistics</li>
           <li className='nav-links'>Products</li> */}
           <a href="/invlogin/home" className='nav-links'>Home</a>
           <a href="/invlogin/home" className='nav-links'>Statistics</a>
           <a href="/invlogin/products" className='nav-links'>Products</a>
        </ul>
    </div>
  )
}

export default navbar;