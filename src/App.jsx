import React from "react";
import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import { useContext } from "react";
import { LoginContext } from "./Context/Context.jsx";

const App = () => {
  const { showLogin  } = useContext(LoginContext);

  return (
   
      <>
      <BrowserRouter>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/login" element={<Login />} />
      </Routes>
      </BrowserRouter>
        {/* <Home />
        {showLogin && <Login />} */}
      </>
    
  );
};

export default App;
