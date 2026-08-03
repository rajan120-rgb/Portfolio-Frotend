import React, { useState, useEffect, useContext } from "react";
import "./Skill.css";
import { Api } from "../../../Api/Api";
import { LoginContext } from "../../../Context/Context";
import { motion } from "framer-motion";

const Skill = () => {
  const { token } = useContext(LoginContext);
  const [skill, setSkill] = useState(() => {
    const saved = localStorage.getItem("skill");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const getSkill = async () => {
      try {
        const data = await Api("/public/skills");

        console.log(data);

        if (data.success) {
          setSkill(data.data);
          localStorage.setItem("skill", JSON.stringify(data.data));
        }
      } catch (error) {
        console.log(error);
      }
    };

    getSkill();
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const fadeUp = {
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

  const iconVariant = {
    hidden: {
      opacity: 0,
      scale: 0.4,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  const skillVariant = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -80 : 80,
    }),

    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
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
        id="skills"
      >
        <motion.div variants={fadeUp} className="skill-description">
          <h1>My Skills</h1>
          <p>
            I am an enthusiastic learner with a strong foundation in
            communication, critical thinking, and teamwork. I enjoy learning new
            skills, adapting to challenges, and contributing positively to
            projects while continuously improving my knowledge.
          </p>
        </motion.div>

        <motion.div variants={containerVariants} className="skill-icon">
          {skill.map((icon, index) => (
            <motion.i
              variants={iconVariant}
              whileHover={{
                scale: 1.25,
                rotate: 10,
                y: -8,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
              }}
              className={icon.icon}
              key={index}
            ></motion.i>
          ))}
        </motion.div>
        <div className="skill-level">
          {skill.map((skill, index) => (
            <motion.div
              custom={index}
              variants={skillVariant}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              className="skill-level-content"
              key={index}
            >
              <div className="skill-side">
                <h3>{skill.name}</h3>
                <motion.div
                  initial={{
                    opacity: 0,
                    y: -10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    delay: 0.5,
                  }}
                  className="skill-level-percent"
                >
                  {skill.percentage}%
                </motion.div>
              </div>
              <div className="skill-level-percent-bar">
                <motion.div
                  initial={{
                    width: 0,
                  }}
                  whileInView={{
                    width: `${skill.percentage}%`,
                  }}
                  viewport={{
                    once: false,
                  }}
                  transition={{
                    duration: 1.4,
                    ease: "easeOut",
                  }}
                  className="progress"
                  // style={{ width: `${skill.percentage}%` }}
                >
                  {" "}
                  <span className="thumb"></span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Skill;
