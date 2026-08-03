import React, { useContext, useState, useEffect } from "react";
import "./Resume.css";
import { Api } from "../../../Api/Api";
import { LoginContext } from "../../../Context/Context";
import { motion } from "framer-motion";

const Resume = () => {
  const { token } = useContext(LoginContext);
  const [resume, setResume] = useState(() => {
    const saved1 = localStorage.getItem("resume");
    return saved1 ? JSON.parse(saved1) : [];
  });
  const [certificate, setCertificate] = useState(() => {
    const saved = localStorage.getItem("certificate");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await Api("/public/educations");

        console.log(data);

        if (data.success) {
          setResume(data.data);
          localStorage.setItem("resume", JSON.stringify(data.data));
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
          localStorage.setItem("certificate", JSON.stringify(data.data));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getResumeData();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const headingVariant = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const cardVariant = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80,
      scale: 0.9,
    }),

    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const strengthVariant = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.9,
    },

    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: false,
          amount: 0.2,
        }}
        id="resume"
      >
        {/* <h1>My Resume</h1>
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
        </div> */}
        <div className=" resume-education">
          <motion.h3 variants={headingVariant} className="certificate">
            Certification
          </motion.h3>
          <div className="resume-certification">
            {certificate.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={cardVariant}
                whileHover={{
                  y: -10,
                  scale: 1.03,
                  rotateX: 3,
                }}
                transition={{
                  type: "spring",
                  stiffness: 220,
                }}
              >
                <div className="resume-box">
                  <h4> {item.title}</h4>
                  <p>{item.organization}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="resume-strength resume-education">
          <motion.h3 variants={headingVariant}>Strength</motion.h3>
          <motion.div variants={containerVariants} className="strength-grid">
            <motion.div
              variants={strengthVariant}
              whileHover={{
                scale: 1.05,
                // x: 2,
              }}
            >
              ✓ Problem Solving
            </motion.div>
            <motion.div
              variants={strengthVariant}
              whileHover={{
                scale: 1.05,
                // x: 2,
              }}
            >
              ✓ Quick Learning
            </motion.div>
            <motion.div
              variants={strengthVariant}
              whileHover={{
                scale: 1.05,
                // x: 2,
              }}
            >
              ✓ Responsive Design
            </motion.div>
            <motion.div
              variants={strengthVariant}
              whileHover={{
                scale: 1.05,
                // x: 2,
              }}
            >
              ✓ Clean Coding Practices
            </motion.div>
            <motion.div
              variants={strengthVariant}
              whileHover={{
                scale: 1.05,
                // x: 2,
              }}
            >
              ✓ Team Collaboration
            </motion.div>
            <motion.div
              variants={strengthVariant}
              whileHover={{
                scale: 1.05,
                // x: 2,
              }}
            >
              ✓ Attention to Detail
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Resume;
