import React, { useContext, useState } from "react";
import { LoginContext } from "../../Context/Context";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";

const SignUP = () => {
  const [signUpForm, setSignUpForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  // const [error, setError] = useState("");
  const { closeLogin, setToken, token } = useContext(LoginContext);
  const navigate = useNavigate();

  const handleClose = () => {
    closeLogin();
    navigate("/login");
  };

  const handleChange = (e) => {
    setSignUpForm({
      ...signUpForm,
      [e.target.name]: e.target.value,
    });
  };

  const signUp = async (e) => {
    e.preventDefault();

    if (!signUpForm.name.trim()) {
      toast.error("Name is required");
      return;
    }
    if (!signUpForm.email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!signUpForm.password.trim()) {
      toast.error("Password is required");
      return;
    }

    try {
      const response = await fetch("http://localhost:8000/api/auth/register", {
        method: "Post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpForm),
      });
      const data = await response.json();
      console.log("SignUp response:", data);

      if (response.ok) {
        toast.success("Account Created Successfully");
      } 
    } catch (error) {
      console.log("Server Error");
    }
    
        navigate("/login");
  };

  return (
    <>
      <div className="login-signup">
        <div className="loginsignup-container">
          <button className="close-btn" onClick={handleClose}>✖</button>

          <h1>Sign Up</h1>

          <form className="loginsignup-field">
            {/* <input 
            type="text" 
            placeholder="Your Name"
          /> */}

            <input
              type="text"
              placeholder="Enter Your Name"
              name="name"
              required
              value={signUpForm.name}
              onChange={handleChange}
            />

            <input
              type="email"
              placeholder="Enter Your Email"
              name="email"
              required
              value={signUpForm.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
              value={signUpForm.password}
              onChange={handleChange}
            />

            <button className="btn-continue" onClick={signUp}>
              Create Account
            </button>
          </form>

          <div className="loginsignup-agree">
            <input type="checkbox" />

            <p>
              By continuing, I agree to the terms of use and privacy policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUP;
