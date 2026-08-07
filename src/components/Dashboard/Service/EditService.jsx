import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../../../Context/Context";
import Pop from "../PopUp/Pop";

const EditService = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token, setPopUp } = useContext(LoginContext);
  const [formData, setFormData] = useState({
    title: "",
    description: "",
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
    fetch(`http://localhost:8000/api/admin/services/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({
          title: data.data.title,
          description: data.data.description,
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
        `http://localhost:8000/api/admin/services/${id}`,
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
    navigate("/dashboard/service");
  };

  return (
    <>
      <div className="create-student student-table">
        <h1>Edit Service</h1>
        <form action="">
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
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
                <textarea
              className="text-black min-h-30"
              id=""
              type="text"
              name="description"
              value={formData.description || ""}
              placeholder="Enter Your Description "
              onChange={handleChange}
            ></textarea>
          </div>

          <div style={{ display: "flex", flexDirection: "row" }}>
            <button className="btn-view" type="button" onClick={() => save()}>
              Update
            </button>
            <button
              className="btn-dlt"
              type="button"
              onClick={() => navigate("/dashboard/service")}
            >
              Back
            </button>
          </div>
        </form>
        <Pop save={"Update"} update={"Do you want to update it?"} handleSubmit={handleSubmit}/>
      </div>
    </>
  );
};

export default EditService;
