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
import Contact from "./components/Dashboard/Certificate/Certificate.jsx";
import Skill from "./components/Dashboard/Skill/Skill.jsx";
import Resume from "./components/Dashboard/Resume/Resume.jsx";
import ContentDash from "./components/Dashboard/ContentDash/ContentDash.jsx";
import ProtectedRoute from "./components/Dashboard/ProtectedRoute/ProtectedRoute.jsx";
import PublicRoute from "./components/Dashboard/ProtectedRoute/PublicRoute.jsx";
import AddAbout from "./components/Dashboard/About/AddAbout.jsx";
import ViewAbout from "./components/Dashboard/About/ViewAbout.jsx";
import EditAbout from "./components/Dashboard/About/EditAbout.jsx";
import Service from "./components/Dashboard/Service/Service.jsx";
import AddService from "./components/Dashboard/Service/AddService.jsx";
import ViewService from "./components/Dashboard/Service/ViewService.jsx";
import EditService from "./components/Dashboard/Service/EditService.jsx";
import AddSkill from "./components/Dashboard/Skill/AddSkill.jsx";
import EditSkill from "./components/Dashboard/Skill/EditSkill.jsx";
import ViewSkill from "./components/Dashboard/Skill/ViewSkill.jsx";
import AddResume from "./components/Dashboard/Resume/AddResume.jsx";
import EditResume from "./components/Dashboard/Resume/EditResume.jsx";
import ViewResume from "./components/Dashboard/Resume/ViewResume.jsx";
import Certificate from "./components/Dashboard/Certificate/Certificate.jsx";
import AddCertificate from "./components/Dashboard/Certificate/AddCertificate.jsx";
import ViewCertificate from "./components/Dashboard/Certificate/ViewCertificate.jsx";
import EditCertificate from "./components/Dashboard/Certificate/EditCertificate.jsx";
import SignUP from "./components/Login/SignUP.jsx";

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
            <PublicRoute>
              <Home/>
           </PublicRoute>
          } />
           <Route path="/login" element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          } />
          <Route path="/signUp" element={<SignUP/>}/>
          
          <Route element={<ProtectedRoute/>}>
             <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<Navigate to="contentDash" replace />} />
              <Route path="about" element={<About />}/>
              <Route path="service" element={<Service/>}/>
              <Route path="addService" element={<AddService/>}/>
              <Route path="addAbout" element={<AddAbout/>}/>
              <Route path="viewAbout/:id" element={<ViewAbout/>}/>
              <Route path="viewService/:id" element={<ViewService/>}/>
              <Route path="editAbout/:id" element={<EditAbout/>}/>
              <Route path="editService/:id" element={<EditService/>}/>
              <Route path="skill" element={<Skill />} />
              <Route path="addSkill" element={<AddSkill/>} />
              <Route path="editSkill/:id" element={<EditSkill/>} />
              <Route path="editSkill/:id" element={<EditSkill/>} />
              <Route path="viewSkill/:id" element={<ViewSkill/>} />
              <Route path="resume" element={<Resume />} />
              <Route path="addResume" element={<AddResume/>} />
              <Route path="editResume/:id" element={<EditResume/>} />
              <Route path="viewResume/:id" element={<ViewResume/>} />
              <Route path="certificate" element={<Certificate/>} />
              <Route path="addCertificate" element={<AddCertificate/>} />
              <Route path="viewCertificate/:id" element={<ViewCertificate/>} />
              <Route path="editCertificate/:id" element={<EditCertificate/>} />
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
