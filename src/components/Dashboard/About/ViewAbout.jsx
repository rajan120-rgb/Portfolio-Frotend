import React, { useContext, useEffect, useState } from "react";
import { Api } from "../../../Api/Api";
import { useNavigate, useParams } from "react-router-dom";
import { LoginContext } from "../../../Context/Context";

const ViewAbout = () => {
  const { token } = useContext(LoginContext);
  const navigate = useNavigate();
  const { id } = useParams();
  const [view, setView] = useState(()=>{
    const savedView = localStorage.getItem("viewDetail")
    return savedView? savedView:""; 
  });

  useEffect(() => {
    const viewData = async () => {
      const data = await Api(`/admin/about/${id}`, token);
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
        <h1>View About</h1>
        <div className="details" style={{ color: "black" }}>
          <p>
            <strong>ID:</strong>
            {view.id}
          </p>
          <p>
            <strong>Name:</strong>
            {view.name}
          </p>
          <p>
            <strong>Profession:</strong>
            {view.profession}
          </p>
          <p>
            <strong>Profile Image:</strong>
            <img src={view.profile_image} alt="image" className="profile-img" />
          </p>
          <p>
            <strong>Resume:</strong>
            <a href={view.resume}> 📄 Resume</a>
          </p>
        </div>
        <button
          onClick={() => navigate("/dashboard/about")}
          className="btn-dlt"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default ViewAbout;
