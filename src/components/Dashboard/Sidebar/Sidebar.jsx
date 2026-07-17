import React, { useState } from "react";
import "./Sidebar.css";
import { Link as RouterLink } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const Sidebar = () => {
  const [open , setOpen] = useState(true);
  return (
    <>
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <div className="top-bar">
          {open && (
            <RouterLink to="/dashboard/contentDash">
            <h2>Portfolio  <br /><span>Admin</span></h2>
            </RouterLink>
          )}
          <i className="fa-solid fa-bars" onClick={()=>setOpen(!open)}></i>
        </div>
       
          <ul className={open? "ul":"ol"}>
            <RouterLink to="/dashboard/about">
             
              <li>
                <i className="fa-solid fa-circle-user"></i>
                {open && (
                  <span>About</span>
                )}
              </li>
            </RouterLink>
            <RouterLink to="/dashboard/skill">
              <li>
                <i className="fa-solid fa-star-half-stroke"></i>
                 {open && (
                  <span>Skill</span>
                )}
              </li>
            </RouterLink>
            <RouterLink to="/dashboard/resume">
              <li>
                <i className="fa-solid fa-file"></i>
                {open && (
                  <span>Resume</span>
                )}
              </li>
            </RouterLink>
            <RouterLink to="/dashboard/contact">
              <li>
                <i className="fa-solid fa-envelope"></i>
                 {open && (
                  <span>Contact</span>
                )}
              </li>
            </RouterLink>
          </ul>
        
      </div>
    </>
  );
};

export default Sidebar;
