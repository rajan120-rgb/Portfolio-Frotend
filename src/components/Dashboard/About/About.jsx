
import React, { useContext, useEffect, useState } from "react";
import "./About.css";
import { Api } from "../../../Api/Api";
import { Link, useNavigate } from "react-router-dom";
import { LoginContext } from "../../../Context/Context";
import Pop from "../PopUp/Pop";

const About = () => {
  const { token, setPopUp } = useContext(LoginContext);
  const navigate = useNavigate();
  const [aboutTable, setAboutTable] = useState(() => {
    const saved = localStorage.getItem("aboutTable");
    return saved ? JSON.parse(saved) : [];
  });
  const [selectedID, setSelectedID] = useState(null);

   const save = (id) => {
    setPopUp(true);
   setSelectedID(id);
  };

  const deleteData =async (id) =>{
     setPopUp(false);
    try {
      const dltResponse = await fetch(`http://localhost:8000/api/admin/about/${id}`,{
        method: "DELETE",
        headers:{
           Authorization: `Bearer ${token}`,
        }
      })
      console.log(dltResponse.status)
      if(dltResponse.ok){
        const dltData = aboutTable.filter((item)=>item.id!==id)
        setAboutTable(dltData);
        localStorage.setItem("aboutTable", JSON.stringify(dltData));
      }
    } catch (error) {
      console.log("Error is:" ,error);
    }
  }

  useEffect(() => {
    const table = async () => {
      try {
        const response = await Api("/public/about");
        console.log(response);
        console.log(response.data);
        if (response.success) {
          const data = response.data;
          setAboutTable(data);
          localStorage.setItem("aboutTable", JSON.stringify(data));
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
        <h1>Portfolio About Table</h1>
        <div className="table-container">
          <button
            className="btn btn-add"
            onClick={() => navigate("/dashboard/addAbout")}
          >
            Add New Data
          </button>
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Name</th>
                <th>Profession</th>
                {/* <th>Description</th> */}
                <th>Profile Image</th>
                <th>Resume</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {aboutTable.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.name}</td>
                  <td>{item.profession}</td>
                  {/* <td style={{maxWidth:"300px"}}>{item.description}</td> */}
                  <td>
                    <img
                      src={item.profile_image}
                      alt={item.name}
                      className="profile-img"
                    />
                  </td>
                  <td>
                    <a
                      href={item.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📄 Resume
                    </a>
                  </td>

                  <td className="button">
                    <button
                      className="btn btn-view"
                      onClick={() => navigate(`/dashboard/viewAbout/${item.id}`)}
                    >
                      View
                    </button>

                    <button
                      className="btn btn-edit"
                      onClick={() => navigate(`/dashboard/editAbout/${item.id}`)}
                    >
                      Edit
                    </button>

                    <button className="btn btn-dlt"  onClick={()=>save(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pop handleSubmit={()=>deleteData(selectedID)} />
        </div>
        </div>
      </div>
    </>
  );
};

export default About;
