import React, { useEffect, useContext, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Pop from "../PopUp/Pop";
import { LoginContext } from "../../../Context/Context";
import { DatabaseBackup } from "lucide-react";

const EditAbout = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token, setPopUp } = useContext(LoginContext);
  const [formData, setFormData] = useState({
    name: "",
    profession: "",
    description: "",
  });

  const [image, setImage] = useState({
    profile_image: null,
    resume: null,
  });
  const imgRef = useRef();
  const cvRef = useRef();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImage = (e) => {
    setImage({
      ...image,
      [e.target.name]: e.target.files[0],
    });
  };

  const save = () => {
    setPopUp(true);
  };

  useEffect(() => {
    fetch(`http://localhost:8000/api/admin/about/${id}`, {
      headers: {
         Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setFormData({
          name: data.data.name,
          profession: data.data.profession,
          description: data.data.description,
        });
        //  setImage({
        //    profile_image: data.profile_image,
        //   resume: data.resume,
        //  })
      });
     
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPopUp(false);
    const data = new FormData();
    data.append("_method", "PUT");
    data.append("name", formData.name);
    data.append("profession", formData.profession);
    data.append("description", formData.description);
    if (image.profile_image) {
      data.append("profile_image", image.profile_image);
    }

    if (image.resume) {
      data.append("resume", image.resume);
    }
    console.log(formData);
    console.log(image);
    console.log("handlesubmit is called");

    try {
      const response = await fetch(
        `http://localhost:8000/api/admin/about/${id}`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: data,
        },
      );

      const result = await response.json();
      console.log(result);

      // setFormData({
      //   name: "",
      //   profession: "",
      //   service: "",
      //   design: "",
      //   description: "",
      // });
      // setImage({
      //   profile_image: null,
      //   resume: null,
      // });
      // if (imgRef.current) {
      //   imgRef.current.value = "";
      // }
      // if (cvRef.current) {
      //   cvRef.current.value = "";
      // }
    } catch (error) {
      console.log(error);
    }
    navigate("/dashboard/about");
  };

  return (
    <>
      <div className="create-student student-table">
        <h1>Edit About</h1>
        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="id">ID:</label>
            <input
              className="file"
              type="file"
              ref={imgRef}
              name="profile_image"
              // value={formData.image}
              placeholder="Enter Your Url "
              onChange={handleImage}
              accept="image/*"
            />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              className="file"
              type="file"
              name="resume"
              ref={cvRef}
              accept="application/pdf"
              // value={formData.name}
              placeholder="Upload Your CV "
              onChange={handleImage}
            />
          </div>
          <div>
            <label htmlFor="place">Place:</label>
            <input
              type="text"
              name="name"
              value={formData.name || ""}
              placeholder="Enter Your Name "
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="text"
              name="profession"
              value={formData.profession || ""}
              placeholder="Enter Your Profession "
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Description:</label>
            <input
              type="text"
              name="description"
              value={formData.description || ""}
              placeholder="Enter Your Description "
              onChange={handleChange}
            />
          </div>

          <div>
            <button className="btn-view" type="button" onClick={() => save()}>
              Update
            </button>
            <button
              className="btn-dlt"
              type="button"
              onClick={() => navigate("/dashboard/about")}
            >
              Back
            </button>
          </div>
        </form>
        <Pop handleSubmit={handleSubmit} />
      </div>
    </>
  );
};

export default EditAbout;
