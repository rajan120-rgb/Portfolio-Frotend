import React, { useEffect, useState } from "react";
import Hero from "../../Hero/Hero";
import Bottom from "../../Bottom/Bottom";
import { Api } from "../../../Api/Api";
import { useContext } from "react";
import { LoginContext } from "../../../Context/Context.jsx";

const About = ({data}) => {
   const { setLoading } = useContext(LoginContext);
  const [about, setAbout] = useState([]);


  // useEffect(() => {
  //   const getAbout = async ({data}) => {
  //     try {
  //       const data = await Api("/admin/about");

  //       console.log(data);

  //       if (data.success) {
  //         setAbout(data.data);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getAbout();
  // }, []);
  // console.log(about.name)
  // console.log(about.profession)

  

  return (
   
       
      <>
        <div id="about">
          <Hero hero={data} />
        <Bottom bottom={data} />
        </div>
      </>
    
 
  );
};
export default About;
