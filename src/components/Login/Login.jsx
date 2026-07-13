import React from "react";
import "./Login.css";
import { useContext } from "react";
import { LoginContext } from "../../Context/Context.jsx";

const Login = () => {
    const {closeLogin} = useContext(LoginContext);
  return (
    <div className="login-signup">

      <div className="loginsignup-container">

        <button 
          className="close-btn"
          onClick={closeLogin}
        >
          ✖
        </button>

        <h1>Sign Up</h1>

        <div className="loginsignup-field">
          <input 
            type="text" 
            placeholder="Your Name"
          />

          <input 
            type="email" 
            placeholder="Email Address"
          />

          <input 
            type="password" 
            placeholder="Password"
          />
        </div>

        <button>
          Continue
        </button>

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
