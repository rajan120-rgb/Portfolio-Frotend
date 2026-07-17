import React, { useRef, useState } from "react";
import "./About.css";
import { useSearchParams } from "react-router-dom";

const About = () => {
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    skill: "",
    description: "",
  });

  const [image, setImage] = useState(null);
  const fileRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("profession", formData.profession);
    data.append("description", formData.description);
    data.append("skill", formData.skill);
    data.append("image", image);

    console.log(formData);
    console.log(image);

    try {
      const response = await fetch("http://localhost:8000/api/admin/about", {
        method: "POST",
        body: data,
      });

      const result = await response.json();
      console.log(result)

      console.log(result);
      alert("Saved Successfully");
      setFormData({
        name: "",
        profession: "",
        skill: "",
        description: "",
      });
      setImage(null);
      if (fileRef.current) {
        fileRef.current.value = "";
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
              <div className="img">
                <div className="image-link">
                  <label htmlFor="">Image</label>
                  <input
                    type="file"
                    ref={fileRef}
                    name="image"
                    // value={formData.image}
                    placeholder="Enter Your Url "
                    onChange={handleImage}
                    accept="image/*"
                  />
                </div>
              </div>
              <div className="image-link">
                <label htmlFor="">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  placeholder="Enter Your Name "
                  onChange={handleChange}
                />
              </div>
              <div className="image-link">
                <label htmlFor="">Profession</label>
                <input
                  type="text"
                  name="profession"
                  value={formData.profession}
                  placeholder="Enter Your Profession "
                  onChange={handleChange}
                />
              </div>
              <div className="image-link">
                <label htmlFor="">Skill</label>
                <input
                  type="text"
                  name="skill"
                  value={formData.skill}
                  placeholder="Enter Your Skill "
                  onChange={handleChange}
                />
              </div>
              <div className="image-link">
                <label htmlFor="">Description</label>
                <input
                  type="text"
                  name="description"
                  value={formData.description}
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
