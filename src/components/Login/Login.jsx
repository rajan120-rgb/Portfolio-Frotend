import React, { useState } from "react";
import "./Login.css";
import { toast, Bounce } from "react-toastify";
import { Link as RouterLink } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../../Context/Context.jsx";
import { useNavigate } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard.jsx";

const Login = () => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const { closeLogin } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleClose = () => {
    closeLogin();
    navigate("/");
  };

  const handleChange = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const logIn = () => {
    toast.success("Log in Successfully!", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    console.log(loginForm);
    navigate("/dashboard");
  };
  return (
    <div className="login-signup">
      <div className="loginsignup-container">
        <button className="close-btn" onClick={handleClose}>
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
            name="email"
            value={loginForm.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={loginForm.password}
            onChange={handleChange}
          />
        </div>

        <button className="btn-continue" onClick={logIn}>
          Continue
        </button>

        <p className="loginsignup-login">
          Already have an account?
          <span> Login Here</span>
        </p>

        <div className="loginsignup-agree">
          <input type="checkbox" />

          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
