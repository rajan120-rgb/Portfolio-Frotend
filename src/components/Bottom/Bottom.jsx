import React, { useContext, useEffect, useState } from "react";
import { Api } from "../../Api/Api";
import "./Bottom.css";
import { LoginContext } from "../../Context/Context";

const Bottom = ({ bottom }) => {
  const { token } = useContext(LoginContext);
  const [service, setService] = useState(()=>{
    const saved = localStorage.getItem("service");
    return saved? JSON.parse(saved):[];
  });

  useEffect(() => {
    const getBottom = async () => {
      try {
        const data = await Api("/public/services");
        console.log(data);
        if (data.success) {
          setService(data.data);
          localStorage.setItem("service",JSON.stringify(data.data))
        }
      } catch (error) {
        console.log(error);
      }
    };
    getBottom();
  }, []);

  return (
    <>
      <div className="bottom">
        <div className="bottom-main-heading">
          <h1>My Services</h1>
          <p className="bottom-para">
            I help individuals and businesses build modern, responsive, and
            user-friendly web applications using the latest frontend
            technologies.
          </p>
        </div>
        <div className="bottom-container">
         {service.map((item, index)=>(
          <div key={index}>
           <div className="bottom-inner-container">
            <div>
              <i className="fa-solid icon fa-tv"></i>
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
          </div>
         ))}
        </div>
      </div>
    </>
  );
};

export default Bottom;
