import React, { useState } from "react";
import "./Service.css";

const Service = () => {
  const [skillData, setSkillData] = useState({
    icon: "",
    skill: "",
    percent: "",
  });

  const handleChange = (e) => {
    setSkillData({
      ...skillData,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(skillData);
    setSkillData({
      icon: "",
      skill: "",
      percent: "",
    });
  };

  return (
    <>
      <div className="skill-dashboard">
        <h1>Skill</h1>
        <form action="" onSubmit={submit}>
          <div className="skill-form">
            <div className="skill-form-input">
              <label htmlFor="">Icon</label>
              <input
                type="text"
                placeholder="Enter Icon Name"
                name="icon"
                value={skillData.icon}
                onChange={handleChange}
              />
            </div>
            <div className="skill-form-input">
              <label htmlFor="">Skill</label>
              <input
                type="text"
                placeholder="Enter Icon Name"
                name="skill"
                value={skillData.skill}
                onChange={handleChange}
              />
            </div>
            <div className="skill-form-input">
              <label htmlFor="">Percentage</label>
              <input
                type="number"
                placeholder="Enter Percentage"
                name="percent"
                value={skillData.percent}
                onChange={handleChange}
              />
            </div>
            <div>
              <button>Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Service;
