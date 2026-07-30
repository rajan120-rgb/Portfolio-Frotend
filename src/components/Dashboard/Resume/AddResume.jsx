import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../Context/Context";
import Pop from "../PopUp/Pop";
import { toast } from "react-toastify";
import { handleSave } from "../../utils/handleSave";
import { handleEnter } from "../../utils/KeyboardNavigation";

const AddResume = () => {
  const { setPopUp, token ,popUp} = useContext(LoginContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    institution_name: "",
    start_year: "",
    degree: "",
    field_of_study: "",
    gpa: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
    if(!formData.institution_name.trim()){
      toast.error("Institution name is required")
      return;
    }
    if(!formData.start_year.trim()){
      toast.error("Year is required")
      return;
    }
    if(!formData.degree.trim()){
      toast.error("Degree is required")
      return;
    }
    if(!formData.field_of_study.trim()){
      toast.error("Field is required")
      return;
    }
    if(!formData.gpa.trim()){
      toast.error("GPA is required")
      return;
    }
    e.preventDefault();
    setPopUp(false);
    try {
      const response = await fetch(
        "http://localhost:8000/api/admin/educations",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    console.log(formData);
    navigate("/dashboard/resume");
  };
  return (
    <>
      <div className="create-student student-table">
        <h1>Add New Resume</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Institution:</label>
            <input
              type="text"
              id="title"
              name="institution_name"
              value={formData.institution_name || ""}
              placeholder="Enter Your Institution "
              onChange={handleChange}
              onKeyDown={handleEnter}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Year:</label>
            <input
              type="number"
              id="description"
              name="start_year"
              value={formData.start_year || ""}
              placeholder="Enter Your Year "
              onChange={handleChange}
               onKeyDown={handleEnter}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Degree:</label>
            <input
              type="text"
              id="description"
              name="degree"
              value={formData.degree || ""}
              placeholder="Enter Your Degree "
              onChange={handleChange}
               onKeyDown={handleEnter}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Faculty:</label>
            <input
              type="text"
              id="description"
              name="field_of_study"
              value={formData.field_of_study || ""}
              placeholder="Enter Your Faculty "
              onChange={handleChange}
               onKeyDown={handleEnter}
              required
            />
          </div>
          <div>
            <label htmlFor="description">GPA:</label>
            <input
              type="number"
              id="description"
              name="gpa"
              value={formData.gpa || ""}
              placeholder="Enter Your GPA "
              onChange={handleChange}
               onKeyDown={handleEnter}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button className="btn-view" type="button" onClick={() => save()}>
              Save
            </button>
            <button
              className="btn-dlt"
              type="button"
              onClick={() => navigate("/dashboard/resume")}
            >
              Back
            </button>
          </div>
        </form>
        <Pop handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default AddResume;
