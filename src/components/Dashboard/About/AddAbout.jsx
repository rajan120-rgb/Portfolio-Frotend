import React, { useContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../Context/Context";

const AddAbout = () => {
  const navigate = useNavigate();
  const { token, setPopUp } = useContext(LoginContext);
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    description: "",
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
        design: "",
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
      <div className="create-student student-table">
        <h1>Add New Student</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="image">Image:</label>
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
          <div>
            <label htmlFor="resume">Resume:</label>
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
          <div>
            <label htmlFor="place">Name:</label>
            <input
              type="text"
              id="place"
              name="name"
              value={formData.name || ""}
              placeholder="Enter Your Name "
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="profession">Profession:</label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession || ""}
              placeholder="Enter Your Profession "
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description || ""}
              placeholder="Enter Your Description "
              onChange={handleChange}
            />
          </div>

          <div>
            <button className="btn-view" type="submit" onClick={()=>navigate("/dashboard/about")}>
              Save
            </button>
            <button
              className="btn-dlt"
              type="button"
              onClick={() => navigate("/dashboard/about")}
            >
              Back
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddAbout;
