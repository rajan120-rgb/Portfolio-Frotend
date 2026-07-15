import React, {useEffect, useState} from "react";
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
   const { setLoading, loading } = useContext(LoginContext);
    const [about, setAbout] = useState([]);

    useEffect(() => {
       const getAbout = async () => {
         try {
           const data = await Api("/admin/about");
   
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
     }, [setLoading]);

  return (
    <div>
   {loading? (
    <h1>Loading...</h1>
   ):(
      <>
       <Navbar/>
      <About data={about}/>
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
