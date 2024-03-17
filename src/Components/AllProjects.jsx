import React from "react";
import "../Components/AllProjects.css";

function AllProjects() {
  const ReactProjects = [
    {
      img: "",
      Projectname: "Educational planner",
      Tech: "React",
      githubLink:"https://github.com/tejal29may/ReactAssignment/tree/main/Assignment5_Classwork",
      HostedLink:"https://65e8ba91064fd231cf9dd2bd--majestic-gelato-cd879d.netlify.app/"
    },
    {
      img: "",
      Projectname: " Lorem  Generator ",
      Tech: "React",
      githubLink:"https://github.com/tejal29may/ReactAssignment/tree/main/Assignment5_HomeWork",
      HostedLink:"https://65e765797fe8334bff715741--vocal-figolla-1093ab.netlify.app/"
    },
    {
      img: "",
      Projectname: "Shopping Cart",
      Tech: "React",
      githubLink:"https://github.com/tejal29may/ReactAssignment/tree/main/Assignment6_Cardt_Classwork",
      HostedLink:"https://65ea2224a246ac67fd49fc3e--starlit-rabanadas-0186d6.netlify.app/"
    },
    
    {
      img: "",
      Projectname: "Grocery Bud",
      Tech: "React",
      githubLink:"https://github.com/tejal29may/ReactAssignment/tree/main/Assignment7_Classwork",
      HostedLink:"https://65f17b87ef7004c37300b621--earnest-smakager-397764.netlify.app/"
    },
    {
      img: "",
      Projectname: "Gym Page",
      Tech: "React",
      githubLink:"https://github.com/tejal29may/ReactAssignment/tree/main/Assignment9_Classwork_GymWebsite",
      HostedLink:"https://github.com/tejal29may/ReactAssignment/tree/main/Assignment9_Classwork_GymWebsite"
    },
    {
      img: "",
      Projectname: "Geek Food Site",
      Tech: "React",
      githubLink:"https://github.com/tejal29may/ReactAssignment/tree/main/Assignment3_classWork",
      HostedLink:"https://react-assignment-vyru.vercel.app/"
    },
    {
      img: "",
      Projectname: "Portfolio",
      Tech: "React",
      githubLink:"https://github.com/tejal29may/PortFolio_React",
      HostedLink:"https://port-folio-react-ten.vercel.app/"
    },
  ];

  return (
    <>
      <div className="Reactprojects">
        {
          ReactProjects.map((ele, index, array) => {

            return (
              <div className="cardss">
              <img
                src="https://www.sprintonweb.com/wp-content/uploads/2018/07/15-Medinova-thumb-899x599.jpg"
                alt=""
              width={300} height={180}
                style={{ position: "absolute",objectFit:"contain",display:"flex", justifyContent:"center",alignItems:"center"}}
              />
              <div className="card-content">
                <h2 className="card-title">{ele.Projectname}</h2>
                <p className="card-body">
                  
                  This Project is Build with React js ,You can check github repo and live demo of project here.!
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
            )
          })
        }
     
      </div>
    </>
  );
}

export default AllProjects;
