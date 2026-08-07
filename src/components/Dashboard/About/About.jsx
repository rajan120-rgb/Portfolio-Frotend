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

  // const deleteData =async (id) =>{
  //    setPopUp(false);
  //   try {
  //     const dltResponse = await fetch(`http://localhost:8000/api/admin/about/${id}`,{
  //       method: "DELETE",
  //       headers:{
  //          Authorization: `Bearer ${token}`,
  //       }
  //     })
  //     console.log(dltResponse.status)
  //     if(dltResponse.ok){
  //       const dltData = aboutTable.filter((item)=>item.id!==id)
  //       setAboutTable(dltData);
  //       localStorage.setItem("aboutTable", JSON.stringify(dltData));
  //     }
  //   } catch (error) {
  //     console.log("Error is:" ,error);
  //   }
  // }

  useEffect(() => {
    const table = async () => {
      console.log("Token:", token);
      try {
        const response = await fetch("http://localhost:8000/api/admin/about", {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        console.log(result);
        console.log(result.data);
        if (result.success) {
          const data = result.data;
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
          {aboutTable ? (
            ""
          ) : (
            <button
              className="btn btn-add"
              onClick={() => navigate("/dashboard/addAbout")}
            >
              Add New Data
            </button>
          )}
          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  {/* <th>SN</th> */}
                  <th>Name</th>
                  <th>Profession</th>
                  {/* <th>Description</th> */}
                  <th>Profile Image</th>
                  <th>Resume</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* {aboutTable?.map((item, index) => ( */}
                <tr>
                  {/* <td>{index+1}</td> */}
                  <td>{aboutTable?.name}</td>
                  <td>{aboutTable?.profession}</td>
                  {/* <td style={{maxWidth:"300px"}}>{item.description}</td> */}
                  <td>
                    <img
                      src={aboutTable?.profile_image}
                      alt={aboutTable?.name}
                      className="profile-img"
                    />
                  </td>
                  <td>
                    <a
                      href={aboutTable?.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      📄 Resume
                    </a>
                  </td>

                  <td className="button">
                    {/* <button
                      className="btn btn-view"
                      onClick={() => navigate(`/dashboard/viewAbout/${aboutTable.id}`)}
                    >
                      View
                    </button> */}

                    <button
                      className="btn btn-edit"
                      onClick={() =>
                        navigate(`/dashboard/editAbout/${aboutTable.id}`)
                      }
                    >
                      Edit
                    </button>

                    {/* <button className="btn btn-dlt"  onClick={()=>save(aboutTable.id)}>Delete</button> */}
                  </td>
                </tr>
                {/* ))} */}
              </tbody>
            </table>
            <Pop handleSubmit={() => deleteData(selectedID)} />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
