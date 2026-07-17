import React from "react";
import "./Sidebar.css";
import { Link as RouterLink } from "react-router-dom";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <h2>Portfolio <br /><span>Admin</span></h2>
        <ul>
          <ul>
            <RouterLink to="/dashboard/about">
             
              <li>
                About
              </li>
            </RouterLink>
            <RouterLink to="/dashboard/skill">
              <li>
                Skill
              </li>
            </RouterLink>
            <RouterLink to="/dashboard/resume">
              <li>
               Resume
              </li>
            </RouterLink>
            <RouterLink to="/dashboard/contact">
              <li>
                Contact
              </li>
            </RouterLink>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
