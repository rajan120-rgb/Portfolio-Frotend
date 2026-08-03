import React, { useRef, useState } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import { motion } from "framer-motion";

const Contact = () => {
  const [value, setValue] = useState({
    from_name: "",
    from_mail: "",
    message: "",
  });
  // const [value0, setValue0] = useState("");
  // const [value1, setValue1] = useState("");
  const form = useRef();
  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_nzfta5y", "template_x1kcdbj", form.current, {
        publicKey: "5rcPoGwwJaGQtQaSn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        },
      );
    setValue({
      from_name: "",
      from_mail: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.18,
      },
    },
  };

  const fadeDown = {
    hidden: {
      opacity: 0,
      y: -40,
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

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 40,
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

  const leftVariant = {
    hidden: {
      opacity: 0,
      x: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const rightVariant = {
    hidden: {
      opacity: 0,
      x: 80,
    },
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
      <section id="contacts">
        <motion.div
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: false,
            amount: 0.2,
          }}
          id="contactPage"
        >
          <motion.h1 variants={fadeDown} className="contactPageTitle">
            Contact Me
          </motion.h1>
          <motion.p variants={fadeUp} className="contact-description">
            Please fill out the form below to discuss any work opportunities.
          </motion.p>
          <motion.form
            ref={form}
            className="contactForms"
            action=""
            onSubmit={sendMail}
            variants={containerVariant}
          >
            <motion.input
              variants={leftVariant}
              whileHover={{
                y: -3,
              }}
              whileFocus={{
                scale: 1.02,
              }}
              type="text"
              placeholder="Your Name"
              className="name"
              name="from_name"
              value={value.from_name}
              onChange={handleChange}
              required
            />
            <motion.input
              variants={rightVariant}
              whileHover={{
                y: -3,
              }}
              whileFocus={{
                scale: 1.02,
              }}
              type="email"
              placeholder="your Email"
              className="email"
              name="from_mail"
              value={value.from_mail}
              onChange={handleChange}
              required
            />
            <motion.textarea
              variants={fadeUp}
              whileHover={{
                y: -3,
              }}
              className="msg "
              name="message"
              rows={5}
              placeholder="Your Message"
              id=""
              value={value.message}
              onChange={handleChange}
              required
            ></motion.textarea>
            <motion.button
              variants={fadeUp}
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{
                scale: 0.95,
              }}
              type="submit"
              value="send"
              className="submitBtn"
            >
              Submit
            </motion.button>
            {/* <div className="links">
              <img src={FacebookIcon} alt="" className="linkImg" />
              <img src={TwitterIcon} alt="" className="linkImg" />
              <img src={YoutubeIcon} alt="" className="linkImg" />
              <img src={InstagramIcon} alt="" className="linkImg" />
            </div> */}
          </motion.form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
