import React from "react";
import "../Components/AllProjects.css";

function FigmaProjects() {
  const ReactProjects = [
    {
      img: "",
      Projectname: "Netflix Landing page",
      Tech: "Figma",
     
      HostedLink:
        "https://www.figma.com/file/VrreeXfx86tI9pcVlo5AYx/netflix-Home-page?type=design&node-id=0%3A1&mode=dev&t=XfCr0xuXANrMM7yf-1",
    },
    {
      img: "",
      Projectname: "LeetCode Home page",
      Tech: "Figma",
      
      HostedLink:
        "https://www.figma.com/file/bU5y9ApuHmyv2EomtN7CJG/Untitled?type=design&node-id=0%3A1&mode=dev&t=Lh3zO4eR9Ds5rvXy-1",
    },
    
   
  ];

  return (
    <>
      <div className="Reactprojects">
        {ReactProjects.map((ele, index, array) => {
          return (
            <div className="card" >
              
                <img
                  src="https://th.bing.com/th/id/OIP.on84f4o2hk9gCVuBAGrXkQHaHa?rs=1&pid=ImgDetMain"
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
                  This Project is Build with Figma ,You can check github 
               live demo of project here.!
                </p>
               
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

export default FigmaProjects;
