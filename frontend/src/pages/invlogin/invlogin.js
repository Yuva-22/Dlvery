import React, { useState } from 'react';
import img3 from '../../images/img4.avif';
import './invlogin.css';
import { useNavigate } from 'react-router-dom';

function Invlogin() {

  const navigate = useNavigate();

  const[invemail,setInvemail] = useState(' ');
  const[invpassword,setInvpassword] = useState('');

  const handleInvsubmit = async(e) => {
    e.preventDefault();
    
    try
    {
      const response = await fetch('http://localhost:8081/invlogin',{
        method:'POST',

        headers:{
          'content-Type':'application/json'
        },
        body: JSON.stringify({email:invemail,password:invpassword })
      });

      const data = await response.json();

      if(response.ok)
      {
        navigate('/invlogin/home');
      }
      else
      {
        alert("Invalid Credentials");
      }
    }
    catch(error)
    {
      console.log("Error: ",error);
      alert("Error Occured");
    }
  }


  return (
    <div className='invlogin'>
      <img className="login-img" src={img3} alt="loginimg" />

      <div className='inv-loginbox'>
            <form onSubmit={handleInvsubmit}>
              <h1>INVENTORY TEAM LOGIN</h1>
              <label>EMAIL</label>
              <br />
              <input type="email" placeholder="Enter Email" value={invemail} onChange={(e)=> setInvemail(e.target.value)} required />
              <br />
              <label>PASSWORD</label>
              <br />
              <input type="password" placeholder="Enter Password" value={invpassword} onChange={(e)=> setInvpassword(e.target.value)} required />
              <br />
              <button type="submit" className='loginbtn'>LOG IN</button>
            </form>
      </div>
    </div>
  )
}

export default Invlogin