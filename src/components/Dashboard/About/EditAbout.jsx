import React from 'react'
import { useNavigate } from 'react-router-dom'

const EditAbout = () => {
    const navigate = useNavigate();
  return (
    <>
     <div className="create-student student-table">
        <h1>Edit Student Details</h1>
        <form action="">
          <div>
            <label htmlFor="id">ID:</label>
             <input className='file'
                  type="file"
                //   ref={imgRef}
                  name="profile_image"
                  // value={formData.image}
                  placeholder="Enter Your Url "
                //   onChange={handleImage}
                  accept="image/*"
                />
          </div>
          <div>
            <label htmlFor="name">Name:</label>
           <input className='file'
                  type="file"
                  name="resume"
                  // ref={cvRef}
                  accept="application/pdf"
                  // value={formData.name}
                  placeholder="Upload Your CV "
                  // onChange={handleImage}
                />
          </div>
          <div>
            <label htmlFor="place">Place:</label>
            <input
                  type="text"
                  name="name"
                  // value={formData.name || ""}
                  placeholder="Enter Your Name "
                  // onChange={handleChange}
                />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
                  type="text"
                  name="profession"
                  // value={formData.profession || ""}
                  placeholder="Enter Your Profession "
                  // onChange={handleChange}
                />
          </div>
          <div>
            <label htmlFor="phone">Description:</label>
            <input
                  type="text"
                  name="description"
                  // value={formData.description || ""}
                  placeholder="Enter Your Description "
                  // onChange={handleChange}
                />
          </div>
         
          
          <div>
            <button className="btn-view" type="submit">
              Save
            </button>
              <button className="btn-dlt" type="button" onClick={()=>navigate("/dashboard/about")}>
                Back
              </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditAbout
