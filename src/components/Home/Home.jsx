import React, { useEffect, useState } from "react";
import "./Home.css";

import Navbar from "../Navbar/Navbar.jsx";
import About from "../Pages/About/About.jsx";
import Skill from "../Pages/Skills/Skill.jsx";
import Resume from "../Pages/Resume/Resume.jsx";
import Contact from "../Pages/Contact/Contact.jsx";
import Footer from "../Footer/Footer.jsx";
import { useContext } from "react";
import { LoginContext } from "../../Context/Context.jsx";
import { Api } from "../../Api/Api";

const Home = () => {
  const { setLoading, loading, token } = useContext(LoginContext);
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const getAbout = async () => {
      // if (!token) {
      //   setLoading(false);
      //   return;
      // }
      // console.log("Token is ", token);
      try {
        const data = await Api("/public/about");
        console.log(data);
        if (data.success) {
          setAbout(data.data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getAbout();
  }, [token,setLoading]);

  return (
    <div>
      {loading ? (
        <div className="loader-wrapper">
          <div className="loader">
            <div className="circle c1"></div>
            <div className="circle c2"></div>
            <div className="circle c3"></div>
          </div>
        </div>
      ) : (
        <>
          <Navbar />
          <About data={about} />
          <Skill />
          <Resume />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
};

export default Home;
