import React, { useContext,useState,useEffect } from 'react'
import { LoginContext } from '../../../Context/Context';
import { useNavigate,useParams } from 'react-router-dom';
import { Api } from "../../../Api/Api";

const ViewSkill = () => {
     const {token} = useContext(LoginContext);
    const navigate = useNavigate();
    const [viewSkill , setViewSkill] = useState("");
    const {id} = useParams();

     useEffect(() => {
        const viewData = async () => {
          const data = await Api(`/admin/skills/${id}`, token);
          console.log(data);
          if (data.success) {
            setViewSkill(data.data);
          }
        };
        viewData();
      }, [id]);
  return (
    <>
     <div className="view-detail create-student student-table">
        <h1>View Skill</h1>
        <div className="details" style={{ color: "black" }}>
          <p>
            <strong>ID:</strong>
            {viewSkill.id}
          </p>
          <p>
            <strong>Language:</strong>
            {viewSkill.name}
          </p>
          <p>
            <strong>Percentage:</strong>
            {viewSkill.percentage}
          </p>
          <p>
            <strong>Icon:</strong>
            {viewSkill.icon}
          </p>
        </div>
        <button
          onClick={() => navigate("/dashboard/skill")}
          className="btn-dlt"
        >
          Back
        </button>
      </div>
    </>
  )
}

export default ViewSkill
