import React, { useState } from "react";
import "./Resume.css";

const Resume = () => {
  const [resumeForm, setResumeForm] = useState({
    institution: "",
    year: "",
    degree: "",
    faculty: "",
    gpa: "",
  });

  const handleChange = (e) => {
    setResumeForm({
      ...resumeForm,
      [e.target.name]: e.target.value,
    });
  };
  const submit = (e) => {
    e.preventDefault();
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
        <form action="" onSubmit={submit}>
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
            <div>
              <button>Save Changes</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Resume;
