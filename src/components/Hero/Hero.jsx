import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import profile_image from "../assets/Portfolio-rajan.jpg";
import CV from "../assets/CV.png";
import Swal from "sweetalert2";
import { Link, scrollSpy } from "react-scroll";
import { easeIn, motion } from "framer-motion";
//  import {  toast } from 'react-toastify';

const Hero = ({ hero }) => {
  console.log(hero?.name);
  console.log(hero?.resume);
  const onclick = () => {
    Swal.fire({
      title: "Download Resume?",
      text: "Do you want to download my CV?",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "Download",
      cancelButtonText: "Cancel",
      confirmButtonColor: "#6C63FF",
      allowOutsideClick: false,
    }).then((result) => {
      if (result.isConfirmed) {
        const link = document.createElement("a");
        link.href = hero.resume;
        link.setAttribute("download", "Resume.pdf");

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        Swal.fire({
          title: "Downloaded!",
          text: "Your resume has been downloaded successfully.",
          icon: "success",
          timer: 2000,
          showConfirmButton: false,
        });
      } else {
        Swal.fire({
          title: "Cancelled",
          text: "Resume download cancelled.",
          icon: "info",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    });
  };
console.log(hero)
  // console.log(hero.profile_image);

  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <motion.div
            // initial={{ opacity: 0, x: -100, scale: 0.8 }}
            // animate={{ opacity: 1, x: 0, scale: 1 }}
            // transition={{ duration: 0.6 }}
            className="hero-main-profile"
          >
            <img src={hero?.profile_image} alt="Profile" />
          </motion.div>
          <motion.div
            // initial={{ opacity: 0, x: 100, scale: 0.8 }}
            // animate={{ opacity: 1, x: 0, scale: 1 }}
            // transition={{ duration: 0.6, ease: easeIn }}
            className="hero-intro"
          >
            <div className="hero-intro-hellow">
              <h1>
                Hey , I am {hero?.name}{" "}
                <span>
                  {hero && hero.profession && (
                    <Typewriter
                      words={[
                        hero.profession,
                        // "Frontend Developer",
                        // "React Developer",
                        // "UI Learning"
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="|"
                      typeSpeed={200}
                      deleteSpeed={50}
                      delaySpeed={1500}
                    />
                  )}
                </span>
              </h1>
            </div>
            <p>
              {hero?.description}
              {/* I am a Frontend Developer focused on transforming ideas into
              interactive, responsive, and high-performance web experiences. I
              specialize in building clean UI designs, reusable components, and
              seamless user experiences using modern web technologies. */}
            </p>
            <div className="btn">
              <Link
                to="contacts"
                spy={true}
                offset={-150}
                smooth={true}
                duration={500}
              >
                <button>
                  <span></span>Hire Me
                </button>
              </Link>

              <button onClick={onclick} className="btn-transparent">
                Download Cv
              </button>
            </div>
            <div className="hero-experience">
              <div className="five">
                <p>
                  <span>1+</span>
                  <br />
                  Experiences
                </p>
              </div>
              <hr />
              <div className="five">
                <p>
                  <span>20+</span>
                  <br />
                  Project Done
                </p>
              </div>
              <hr />
              <div className="five">
                <p>
                  <span>10+</span>
                  <br />
                  Happy Clients
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
