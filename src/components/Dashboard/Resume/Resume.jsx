import React, { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Api } from "../../../Api/Api";
import { LoginContext } from "../../../Context/Context";
import Pop from "../PopUp/Pop";
import { FileX } from "lucide-react";

const Resume = () => {
  const { setPopUp, token } = useContext(LoginContext);
  const navigate = useNavigate();
  const [selectedID, setSelectedID] = useState("");
  const [resumeTable, setResumeTable] = useState(() => {
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
        `http://localhost:8000/api/admin/educations/${id}`,
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
        const response = await Api("/public/educations");
        console.log(response);
        console.log(response.data);
        if (response.success) {
          const data = response.data;
          setResumeTable(data);
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
        <h1>Portfolio Table Resume</h1>
        <div className="table-container">
          <button
            className="btn btn-add"
            onClick={() => navigate("/dashboard/addResume")}
          >
            Add New Data
          </button>

          <table>
            <thead>
              <tr>
                <th>SN</th>
                <th>Institution</th>
                <th>Year</th>
                <th>Degree</th>
                <th>Faculty</th>
                <th>GPA</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {resumeTable.map((item, index) => (
                <tr key={index}>
                  <td>{index+1}</td>
                  <td>{item.institution_name}</td>
                  <td>{item.start_year}</td>
                  <td style={{ maxWidth: "300px" }}>{item.degree}</td>
                   <td>{item.field_of_study}</td>
                   <td>{item.gpa}</td>
                  <td>
                    <button
                      className="btn btn-view"
                      onClick={() =>
                        navigate(`/dashboard/viewResume/${item.id}`)
                      }
                    >
                      View
                    </button>

                    <button
                      className="btn btn-edit"
                      onClick={() =>
                        navigate(`/dashboard/editResume/${item.id}`)
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

export default Resume;
