import React, { useState, useEffect, useContext } from "react";
import "./Skill.css";
import { Api } from "../../../Api/Api";
import { LoginContext } from "../../../Context/Context";

const Skill = () => {
  const { token } = useContext(LoginContext)
const [skill, setSkill] = useState(()=>{
  const saved = localStorage.getItem("skill");
  return saved? JSON.parse(saved):[];
})


    useEffect(() => {
       const getSkill = async () => {
         try {
           const data = await Api("/public/skills");
   
           console.log(data);
   
           if (data.success) {
             setSkill(data.data);
             localStorage.setItem("skill",JSON.stringify(data.data))
           }
         } catch (error) {
           console.log(error);
         } 
       };
   
       getSkill();
     }, []);

     skill.forEach((item) => console.log(item.icon));
    //  console.log(sk)

  // const skills = [
  //   { name: "HTML", level: 90 },
  //   { name: "CSS", level: 85 },
  //   { name: "JavaScript", level: 75 },
  //   { name: "React", level: 70 },
  //   { name: "UI Design", level: 75 },
  //   { name: "Figma", level: 75 },
  // ];

  return (
    <>
      <section id="skills">
        <div className="skill-description">
          <h1>My Skills</h1>
          <p>
            I am an enthusiastic learner with a strong foundation in
            communication, critical thinking, and teamwork. I enjoy learning new
            skills, adapting to challenges, and contributing positively to
            projects while continuously improving my knowledge.
          </p>
        </div>

        <div className="skill-icon">
          {skill.map((icon, index)=>(
             <i className={icon.icon} key={index}></i>
          ))}
        </div>
        {/* <div className="skill-icon">
          <i className={skill.icon}></i>
          <i className="fa-brands fa-css"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
        </div> */}
        <div className="skill-level">
          {skill.map((skill, index) => (
            
             <div className="skill-level-content" key={index}>
             <div className="skill-side">
               <h3>{skill.name}</h3>
              <div className="skill-level-percent">{skill.percentage}%</div>
             </div>
              <div className="skill-level-percent-bar">
                <div className="progress" style={{ width: `${skill.percentage}%` }}> <span className="thumb"></span></div>
              </div>
            </div>
            
           
          ))}
        </div>
      </section>
    </>
  );
};

export default Skill;
