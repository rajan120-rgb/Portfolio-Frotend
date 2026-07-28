import React, { useContext, useState, useEffect } from "react";
import "./Resume.css";
import { Api } from "../../../Api/Api";
import { LoginContext } from "../../../Context/Context";

const Resume = () => {
  const { token } = useContext(LoginContext);
  const [resume, setResume] = useState(()=>{
    const saved1 = localStorage.getItem("resume");
    return saved1? JSON.parse(saved1):[];
  });
  const [certificate, setCertificate] = useState(()=>{
    const saved = localStorage.getItem("certificate");
    return saved? JSON.parse(saved):[];
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Api("/public/educations");

        console.log(data);

        if (data.success) {
          setResume(data.data);
          localStorage.setItem("resume", JSON.stringify(data.data))
        }
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const getResumeData = async () => {
      try {
        const data = await Api("/public/certificates");
        console.log(data);
        if (data.success) {
          setCertificate(data.data);
          localStorage.setItem("certificate",JSON.stringify(data.data))
        }
      } catch (error) {
        console.log(error);
      }
    };
    getResumeData();
  }, []);

  return (
    <>
      <div id="resume">
        <h1>My Resume</h1>
        <div className="resume-education resume-table">
          <h3>Education</h3>
          <div className="resume-education-table">
            <table>
              <thead>
                <tr>
                  <th>SN</th>
                  <th>Institution</th>
                  <th>Year</th>
                  <th>Degree</th>
                  <th>Faculty</th>
                  <th>GPA</th>
                </tr>
              </thead>

              {resume.map((item, index) => (
                // <div>

                <tbody key={index}>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.institution_name}</td>
                    <td>{item.start_year}</td>
                    <td>{item.degree}</td>
                    <td>{item.field_of_study}</td>
                    <td>{item.gpa}</td>
                  </tr>
                  
                </tbody>
              ))}
            </table>
          </div>
        </div>
        <div className=" resume-education">
          <h3 className="certificate">Certification</h3>
          <div className="resume-certification">
            {certificate.map((item, index) => (
              <div key={index}>
                <div className="resume-box">
                  <h4> {item.title}</h4>
                  <p>{item.organization}</p>
                  {/* <p> Learned component-based development,
              hooks, and modern React concepts.</p> */}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="resume-strength resume-education">
          <h3>Strength</h3>
          <div className="strength-grid">
            <div>✓ Problem Solving</div>
            <div>✓ Quick Learning</div>
            <div>✓ Responsive Design</div>
            <div>✓ Clean Coding Practices</div>
            <div>✓ Team Collaboration</div>
            <div>✓ Attention to Detail</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
