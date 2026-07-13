import React from "react";
import "./Bottom.css";

const Bottom = () => {
  return (
    <>
      <div className="bottom">
        <div className="bottom-main-heading">
          <h1>My Services</h1>
          <p className="bottom-para">
            I help individuals and businesses build modern, responsive, and
            user-friendly web applications using the latest frontend
            technologies.
          </p>
        </div>
        <div className="bottom-container">
          <div className="bottom-inner-container">
           <div>
             <i className="fa-solid icon fa-tv"></i>
           </div>
            <h3>Web Development</h3>
            <p>Blog, E-commerce</p>
          </div>
          <div className="bottom-inner-container">
           <div>
             <i className="fa-solid icon fa-figma"></i>
           </div>
            <h3>UI/UX Design</h3>
            <p>Website Design</p>
          </div>
          <div className="bottom-inner-container">
           <div>
             <i className="fa-solid icon fa-microphone"></i>
           </div>
            <h3>Sound Design</h3>
            <p>Voice Over, Beat Making</p>
          </div>
          <div className="bottom-inner-container">
           <div>
            <i className="fa-solid icon fa-gamepad"></i>
           </div>
            <h3>Game Design</h3>
            <p>Character Design, Props & Objects</p>
          </div>
          <div className="bottom-inner-container">
           <div>
            <i className="fa-solid icon fa-camera"></i>
           </div>
            <h3>Photography</h3>
            <p>Potrait, Product Photography</p>
          </div>
          <div className="bottom-inner-container">
            <div>
            <i className="fa-brands icon fa-adversal"></i>
           </div>
            <h3>Advertising</h3>
            <p>Product Advertising</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bottom;
