import React, { useContext, useState } from "react";
import "./NavbarDash.css";
import { Navigate, useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import { LoginContext } from "../../../Context/Context";

const Navbar = () => {
  const navigate = useNavigate();
  const [popup, setPopup] = useState(false);
  const { setToken } = useContext(LoginContext)
  const logout = () => {
    toast.error("Logout Successfully!");
    localStorage.removeItem("token");
    setToken("");
    navigate("/login");
  };
  return (
    <>
      <div className="navbar-dashboard">
        <button
          className="logout"
          onClick={() => {
            setPopup(true);
          }}
        >
          <span>Logout</span> <i class="fa-solid fa-right-from-bracket"></i>
        </button>
        {popup && (
          <div className="popup-overlay">
            <div className="popup">
              <h3>Logout</h3>
              <p>Are you sure you want to logout?</p>

              <div className="popup-buttons">
                <button className="yes" onClick={logout}>
                  Yes
                </button>
                <button className="no" onClick={() => setPopup(false)}>
                  No
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Navbar;
