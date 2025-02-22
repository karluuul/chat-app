import React, { useState } from 'react'
import './login.css';
import assets from '../../assets/assets.js';
import { useNavigate } from 'react-router-dom';
import navigateTo from '../../utils/navigate.js';

const Login = () => {

  const [currState, setCurrState] = useState("Sign up");
  const navigate = useNavigate();
 

  return (
    <div className='login'> 
      <img src={assets.logo_big} alt='' className='logo' />
      <form className="login-form">
        <h2>{currState}</h2>
        {currState === "Sign up" ? <input type="text" className="form-input" placeholder='Username' required /> : null}
        <input type="email" className="form-input" placeholder='Email Address'required/>
        <input type="password" className="form-input" placeholder='Password' required/>
        <button 
          type='submit' 
          onClick={() => navigateTo(navigate, currState === "Login" ? "/chat" : "")}
         >
          {currState === "Sign up" ? "Create Account" : "Login"}
        </button>
        <div className="login-terms">
          <input type='checkbox' />
          <p>Agree to the terms of use and privacy policy</p>
        </div>
        <div className="login-forgot">
          {
            currState === "Sign up"
            ?
            <p className="login-toggle">Already have an account? <span onClick={()=>setCurrState("Login")}>Login</span> </p>
            :
            <p className="login-toggle" onClick={()=>setCurrState("Sign up")} style={{ color: "#077EFF", cursor: "pointer", fontWeight: "500" }}> Create an account  </p>
          }
        </div>
      </form>
    </div>
  )
}

export default Login