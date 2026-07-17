import React from "react";

import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import { useContext } from "react";
import { LoginContext } from "./Context/Context.jsx";
import { Api } from "./Api/Api.js";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import About from "./components/Dashboard/About/About.jsx";
import Contact from "./components/Dashboard/Contact/Contact.jsx";
import Service from "./components/Dashboard/Service/Service.jsx";
import Resume from "./components/Dashboard/Resume/Resume.jsx";

const App = () => {
  const { showLogin ,loading } = useContext(LoginContext);

const navbarHeight = 210;

useEffect(() => {
  const aboutSection = document.getElementById("about");

  if (aboutSection) {
    window.scrollTo({
      top: aboutSection.offsetTop - navbarHeight,
      behavior: "smooth",
    });
  }
}, []);
  

  return (
   
      <>
      <BrowserRouter>
     <Routes>
         <Route path="/" element={<Home />} />
         {showLogin&& <Route path="/login" element={<Login />} />}
         <Route path="/dashboard" element={<Dashboard />} >
         <Route index element={<hellow />} />
          <Route path="about" element={<About/>} />
          <Route path="skill" element={<Service/>} />
          <Route path="resume" element={<Resume/>} />
          <Route path="contact" element={<Contact/>}/>
         </Route>
      </Routes>
    
      </BrowserRouter>
        {/* <Home />
        {showLogin && <Login />} */}
      </>
    
  );
};

export default App;
