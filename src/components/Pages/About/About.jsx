import React, { useEffect, useState } from "react";
import Hero from "../../Hero/Hero";
import Bottom from "../../Bottom/Bottom";

const About = () => {
  const [data, setData] = useState("");

  const api = async () => {
    const token = "CgqkCkppmp4fwHVLOmkd62IlVJZNEBw7U7dZx57bcbcb1122";
    try {
      const response = await fetch("http://127.0.0.1:8000/api/admin/skills", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      // if (!response.ok) {
      //   console.log("Server Error:", response.status);
      //   return;
      // }
      const data = await response.json();
      console.log(data);
    } catch {}
  };
  useEffect(() => {
    api();
  }, []);
  return (
    <div>
      <Hero />
      <Bottom />
    </div>
  );
};
export default About;
