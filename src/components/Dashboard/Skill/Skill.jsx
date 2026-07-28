import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../../Context/Context";
import { Api } from "../../../Api/Api";
import Pop from "../PopUp/Pop";
const Skill = () => {
  const navigate = useNavigate();
  const { setPopUp, token } = useContext(LoginContext);
  const [selectedID, setSelectedID] = useState("");
  const [skillTable, setSkillTable] = useState(() => {
    const saved = localStorage.getItem("skillTable");
    return saved ? JSON.parse(saved) : [];
  });

  const save = (id) => {
    setPopUp(true);
    setSelectedID(id);
  };

    const deleteData =async (id) =>{
       setPopUp(false);
      try {
        const dltResponse = await fetch(`http://localhost:8000/api/admin/skills/${id}`,{
          method: "DELETE",
          headers:{
             Authorization: `Bearer ${token}`,
          }
        })
        console.log(dltResponse.status)
      } catch (error) {
        console.log("Error is:" ,error);
      }
    }

  useEffect(() => {
    const table = async () => {
      try {
        const response = await Api("/public/skills");
        console.log(response);
        console.log(response.data);
        if (response.success) {
          const data = response.data;
          setSkillTable(data);
          localStorage.setItem("skillTable", JSON.stringify(data));
        }
      } catch (error) {
        console.log("Unable to fetching....", error);
      }
    };
    table();
  }, []);
  return (
    <>
      <div className="student-table">
        <h1>Portfolio Table Skill</h1>
        <div className="table-container">
          <button
            className="btn btn-add"
            onClick={() => navigate("/dashboard/addSkill")}
          >
            Add New Data
          </button>

          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Language</th>
                <th>Percentage</th>
                <th>Icon</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {skillTable.map((item, index) => (
              <tr key={index}>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.percentage}</td>
                <td style={{ maxWidth: "300px" }}>{item.icon}</td>
                <td>
                  <button
                    className="btn btn-view"
                    onClick={() => navigate(`/dashboard/viewSkill/${item.id}`)}
                  >
                    View
                  </button>

                  <button
                    className="btn btn-edit"
                    onClick={() => navigate(`/dashboard/editSkill/${item.id}`)}
                  >
                    Edit
                  </button>

                  <button className="btn btn-dlt" onClick={()=>save(item.id)}>Delete</button>
                </td>
              </tr>
               ))} 
            </tbody>
          </table>
          <Pop handleSubmit={()=>deleteData(selectedID)} />
        </div>
      </div>
    </>
  );
};

export default Skill;
