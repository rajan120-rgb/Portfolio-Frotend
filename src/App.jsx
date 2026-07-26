import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login/Login.jsx";
import Home from "./components/Home/Home.jsx";
import { useContext } from "react";
import { LoginContext } from "./Context/Context.jsx";
import { Api } from "./Api/Api.js";
import Dashboard from "./components/Dashboard/Dashboard.jsx";
import About from "./components/Dashboard/About/About.jsx";
import Contact from "./components/Dashboard/Contact/Contact.jsx";
import Skill from "./components/Dashboard/Skill/Service.jsx";
import Resume from "./components/Dashboard/Resume/Resume.jsx";
import ContentDash from "./components/Dashboard/ContentDash/ContentDash.jsx";
import ProtectedRoute from "./components/Dashboard/ProtectedRoute/ProtectedRoute.jsx";
import PublicRoute from "./components/Dashboard/ProtectedRoute/PublicRoute.jsx";
import AddAbout from "./components/Dashboard/About/AddAbout.jsx";
import ViewAbout from "./components/Dashboard/About/ViewAbout.jsx";
import EditAbout from "./components/Dashboard/About/EditAbout.jsx";

const App = () => {
  const { showLogin, loading, token } = useContext(LoginContext);

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
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
        style={{ zIndex: 999999 }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            // <PublicRoute>
              <Home/>
            // </PublicRoute>
          } />
           <Route path="/login" element={
            <PublicRoute>
              
              <Login />
            </PublicRoute>
          } />
          <Route element={<ProtectedRoute/>}>
             <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Navigate to="contentDash" replace />} />
              <Route path="about" element={<About />}/>
              <Route path="addAbout" element={<AddAbout/>}/>
              <Route path="viewAbout/:id" element={<ViewAbout/>}/>
              <Route path="editAbout/:id" element={<EditAbout/>}/>
              
              <Route path="skill" element={<Skill />} />
              <Route path="resume" element={<Resume />} />
              <Route path="contact" element={<Contact />} />
              <Route path="contentDash" element={<ContentDash />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Home />
        {showLogin && <Login />} */}
    </>
  );
};

export default App;
