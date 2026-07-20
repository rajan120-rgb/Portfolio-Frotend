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
  // const [error, setError] = useState("");
  const { closeLogin , setToken , token} = useContext(LoginContext);
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

  const logIn = async (e) => {
    e.preventDefault();

    if (!loginForm.email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!loginForm.password.trim()) {
      toast.error("Password is required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/auth/login", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginForm),
      });
      const data = await response.json();
  
      if (response.ok) {
        setToken(data.token);
        navigate("/dashboard");
        toast.success("Log in Successfully!")
      } else {
        // setError(data.message);
        toast.error("Invalid Crendential")
      }
    } catch (error) {
      console.log("Server Error");
    }
  };
  return (
    <div className="login-signup">
      <div className="loginsignup-container">
        <button className="close-btn" onClick={handleClose}>
          ✖
        </button>

        <h1>Sign Up</h1>

        <form className="loginsignup-field">
          {/* <input 
            type="text" 
            placeholder="Your Name"
          /> */}

          <input
            type="email"
            placeholder="Email Address"
            name="email"
            required
            value={loginForm.email}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            required
            value={loginForm.password}
            onChange={handleChange}
          />

          <button className="btn-continue" onClick={logIn}>
            Continue
          </button>
        </form>

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
