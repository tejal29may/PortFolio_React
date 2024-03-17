import React from "react";
import "./Education.css";
function Education() {
  const data = [
    {
        degree:"Bachelors of Engineering",
      college: "Sipna College Of Engineering & Technology,Amravati",
      year: "2019-2023",
      branch: "Branch : Computer Science & Enginnering (CSE)",
      cgpa: "CGPA: 9.12",
    },
    {
        degree:"Higher Secondary Education(HSC)",
      college: "Shri Shivaji Science College,Amravati",
      year: "2017-2019",
      branch:
        "Board: Maharashtra State Board of Secondary and Higher Secondary Education,pune",
      cgpa: "Percentage: 84%",
    },
    {
        degree:"Secondary Education(SSC)",
      college: "B.D.S. High School ,Chandur Railway",
      year: "2016-2017",
      branch:
        "Board: Maharashtra State Board of Secondary and Higher Secondary Education,pune",
      cgpa: "Percentage: 90.40%",
    },
  ];
  return (
    <>
      {data.map((ele, index, array) => {
        return (
          <div className="cardss">
            <div className="upper">
              <h1>{ele.degree}</h1>
              <h3 style={{color:"red"}}>{ele.year}</h3>
            </div>
            <hr id="hred" />
            <div className="lower">
              <p style={{color:"white"}}>{ele.college}</p>
              <p>{ele.branch}</p>
              <p>{ele.cgpa}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Education;
