import React, { useContext, useEffect, useState } from "react";
import "./Resume.css";
import Pop from "../PopUp/Pop";
import { LoginContext } from "../../../Context/Context";

const Resume = () => {
  const { setPopUp, token } = useContext(LoginContext);
  const [resumeForm, setResumeForm] = useState({
    institution: "",
    year: "",
    degree: "",
    faculty: "",
    gpa: "",
  });
  const [resumes, setResumes] = useState([]);

  const handleChange = (e) => {
    setResumeForm({
      ...resumeForm,
      [e.target.name]: e.target.value,
    });
  };

  const addResume = () => {
    setResumes([...resumes, resumeForm]);
  };

  useEffect(() => {
    console.log("Array resume", resumes);
  }, [resumes]);

  const save = () => {
    setPopUp(true);
  };

  const submit = async (e) => {
    e.preventDefault();
    setPopUp(false);

    try {
      const response = await fetch("http://localhost:8000/api/admin/about", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify([resumes]),
      });
      const data =await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }

    console.log(resumeForm);
    setResumeForm({
      institution: "",
      year: "",
      degree: "",
      faculty: "",
      gpa: "",
    });
  };
  return (
    <>
      <div className="resume-dashboard">
        <h1>Resume</h1>
        <form action="">
          <div className="resume-form">
            <div className="resume-form-input">
              <label htmlFor="">Institution</label>
              <input
                type="text"
                placeholder="Enter Institution Name"
                name="institution"
                value={resumeForm.institution}
                onChange={handleChange}
              />
            </div>
            <div className="resume-form-input">
              <label htmlFor="">Year</label>
              <input
                type="number"
                placeholder="Enter Year"
                name="year"
                step="any"
                value={resumeForm.year}
                onChange={handleChange}
              />
            </div>
            <div className="resume-form-input">
              <label htmlFor="">Degree</label>
              <input
                type="text"
                placeholder="Enter Your Degree"
                name="degree"
                value={resumeForm.degree}
                onChange={handleChange}
              />
            </div>
            <div className="resume-form-input">
              <label htmlFor="">Faculty</label>
              <input
                type="text"
                placeholder="Enter Your Faculty"
                name="faculty"
                value={resumeForm.faculty}
                onChange={handleChange}
              />
            </div>
            <div className="resume-form-input">
              <label htmlFor="">GPA</label>
              <input
                type="number"
                placeholder="Enter Your GPA"
                name="gpa"
                step="any"
                value={resumeForm.gpa}
                onChange={handleChange}
              />
            </div>
            <div></div>
          </div>
          <div className="btn">
            <button type="button" onClick={addResume}>
              Add Skills
            </button>
            <button type="button" onClick={() => save()}>
              Save Changes
            </button>
          </div>
        </form>
        <Pop handleSubmit={submit} />
      </div>
    </>
  );
};

export default Resume;
