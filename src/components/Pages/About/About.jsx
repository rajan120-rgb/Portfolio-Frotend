import React, { useEffect, useState } from "react";
import Hero from "../../Hero/Hero";
import Bottom from "../../Bottom/Bottom";
import { Api } from "../../../Api/Api";
import { useContext } from "react";
import { LoginContext } from "../../../Context/Context.jsx";

const About = ({data}) => {
   const { setLoading } = useContext(LoginContext);
  const [about, setAbout] = useState([]);
 
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
