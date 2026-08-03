import React, { useContext, useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import "./Bottom.css";
import { LoginContext } from "../../Context/Context";
import { motion } from "framer-motion";

const Bottom = ({ bottom }) => {
  const { token } = useContext(LoginContext);
  const [service, setService] = useState(() => {
    const saved = localStorage.getItem("service");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const getBottom = async () => {
      try {
        const data = await Api("/public/services");
        console.log(data);
        if (data.success) {
          setService(data.data);
          localStorage.setItem("service", JSON.stringify(data.data));
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBottom();
  }, []);

  const containerVariant = {
    hidden: {},
    show: {
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
    show: {
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
      y: 40,
    }),

    show: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <>
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: false,
          amount: 0.2,
        }}
        className="bottom"
      >
        <motion.div variants={headingVariant} className="bottom-main-heading">
          <h1>My Services</h1>
          <p className="bottom-para">
            I help individuals and businesses build modern, responsive, and
            user-friendly web applications using the latest frontend
            technologies.
          </p>
        </motion.div>
        <div className="bottom-container">
          {service.map((item, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={cardVariant}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              transition={{
                type: "spring",
                stiffness: 220,
              }}
            >
              <div className="bottom-inner-container">
                <div></div>
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.2 }}
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  transition={{ delay: 0.3 }}
                >
                  {item.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
};

export default Bottom;
