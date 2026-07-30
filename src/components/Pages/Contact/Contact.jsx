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
  return (
    <>
      <section id="contacts">
        <motion.div
          initial={{ y: 200, opacity: 0, scale:0.9 }}
          whileInView={{ y: 0, opacity: 1,scale:1 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true, amount: 0.1 }}
          id="contactPage"
        >
          <h1 className="contactPageTitle">Contact Me</h1>
          <p className="contact-description">
            Please fill out the form below to discuss any work opportunities.
          </p>
          <form
            ref={form}
            className="contactForms"
            action=""
            onSubmit={sendMail}
          >
            <input
              type="text"
              placeholder="Your Name"
              className="name"
              name="from_name"
              value={value.from_name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="your Email"
              className="email"
              name="from_mail"
              value={value.from_mail}
              onChange={handleChange}
              required
            />
            <textarea
              className="msg "
              name="message"
              rows={5}
              placeholder="Your Message"
              id=""
              value={value.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" value="send" className="submitBtn">
              Submit
            </button>
            {/* <div className="links">
              <img src={FacebookIcon} alt="" className="linkImg" />
              <img src={TwitterIcon} alt="" className="linkImg" />
              <img src={YoutubeIcon} alt="" className="linkImg" />
              <img src={InstagramIcon} alt="" className="linkImg" />
            </div> */}
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;
