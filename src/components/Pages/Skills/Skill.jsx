import React from "react";
import "./Skill.css";

const Skill = () => {
  const skills = [
    { name: "HTML", level: 90 },
    { name: "CSS", level: 85 },
    { name: "JavaScript", level: 75 },
    { name: "React", level: 70 },
    { name: "UI Design", level: 75 },
    { name: "Figma", level: 75 },
  ];

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
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-react"></i>
        </div>
        <div className="skill-level">
          {skills.map((skill, index) => (
            <div className="skill-level-content" key={index}>
             <div className="skill-side">
               <h3>{skill.name}</h3>
              <div className="skill-level-percent">{skill.level}%</div>
             </div>
              <div className="skill-level-percent-bar">
                <div className="progress" style={{ width: `${skill.level}%` }}> <span className="thumb"></span></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skill;
