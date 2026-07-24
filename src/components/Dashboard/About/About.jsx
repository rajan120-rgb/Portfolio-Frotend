import React, { useContext, useEffect, useRef, useState } from "react";
import "./About.css";
import { useSearchParams } from "react-router-dom";
import { Api } from "../../../Api/Api";
import { LoginContext } from "../../../Context/Context";
import Pop from "../PopUp/Pop";

const About = () => {
  const { token , setPopUp} = useContext(LoginContext);

  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    description: "",
    service: "",
    design:""
  });

  const [image, setImage] = useState({
    profile_image: null,
    resume: null,
  });
  const imgRef = useRef();
  const cvRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setImage({
      ...image,
      [e.target.name]: e.target.files[0],
    });
  };

  const save = () => {
    setPopUp(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
      setPopUp(false);
    const data = new FormData();
    data.append("name", formData.name);
    data.append("profession", formData.profession);
    data.append("description", formData.description);
    data.append("service", formData.service);
    data.append("design", formData.design);
    data.append("profile_image", image.profile_image);
    data.append("resume", image.resume);
    console.log(formData);
    console.log(image);

    try {
      const response = await fetch("http://localhost:8000/api/admin/about", {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: data,
      });

      const result = await response.json();
      console.log(result);

      setFormData({
        name: "",
        profession: "",
        service: "",
        design:"",
        description: "",
      });
      setImage({
        profile_image: null,
        resume: null,
      });
      if (imgRef.current) {
        imgRef.current.value = "";
      }
      if (cvRef.current) {
        cvRef.current.value = "";
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="about-dashboard">
        <h1>About</h1>
        <div className="about-form-dashboard">
          <form action="">
            <div className="image-url">
              <div className="image-link">
                <label htmlFor="">Image</label>
                <input
                  type="file"
                  ref={imgRef}
                  name="profile_image"
                  // value={formData.image}
                  placeholder="Enter Your Url "
                  onChange={handleImage}
                  accept="image/*"
                />
              </div>

              <div className="image-link">
                <label htmlFor="">CV</label>
                <input
                  type="file"
                  name="resume"
                  ref={cvRef}
                  accept="application/pdf"
                  // value={formData.name}
                  placeholder="Upload Your CV "
                  onChange={handleImage}
                />
              </div>
              <div className="image-link">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name || ""}
                  placeholder="Enter Your Name "
                  onChange={handleChange}
                />
              </div>
              <div className="image-link">
                <label htmlFor="">Profession</label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession || ""}
                  placeholder="Enter Your Profession "
                  onChange={handleChange}
                />
              </div>
              <div className="image-link">
                <label htmlFor="">Service</label>
                <input
                  type="text"
                  name="service"
                  value={formData.service || ""}
                  placeholder="Enter Your Service "
                  onChange={handleChange}
                />
              </div>
              <div className="image-link">
                <label htmlFor="">Design</label>
                <input
                  type="text"
                  name="design"
                  value={formData.design || ""}
                  placeholder="Enter Your Service Design "
                  onChange={handleChange}
                />
              </div>
              <div className="image-link">
                <label htmlFor="">Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description || ""}
                  placeholder="Enter Your Description "
                  onChange={handleChange}
                />
              </div>
              <button type="button" onClick={() => save()}>
                Save Changes
              </button>
            </div>
          </form>
        </div>
        <Pop handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default About;

