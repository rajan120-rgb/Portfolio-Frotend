import React from "react";
import Navbar from "../Navbar/Navbar.jsx";
import About from "../Pages/About/About.jsx";
import Skill from "../Pages/Skills/Skill.jsx";
import Resume from "../Pages/Resume/Resume.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Navbar/>
      <About />
      <Skill />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
