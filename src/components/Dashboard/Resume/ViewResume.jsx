import React, { useContext,useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { LoginContext } from '../../../Context/Context';
import { Api } from "../../../Api/Api";

const ViewResume = () => {
     const {token} = useContext(LoginContext);
    const navigate = useNavigate();
    const [view , setView] = useState("");
    const {id} = useParams();

     useEffect(() => {
        const viewData = async () => {
          const data = await Api(`/admin/educations/${id}`, token);
          console.log(data);
          if (data.success) {
            setView(data.data);
            localStorage.setItem("viewDetail",data.data)
          }
        };
        viewData();
      }, [id]);
    
      useEffect(() => {
        console.log(view);
      }, [view]);
  return (
    <>
     <div className="view-detail create-student student-table">
        <h1>View Service</h1>
        <div className="details" style={{ color: "black" }}>
          <p>
            <strong>ID:</strong>
            {view.id}
          </p>
          <p>
            <strong>Institution:</strong>
            {view.institution_name}
          </p>
          <p>
            <strong>Year:</strong>
            {view.start_year}
          </p>
          <p>
            <strong>Degree:</strong>
            {view.degree}
          </p>
          <p>
            <strong>Faculty:</strong>
            {view.field_of_study}
          </p>
          <p>
            <strong>GPA:</strong>
            {view.gpa}
          </p>
        </div>
        <button
          onClick={() => navigate("/dashboard/resume")}
          className="btn-dlt"
        >
          Back
        </button>
      </div>
    </>
  )
}

export default ViewResume
