import React, { useState, useEffect } from "react";
import "./Navbar.css";
import {Link as RouterLink } from "react-router-dom";
import { Link, scrollSpy } from "react-scroll";
import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import { LoginContext } from "../../Context/Context.jsx";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("");
  const [isOn, setIsOn] = useState(false);
  const { openLogin } = useContext(LoginContext);

  // const toggle = () => {
  //   const newState = !isOn;
  //   setIsOn(newState);

  //   document.body.style.backgroundColor = newState ? "#121212" : "";
  //   document.body.style.color = newState ? "#ffffff" : "#000000";
  // };

  // const toggle = ()=>{
  //   setIsOn(!isOn);
  //   //  document.body.style.backgroundColor = isOn ? "#ffffff" : "";
  // }

  //     useEffect(() => {
  //   document.body.style.backgroundColor = isOn ? "#ffffff" : "";
  //   // document.body.style.color = dark ? "#ffffff" : "#000000";
  // }, [isOn]);

  return (
    <>
      <div className="navbar">
        <h1> │ R │RAJAN</h1>
        <div className="navbar-list">
          <li>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              offset={-300}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              offset={-150}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Skills
            </Link>
          </li>
          {/* <li >
            <Link  activeClass="active" to="project" spy={true}  offset={-100} smooth={true} duration={500} className="nav-link">Project</Link>
          </li> */}
          <li>
            <Link
              activeClass="active"
              to="resume"
              spy={true}
              offset={-160}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Resume
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contacts"
              spy={true}
              offset={-150}
              smooth={true}
              duration={500}
              className="nav-link"
            >
              Contact
            </Link>
          </li>
        </div>
        {/* <div className="login-page">
          <RouterLink to='/login'>
          </RouterLink>
        </div> */}
        {/* <div onClick={toggle}  className="turn"> */}
        {/* {isOn ? <FaSun /> : <FaMoon />} */}
        {/* <i class="fa-solid fa-eye"></i> */}
        {/* </div> */}
        <div className="icon">
          <i onClick={() => setMenu(!menu)} className="fa-solid fa-bars"></i>
          {menu && (
            <div className="navbar-list-menu">
              <li>
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  offset={-140}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={() => setMenu(!menu)}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="skills"
                  spy={true}
                  offset={-140}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={() => setMenu(!menu)}
                >
                  Skills
                </Link>
              </li>
              {/* <li>
              <Link activeClass="active" to="project" spy={true}  offset={-100} smooth={true} duration={500} className="nav-link" onClick={()=>setMenu(!menu)}>Project</Link>
            </li> */}
              <li>
                <Link
                  activeClass="active"
                  to="resume"
                  spy={true}
                  offset={-140}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={() => setMenu(!menu)}
                >
                  Resume
                </Link>
              </li>
              <li>
                <Link
                  activeClass="active"
                  to="contacts"
                  spy={true}
                  offset={-150}
                  smooth={true}
                  duration={500}
                  className="nav-link"
                  onClick={() => setMenu(!menu)}
                >
                  Contact
                </Link>
              </li>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
