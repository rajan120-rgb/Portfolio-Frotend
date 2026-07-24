import React, { useContext, useState, useEffect } from "react";
import "./Service.css";
import { toast, Bounce } from "react-toastify";
import { LoginContext } from "../../../Context/Context";
import Pop from "../PopUp/Pop";

const Service = () => {
  const { token, setPopUp } = useContext(LoginContext);
  const [skillData, setSkillData] = useState({
    icon: "",
    name: "",
    percentage: "",
  });

  // const [skills, setSkills] = useState([]);

  const handleChange = (e) => {
    setSkillData({
      ...skillData,
      [e.target.name]: e.target.value,
    });
  };

  // const addSkill = () => {
  //   if (
  //     !skillData.icon.trim() ||
  //     !skillData.name.trim() ||
  //     !skillData.percentage.trim()
  //   ) {
  //     toast.warn("Please fill all fields");
  //     return;
  //   }

  //   setSkills([...skills, skillData]);

  //   setSkillData({
  //     icon: "",
  //     name: "",
  //     percentage: "",
  //   });
  // };
  // useEffect(() => {
  //   console.log("Updated skills:", skills);
  // }, [skills]);

  const save = ()=>{
  setPopUp(true);
  }

  // const removeSkill = (index) => {
  //   setSkills(skills.filter((_, i) => i !== index));
  // };

  const submit = async (e) => {
    e.preventDefault();
    setPopUp(false);

    try {
      const skillResponse = await fetch(
        "http://localhost:8000/api/admin/skills",
        {
          method: "POST",
          body: JSON.stringify(skillData),
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );
      const data = await skillResponse.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    console.log(skillData);

    if (
      !skillData.icon.trim() ||
      !skillData.name.trim() ||
      !skillData.percentage.trim()
    ) {
      toast.warn("Please fill all fields");
      return;
    }
    setSkillData({
      icon: "",
      name: "",
      percentage: "",
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
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="skill-form-input">
              <label htmlFor="">Skill</label>
              <input
                type="text"
                placeholder="Enter Icon Name"
                name="name"
                value={skillData.name}
                onChange={(e) => handleChange(e)}
              />
            </div>
            <div className="skill-form-input">
              <label htmlFor="">Percentage</label>
              <input
                type="number"
                placeholder="Enter Percentage"
                name="percentage"
                value={skillData.percentage}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {/* <button type="button" onClick={() => removeSkill()}>
              Remove
            </button> */}
          </div>

          <div className="btn">
            {/* <button type="button" onClick={addSkill}>
              Add Skills
            </button> */}
            <button type="button" onClick={()=> save()}>Save Changes</button>
          </div>
        </form>
        <Pop handleSubmit={submit}/>
      </div>
    </>
  );
};

export default Service;
