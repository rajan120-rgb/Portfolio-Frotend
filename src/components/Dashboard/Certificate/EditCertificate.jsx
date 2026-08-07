import React, { useContext,useState,useEffect } from 'react'
import { useNavigate,useParams } from 'react-router-dom';
import { LoginContext } from '../../../Context/Context';
import Pop from '../PopUp/Pop';

const EditCertificate = () => {
    const navigate = useNavigate();
  const { id } = useParams();
  const { token, setPopUp } = useContext(LoginContext);
  const [formData, setFormData] = useState({
    title: "",
    organization: "",
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const save = () => {
    setPopUp(true);
  };

  useEffect(() => {
    fetch(`http://localhost:8000/api/admin/certificates/${id}`, {
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData(data.data);
      });
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPopUp(false);
    console.log(formData);
    console.log("handlesubmit is called");

    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/certificates/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    navigate("/dashboard/certificate");
  };

  return (
    <>
     <div className="create-student student-table">
        <h1>Edit Certificate</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
            className='text-black'
              type="text"
              id="title"
              name="title"
              value={formData.title || ""}
              placeholder="Enter Your Title "
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Organization:</label>
            <input
            className='text-black'
              type="text"
              id="description"
              name="organization"
              value={formData.organization || ""}
              placeholder="Enter Your Organization "
              onChange={handleChange}
              required
            />
          </div>
          <div style={{ display: "flex", flexDirection: "row" }}>
            <button className="btn-view" type="button" onClick={() => save()}>
              Update
            </button>
            <button
              className="btn-dlt"
              type="button"
              onClick={() => navigate("/dashboard/certificate")}
            >
              Back
            </button>
          </div>
        </form>
        <Pop save={"Update"} update={"Do you want to update it?"} handleSubmit={handleSubmit} />
      </div> 
    </>
  )
}

export default EditCertificate
