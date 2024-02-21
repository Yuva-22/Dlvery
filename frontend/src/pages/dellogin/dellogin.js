import React from 'react';
import img3 from '../../images/img4.avif';
import './dellogin.css';

function dellogin() {
  return (
      <div className='delllogin'>
      <img className="login-img" src={img3} alt="loginimg" />

      <div className='dell-loginbox'>
            <form>
              <h1>DELIVERY TEAM LOGIN</h1>
              <label>EMAIL</label>
              <br />
              <input type="email" placeholder="Enter Email" required />
              <br />
              <label>PASSWORD</label>
              <br />
              <input type="password" placeholder="Enter Password" required />
              <br />
              <button type="submit" className='loginbtn'>LOG IN</button>
            </form>
      </div>
    </div>
  )
}

export default dellogin