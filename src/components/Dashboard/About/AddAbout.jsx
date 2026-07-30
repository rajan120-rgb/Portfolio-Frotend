import React, { useContext, useState, useRef,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../Context/Context";
import Pop from "../PopUp/Pop";
import { toast } from "react-toastify";
import { handleSave } from "../../utils/handleSave";
import { handleEnter } from "../../utils/KeyboardNavigation";

const AddAbout = () => {
  const navigate = useNavigate();
  const { token, setPopUp,popUp } = useContext(LoginContext);
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

   useEffect(()=>{
      const keyHandler = (e)=>{
        handleSave(e,popUp,setPopUp,handleSubmit);
      };
      document.addEventListener("keydown",keyHandler)
      return ()=>{
        document.removeEventListener("keydown",keyHandler)
      };
    },[popUp])

  const handleSubmit = async (e) => {
    if(!image.profile_image){
      toast.error("Image is required")
      return;
    }
    if(!image.resume){
      toast.error("Resume is required")
      return;
    }
    if(!formData.name.trim()){
      toast.error("Name is Required")
      return;
    }
    if(!formData.profession.trim()){
      toast.error("Profession is Required")
      return;
    }
    if(!formData.description.trim()){
      toast.error("Image is Required")
      return;
    }
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
    navigate("/dashboard/about")
  };

  return (
    <>
      <div className="create-student student-table">
        <h1>Add New About</h1>
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
              onKeyDown={handleEnter}
              required
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
              onKeyDown={handleEnter}
              required
            />
          </div>
          <div>
            <label htmlFor="place">Name:</label>
            <input
              type="text"
              id="place"
              name="name"
              value={formData.name }
              placeholder="Enter Your Name "
              onChange={handleChange}
              onKeyDown={handleEnter}
              required
            />
          </div>
          <div>
            <label htmlFor="profession">Profession:</label>
            <input
              type="text"
              id="profession"
              name="profession"
              value={formData.profession }
              placeholder="Enter Your Profession "
              onChange={handleChange}
              onKeyDown={handleEnter}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description }
              placeholder="Enter Your Description "
              onChange={handleChange}
              onKeyDown={handleEnter}
              required
            />
          </div>

          <div>
            <button className="btn-view" type="button" onClick={()=>{
              save();
            }}>
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
        <Pop handleSubmit={handleSubmit}/>
      </div>
    </>
  );
};

export default AddAbout;
