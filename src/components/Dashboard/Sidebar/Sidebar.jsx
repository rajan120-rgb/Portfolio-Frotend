import React, { useState } from "react";
import "./Sidebar.css";
import { Link as RouterLink } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const Sidebar = ({open,setOpen}) => {
  return (
    <>
      <div className={`sidebar ${open ? "open" : "closed"}`}>
        <div className={`top-bar ${open?"":"closed-bar"}`}>
          {/* {open && ( */}
            <RouterLink to="/dashboard/contentDash">
            <h2>Portfolio  <br /><span>Admin</span></h2>
            </RouterLink>
          {/* // )} */}
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
            <RouterLink to="/dashboard/service">
             
              <li>
                <i class="fa-solid fa-bell-concierge"></i>
                {open && (
                  <span>Service</span>
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
            <RouterLink to="/dashboard/certificate">
              <li>
                <i className="fa-solid fa-envelope"></i>
                 {open && (
                  <span>Certificate</span>
                )}
              </li>
            </RouterLink>
          </ul>
        
      </div>
    </>
  );
};

export default Sidebar;
