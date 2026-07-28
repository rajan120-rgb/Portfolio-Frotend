import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../../../Context/Context";
import Pop from "../PopUp/Pop";

const EditResume = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token, setPopUp } = useContext(LoginContext);
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

  useEffect(() => {
    fetch(`http://localhost:8000/api/admin/educations/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({
          institution_name: data.data.institution_name,
          degree: data.data.degree,
          field_of_study: data.data.field_of_study,
          start_year: data.data.start_year,
          gpa: data.data.gpa,
        });
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPopUp(false);
    console.log(formData);
    console.log("handlesubmit is called");

    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/educations/${id}`,
        {
          method: "PUT",
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
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button className="btn-view" type="button" onClick={() => save()}>
              Update
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

export default EditResume;
