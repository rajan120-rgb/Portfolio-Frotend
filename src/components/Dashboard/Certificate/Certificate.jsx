import React, { useContext,useState,useEffect } from "react";
import { LoginContext } from "../../../Context/Context";
import { Api } from "../../../Api/Api";
import { useNavigate } from "react-router-dom";
import Pop from "../PopUp/Pop";

const Certificate = () => {
  const { setPopUp, token } = useContext(LoginContext);
  const navigate = useNavigate();
  const [selectedID, setSelectedID] = useState("");
  const [certificateTable, setCertificateTable] = useState(() => {
    const saved = localStorage.getItem("resumeTable");
    return saved ? JSON.parse(saved) : [];
  });

  const save = (id) => {
    setPopUp(true);
    setSelectedID(id);
  };

  const deleteData = async (id) => {
    setPopUp(false);
    try {
      const dltResponse = await fetch(
        `http://localhost:8000/api/admin/certificates/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
      console.log(dltResponse.status);
    } catch (error) {
      console.log("Error is:", error);
    }
  };

  useEffect(() => {
    const table = async () => {
      try {
        const response = await Api("/public/certificates");
        console.log(response);
        console.log(response.data);
        if (response.success) {
          const data = response.data;
          setCertificateTable(data);
          localStorage.setItem("resumeTable", JSON.stringify(data));
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
        <h1>Portfolio Table Certificate</h1>
        <div className="table-container">
          <button
            className="btn btn-add"
            onClick={() => navigate("/dashboard/addCertificate")}
          >
            Add New Data
          </button>

          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Title</th>
                <th>Organization</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {certificateTable.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.title}</td>
                  <td>{item.organization}</td>
                  <td>
                    <button
                      className="btn btn-view"
                      onClick={() =>
                        navigate(`/dashboard/viewCertificate/${item.id}`)
                      }
                    >
                      View
                    </button>

                    <button
                      className="btn btn-edit"
                      onClick={() =>
                        navigate(`/dashboard/editCertificate/${item.id}`)
                      }
                    >
                      Edit
                    </button>

                    <button
                      className="btn btn-dlt"
                      onClick={() => save(item.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Pop handleSubmit={() => deleteData(selectedID)} />
        </div>
      </div>
    </>
  );
};

export default Certificate;
