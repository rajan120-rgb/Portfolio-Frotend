import React from "react";

import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import { useContext } from "react";
import { LoginContext } from "./Context/Context.jsx";
import { Api } from "./Api/Api.js";

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
      </Routes>
    
      </BrowserRouter>
        {/* <Home />
        {showLogin && <Login />} */}
      </>
    
  );
};

export default App;
