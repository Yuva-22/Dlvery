import React from 'react';
import img2 from '../../images/img2.jpeg';
import './home.css';


function home() {
  return (
    <div className='home'>
        <img className="hero-img" src={img2} alt="heroimg" />

        <div className='hero-text'>
            <h1>DLVery</h1>
            <p>"BRINGING THE WORLD TO YOUR DOORSTEP"</p>
            {/* <a href="/login" className='herobtn'>LOGIN</a> */}
            <div className='herologin'>
              <h6>Login As: </h6>
              <a href = "/invlogin" className='herobtn'>Inventory Team</a>
              <a href = "/dellogin" className='herobtn'>Delivery Team</a>
            </div>
        </div>

    </div>
  )
}

export default home;