import React, { useContext, useState, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../Context/Context";
import Pop from "../PopUp/Pop";
import { toast } from "react-toastify";
import { handleEnter } from "../../utils/KeyboardNavigation";
import { handleSave } from "../../utils/handleSave";

const AddCertificate = () => {
  const { setPopUp, token ,popUp} = useContext(LoginContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    organization: "",
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
    if (!formData.title.trim()) {
      toast.error("Title is required");
      return;
    }
    if (!formData.organization.trim()) {
      toast.error("Organization name is required");
      return;
    }
    e.preventDefault();
    setPopUp(false);
    try {
      const response = await fetch(
        "http://localhost:8000/api/admin/certificates",
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
    navigate("/dashboard/certificate");
  };
  return (
    <>
      <div className="create-student student-table">
        <h1>Add New Certificate</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
            className="text-black"
              type="text"
              id="title"
              name="title"
              value={formData.title || ""}
              placeholder="Enter Your Title "
              onChange={handleChange}
              onKeyDown={handleEnter}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Organization:</label>
            <input
            className="text-black"
              type="text"
              id="description"
              name="organization"
              value={formData.organization || ""}
              placeholder="Enter Your Organization "
              onChange={handleChange}
              onKeyDown={handleEnter}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button className="btn-view" type="button" onClick={() => save()} >
              Save
            </button>
            <button
              className="btn-dlt"
              type="button"
              onClick={() => navigate("/dashboard/certificate")}
            >
              Back
            </button>
          </div>
        </form>
        <Pop save={"Save"} update={"Do you want to save it?"} handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default AddCertificate;
