import React, { useEffect, useState } from 'react'
import { Api } from "../../../Api/Api";
import { useNavigate, useParams } from 'react-router-dom'

const ViewAbout = () => {
    const navigate = useNavigate();
    const {id} = useParams();
    const [view, setView] = useState({});

    useEffect(()=>{
      const viewData = async ()=>{
        const data = await Api(`/public/about/${id}`);
        console.log(data);
        if(data.success){
          setView(data.data)
        }
      }
      viewData()
    },[id])

    useEffect(()=>{
       console.log(view)
    },[view])
  return (
    <>
    <div className="view-detail create-student student-table">
       <h1>Students Details</h1>
       <div className="details" style={{color:'black'}}>
        <p><strong>ID:</strong>{}</p>
        <p><strong>Name:</strong>Rajan</p>
        <p><strong>Profession:</strong>Profession</p>
        <p><strong>Profile:</strong>img</p>
        <p><strong>Resume:</strong>resume</p>
       </div>
       <button onClick={()=>navigate("/dashboard/about")} className='btn-dlt'>Back</button>
    </div>
    </>
  )
}

export default ViewAbout
