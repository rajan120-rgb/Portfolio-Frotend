import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../../Api/Api";
import { LoginContext } from "../../../Context/Context";
import Pop from "../PopUp/Pop";

const Service = () => {
    const {setPopUp, token} = useContext(LoginContext);
  const navigate = useNavigate();
  const [ selectedID, setSelectedID] = useState("");
  const [serviceTable, setServiceTable] = useState(() => {
    const saved = localStorage.getItem("serviceTable");
    return saved ? JSON.parse(saved) : [];
  });

    const save = (id) => {
    setPopUp(true);
   setSelectedID(id);
  };

  const deleteData =async (id) =>{
     setPopUp(false);
    try {
      const dltResponse = await fetch(`http://localhost:8000/api/admin/services/${id}`,{
        method: "DELETE",
        headers:{
           Authorization: `Bearer ${token}`,
        }
      })
      console.log(dltResponse.status)
      if(dltResponse.ok){
        const dltData = serviceTable.filter((item)=>item.id!==id)
       setServiceTable(dltData);
     localStorage.setItem("serviceTable", JSON.stringify(dltData));
      }
    } catch (error) {
      console.log("Error is:" ,error);
    }
  }

  useEffect(() => {
    const table = async () => {
      try {
        const response = await Api("/public/services");
        // console.log(response);
        // console.log(response.data);
        if (response.success) {
          const data = response.data;
          setServiceTable(data);
          localStorage.setItem("serviceTable", JSON.stringify(data));
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
        <h1>Portfolio Table Service</h1>
        <div className="table-container">
          <button
            className="btn btn-add"
            onClick={() => navigate("/dashboard/addService")}
          >
            Add New Data
          </button>

          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Title</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {serviceTable.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td style={{ maxWidth: "300px" }}>{item.description}</td>
                  <td>
                    {/* <button
                      className="btn btn-view"
                      onClick={() => navigate(`/dashboard/viewService/${item.id}`)}
                    >
                      View
                    </button> */}

                    <button
                      className="btn btn-edit"
                      onClick={() => navigate(`/dashboard/editService/${item.id}`)}
                    >
                      Edit
                    </button>

                    <button className="btn btn-dlt" onClick={()=>save(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pop save={"Delete"} update={"Do you want to delete it?"} handleSubmit={()=>deleteData(selectedID)} />
        </div>
      </div>
    </>
  );
};

export default Service;
