import React, { useContext,useState,useEffect } from "react";
import { useNavigate,useParams } from "react-router-dom";
import { LoginContext } from "../../../Context/Context";
import Pop from "../PopUp/Pop";

const EditSkill = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { token, setPopUp } = useContext(LoginContext);
  const [formData, setFormData] = useState({
    name: "",
    percentage: "",
    icon:""
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
    fetch(`http://localhost:8000/api/admin/skills/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({
          name: data.data.name,
          percentage: data.data.percentage,
          icon:data.data.icon,
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
        `http://localhost:8000/api/admin/skills/${id}`,
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
    navigate("/dashboard/skill");
  };

  return (
    <>
      <div className="create-student student-table">
        <h1>Edit Service</h1>
        <form action="">
          <div>
            <label htmlFor="language">Language:</label>
            <input
            className="text-black"
              type="text"
              id="language"
              name="name"
              value={formData.name || ""}
              placeholder="Enter Your Language "
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Percentage:</label>
            <input
            className="text-black"
              type="number"
              id="description"
              name="description"
              value={formData.percentage || ""}
              placeholder="Enter Your Percentage "
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Icon:</label>
            <input
            className="text-black"
              type="text"
              id="description"
              name="icon"
              value={formData.icon || ""}
              placeholder="Enter Your Icon "
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
              onClick={() => navigate("/dashboard/skill")}
            >
              Back
            </button>
          </div>
        </form>
        <Pop save={"Update"} update={"Do you want to update it?"} handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default EditSkill;
