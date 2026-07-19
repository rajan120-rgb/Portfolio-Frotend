import React, { useRef, useState } from "react";
import "./About.css";
import { useSearchParams } from "react-router-dom";
import { Api } from "../../../Api/Api";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    description: "",
    service: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("profession", formData.profession);
    data.append("description", formData.description);
    data.append("service", formData.service);
    data.append("profile_image", image.profile_image);
    data.append("resume", image.resume);

    console.log(formData);
    console.log(image);

    try {
      //  const token = "3|RFOfDBr4wqocOoT4G3dvOG4mBknG4saxtC55xykA180d6006"
      const response = await fetch("http://localhost:8000/api/admin/about", {
        method: "POST",
         headers: {
    Accept: "application/json",
  },
        body: data,
        //  redirect: "manual",
      });
//       console.log(response.status);
// console.log(response.type);
// console.log(response.headers.get("location"));

      // if (!response.ok) {
      //   const text = await response.text();
      //   console.log(text);
      //   return;
      // }
      //  console.log("Status:", response.status);

      const result = await response.json();
      console.log(result);

      alert("Saved Successfully");
      setFormData({
        name: "",
        profession: "",
        skill: "",
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
          <form onSubmit={handleSubmit} action="">
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
                  placeholder="Enter Your Skill "
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
              <button>Save Changes</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;

// import { useState } from "react";

// function ImageUpload() {
//   const [imageUrl, setImageUrl] = useState("");

//   const handleImage = async (e) => {
//     const file = e.target.files[0];

//     const formData = new FormData();
//     formData.append("image", file);

//     const response = await fetch("http://localhost:5000/upload", {
//       method: "POST",
//       body: formData,
//     });

//     const data = await response.json();

//     setImageUrl(data.url);
//   };

//   return (
//     <div>
//       <input type="file" onChange={handleImage} />

//       <input
//         type="text"
//         value={imageUrl}
//         readOnly
//       />
//     </div>
//   );
// }

// export default ImageUpload;
