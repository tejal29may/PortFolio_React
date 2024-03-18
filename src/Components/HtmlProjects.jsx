import React from "react";
import "../Components/AllProjects.css";

function HtmlProjects() {
  const ReactProjects = [
    {
      img: "",
      Projectname: "Aria Service Site",
      Tech: "HTML/CSS",
      githubLink:
        "https://github.com/tejal29may/major_project",
      HostedLink:
        "https://major-project-pi.vercel.app/",
    },
    {
      img: "",
      Projectname: " YouTube UI ",
      Tech: "HTML/CSS",
      githubLink:
        "https://github.com/tejal29may/YouTube_UI",
      HostedLink:
        "https://pokemon-seven-beryl.vercel.app/",
    },
    {
      img: "",
      Projectname: " IRCTE landing Page",
      Tech: "HTML/CSS",
      githubLink:
        "https://github.com/tejal29may/IRCTC_website",
      HostedLink:
        "https://tejal29may.github.io/IRCTC_website/",
    },

    {
      img: "",
      Projectname: "Axis bank",
      Tech: "HTML/CSS",
      githubLink:
        "https://github.com/Md-ismaeel/Geekster_Geekathon_Project_Mct",
      HostedLink:
        "https://md-ismaeel.github.io/Geekster_Geekathon_Project_Mct/",
    },
   
  ];

  return (
    <>
      <div className="Reactprojects">
        {ReactProjects.map((ele, index, array) => {
          return (
            <div className="card" >
              
                <img
                  src="https://th.bing.com/th/id/OIP.hfhQisj6EWygr3BuYtoMAQHaEK?rs=1&pid=ImgDetMain"
                  alt=""
                  width={300}
                  height={180}
                  style={{
                    position: "absolute",
                    objectFit: "contain",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin:"2px auto",
                    overflow:"hidden",
                   
                  }}
                />
            

              <div className="card-content">
                <h2 className="card-title">{ele.Projectname}</h2>
                <p className="card-body">
                  This Project is Build with React js ,You can check github repo
                  and live demo of project here.!
                </p>
                <a href={ele.githubLink} className="button">
                  GitHub
                </a>
                &nbsp;
                <a href={ele.HostedLink} className="button">
                  Live Demo
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default HtmlProjects;
