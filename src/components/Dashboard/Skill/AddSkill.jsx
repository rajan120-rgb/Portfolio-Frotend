import React, { useContext,useState,useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginContext } from '../../../Context/Context';
import Pop from '../PopUp/Pop';
import { toast } from 'react-toastify';

const AddSkill = () => {
    const navigate = useNavigate();
     const { setPopUp, token } = useContext(LoginContext);
      const [formData, setFormData] = useState({
        name: "",
        percentage: "",
        icon:"",
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
    
      const handleSubmit = async (e) => {
        if(!formData.name.trim()){
          toast.error("Language is required")
          return;
        }
        if(!formData.percentage.trim()){
          toast.error("Percentage is required")
          return;
        }
        if(!formData.icon.trim()){
          toast.error("Icon is required")
          return;
        }
        e.preventDefault();
        setPopUp(false);
        try {
          const response = await fetch("http://localhost:8000/api/admin/skills", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData),
          });
    
          const result = await response.json();
          console.log(result);
        } catch (error) {
          console.log(error);
        }
        console.log(formData)
        navigate("/dashboard/skill");
      };
  return (
    <div>
      <div className="create-student student-table">
        <h1>Add New Skill</h1>
        <form action="" >
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name|| ""}
              placeholder="Enter Your Language Name "
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="percent">Percentage:</label>
            <input
              type="number"
              id="percentage"
              name="percentage"
              value={formData.percentage || ""}
              placeholder="Enter Your Percentage "
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="icon">Icon:</label>
            <input
              type="text"
              id="icon"
              name="icon"
              value={formData.icon || ""}
              placeholder="Enter Your Icon "
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button className="btn-view" type="button" onClick={()=>save()} >Save</button>
            <button
              className="btn-dlt"
              type="button"
              onClick={() => navigate("/dashboard/skill")}
            >
              Back
            </button>
          </div>
        </form>
        <Pop handleSubmit={handleSubmit}/>
      </div>
    </div>
  )
}

export default AddSkill
