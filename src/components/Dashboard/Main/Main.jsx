import React from 'react'
import './Main.css'
import { Outlet } from "react-router-dom";
// import About from '../About/About.jsx'
// import Contact from '../Contact/Contact.jsx'
// import Service from '../Service/Service.jsx'
// import Resume from '../Resume/Resume.jsx'

const Main = () => {
  return (
    <>
    <div className="main">
      <Outlet/>
        {/* <About/>
        <Contact/>
        <Service/>
        <Resume/> */}
    </div>
    </>
  )
}

export default Main
