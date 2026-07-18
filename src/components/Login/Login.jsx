import React from "react";
import "./Login.css";
import {Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../Context/Context.jsx";
 import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.jsx";

const Login = () => {
    const {closeLogin} = useContext(LoginContext);
      const navigate = useNavigate();

      const handleClose = () => {
     closeLogin()
    navigate("/"); // Home route path
  };
  return (
    <div className="login-signup">

      <div className="loginsignup-container">

        <button 
          className="close-btn"
          onClick={handleClose}
        >

          ✖
        </button>

        <h1>Sign Up</h1>

        <div className="loginsignup-field">
          {/* <input 
            type="text" 
            placeholder="Your Name"
          /> */}

          <input 
            type="email" 
            placeholder="Email Address"
          />

          <input 
            type="password" 
            placeholder="Password"
          />
        </div>

 <RouterLink to='/dashboard'>
  <button className="btn-continue">
          Continue
        </button>
          </RouterLink>
       

        <p className="loginsignup-login">
          Already have an account?
          <span> Login Here</span>
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" />

          <p>
            By continuing, I agree to the terms of use and privacy policy.
          </p>
        </div>

      </div>

    </div>
  );
};

export default Login;
