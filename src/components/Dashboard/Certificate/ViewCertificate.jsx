import React, { useContext,useState,useEffect } from 'react'
import { LoginContext } from '../../../Context/Context';
import { useNavigate,useParams } from 'react-router-dom';
import { Api } from "../../../Api/Api";

const ViewCertificate = () => {
     const {token} = useContext(LoginContext);
    const navigate = useNavigate();
    const [view , setView] = useState("");
    const {id} = useParams();

     useEffect(() => {
        const viewData = async () => {
          const data = await Api(`/admin/certificates/${id}`, token);
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
            <strong>Title:</strong>
            {view.title}
          </p>
          <p>
            <strong>Organization:</strong>
            {view.organization}
          </p>
        </div>
        <button
          onClick={() => navigate("/dashboard/certificate")}
          className="btn-dlt"
        >
          Back
        </button>
      </div>
    </>
  )
}

export default ViewCertificate
