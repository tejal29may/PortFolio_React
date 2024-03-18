import React from "react";
import "../Components/AllProjects.css";

function TailwindProject() {
  const ReactProjects = [
    {
      img: "",
      Projectname: "Jadoo landing Page",
      Tech: "Tailwind",
      githubLink:
        "https://github.com/tejal29may/Tail_wind_jadoo_landing_page",
      HostedLink:
        "https://tejal29may.github.io/Tail_wind_jadoo_landing_page/",
    },
    
   
  ];

  return (
    <>
      <div className="Reactprojects">
        {ReactProjects.map((ele, index, array) => {
          return (
            <div className="card" >
              
                <img
                  src="https://d6f6d0kpz0gyr.cloudfront.net/uploads/images/_1200x630_crop_center-center_82_none/tailwind-thumb.jpg?mtime=20210104144959&focal=none&tmtime=20210104145035"
                  alt=""
                  width={290}
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
                  This Project is Build with tailwind CSS ,You can check github repo
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

export default TailwindProject;
