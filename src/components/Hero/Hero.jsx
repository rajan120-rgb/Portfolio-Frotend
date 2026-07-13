import React from "react";
import { Typewriter } from "react-simple-typewriter";
import "./Hero.css";
import hand_icon from "../assets/hand_icon.png";
import profile_image from "../assets/Portfolio-rajan.jpg";
import CV from '../assets/CV.png'
import Swal from "sweetalert2";
import { Link ,  scrollSpy} from "react-scroll";
//  import {  toast } from 'react-toastify';

const Hero = () => {


//   const onclick =()=>{

//     Swal.fire({
//   title: "Do you want to save the changes?",
//   showDenyButton: true,
//   showCancelButton: true,
//   confirmButtonText: "Save",
//   denyButtonText: `Don't save`
// }).then((result) => {
//   /* Read more about isConfirmed, isDenied below */
//   if (result.isConfirmed) Swal.fire("Saved!", "", "success");
//   else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
// });
//     }

  const onclick = () => {
  Swal.fire({
    title: "Download Resume?",
    text: "Do you want to download my CV?",
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Download",
    cancelButtonText: "Cancel",
    confirmButtonColor: "#6C63FF",
    allowOutsideClick: false
  }).then((result) => {
    if (result.isConfirmed) {
      const link = document.createElement("a");
      link.href = CV;
      link.download = "CV.png";
      link.click();

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



 

  return (
    <>
      <div className="hero">
        <div className="hero-left">
          <div className="hero-main-profile">
            <img src={profile_image} alt="" />
          </div>
          <div className="hero-intro">
            <div className="hero-intro-hellow">
              <h1>
                Hey , I am Rajan {" "}
                <span>
                  <Typewriter
                  words={[
                    "Frontend Developer",
                    "React Developer",
                    "UI Learning"
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={200}
                  deleteSpeed={50}
                  delaySpeed={1500}
                  />
                </span>
              </h1>
            </div>
            <p>
              I am a Frontend Developer focused on transforming ideas into
              interactive, responsive, and high-performance web experiences. I
              specialize in building clean UI designs, reusable components, and
              seamless user experiences using modern web technologies.
            </p>
            <div className="btn">
               <Link to="contacts" spy={true}  offset={-150} smooth={true} duration={500}><button><span></span>Hire Me </button></Link>
              
              <button onClick={onclick} className="btn-transparent"> Download CV</button>
            </div>
            <div className="hero-experience">
              <div className="five">
                <p><span>1+</span><br />Experiences</p>
              </div>
              <hr />
              <div className="five">
                <p><span>20+</span><br />Project Done</p>
              </div>
              <hr />
              <div className="five">
                <p><span>10+</span><br />Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
