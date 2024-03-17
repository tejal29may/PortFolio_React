import React from "react";
import "./Experience.css";
function Experience() {
  const data = [
    {
      year: "Aug 2021- Nov2021",
      name: " Makrytoinnovation pvt ltd.",
      role: "Role : Full Stack Web Development Intern ",
      location: "Location : Remote",
      details:
        "Designed a flexible notice board system for colleges. Enabled targeted notice distribution to specific staff or all users. Provided options for notices to be visible universally or to selected individuals.Improved communication efficiency within the college community.",
    },
    {
      year: "Jan 2022 – Feb 2022",
      name: " Sparks Foundation .",
      role: "Role : Web Development Intern ",
      location: "Location : Remote",
      details:
        "Created a user-friendly application allowing fund transfers and user account details display.Developed practical skills in financial transactions and database management.",
    },
    {
      year: "Jan 2022 – Feb 2022",
      name: " Lets Grow More .",
      role: "Role : Data Science Intern ",
      location: "Location : Remote",
      details:
        "Worked on a regression task project aimed at predicting the percentage of marks a student is expected to score based on the number of hours they studied.Utilized machine learning techniques to analyze the relationship between study hours and exam scores.Developed predictive models to estimate the expected percentage of marks with high accuracy. Enhanced skills in data analysis, machine learning, and model building through practica.",
    },
  ];
  return (
    <>
      {data.map((ele, index, array) => {
        return (
          <div className="cardss">
            <div className="upper">
              <h1>{ele.year}</h1>
            </div>
            <hr id="hred" style={{backgroundColor:"red"}}/>
            <div className="lower">
              <div className="left">
                <p style={{color:"white"}}>{ele.name}</p>
                <p>{ele.role}</p>
                <p>{ele.location}</p>
              </div>
              <div className="right">
                <br />
                <p>{ele.details}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Experience;
