import React from 'react'
import "./Dashboard.css";
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import { BrowserRouter, Routes, Route } from "react-router-dom";




const Dashboard = () => {
  return (
    <>
    <div className='dash'>
    <div className="dashboard">
        <Sidebar/>
      <Main/>
    </div>
    </div>
    </>
  )
}

export default Dashboard





// import { useState } from "react";
// import "./Dashboard.css";

// function Dashboard() {
//   const [formData, setFormData] = useState({
//     name: "",
//     title: "",
//     description: "",
//   });

//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState("");

//   // Handle text inputs
//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   // Handle image upload
//   const handleImage = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setImage(file);
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   // Save button
//   const handleSave = () => {
//     console.log("Text Data:", formData);
//     console.log("Image:", image);

//     // Later you will send this to your backend
//     // using fetch() or axios.
//     alert("Data saved successfully!");
//   };

//   return (
//     <div className="dashboard">

//       <div className="content">
//         <h2>Edit Portfolio</h2>

//         <label>Name</label>
//         <input
//           type="text"
//           name="name"
//           value={formData.name}
//           onChange={handleChange}
//           placeholder="Enter your name"
//         />

//         <label>Title</label>
//         <input
//           type="text"
//           name="title"
//           value={formData.title}
//           onChange={handleChange}
//           placeholder="Frontend Developer"
//         />

//         <label>Description</label>
//         <textarea
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           placeholder="Write about yourself..."
//         />

//         <label>Profile Image</label>
//         <input
//           type="file"
//           accept="image/*"
//           onChange={handleImage}
//         />

//         {preview && (
//           <img
//             src={preview}
//             alt="Preview"
//             className="preview"
//           />
//         )}

//         <button
//           className="save-btn"
//           onClick={handleSave}
//         >
//           Save Changes
//         </button>
//       </div>

//     </div>
//   );
// }

// export default Dashboard;



// const handleSave = async () => {

//   const formDataToSend = new FormData();


//   Object.entries(formData).forEach(([key, value]) => {
//     formDataToSend.append(key, value);
//   });


//   if (image) {
//     formDataToSend.append("image", image);
//   }


//   try {

//     const response = await fetch(
//       "http://localhost:5000/api/portfolio",
//       {
//         method: "POST",
//         body: formDataToSend,
//       }
//     );


//     const result = await response.json();

//     console.log(result);

//     alert("Saved Successfully");


//   } catch(error) {

//     console.log(error);

//   }

// };
