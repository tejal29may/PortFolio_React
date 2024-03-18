import React from "react";
import "../Components/AllProjects.css";

function JSProjects() {
  const ReactProjects = [
    {
      img: "",
      Projectname: "Emoji Finder",
      Tech: "JavaScript",
      githubLink:
        "https://github.com/tejal29may/Emoji_Finder",
      HostedLink:
        "https://emoji-finder-three.vercel.app/",
    },
    {
      img: "",
      Projectname: " Pokemon Project ",
      Tech: "JavaScript",
      githubLink:
        "https://github.com/tejal29may/POKEMON",
      HostedLink:
        "https://pokemon-seven-beryl.vercel.app/",
    },
    {
      img: "",
      Projectname: " Image Search App",
      Tech: "JavaScript",
      githubLink:
        "https://github.com/tejal29may/Image_search_app",
      HostedLink:
        "https://image-search-app-liard.vercel.app/",
    },

    {
      img: "",
      Projectname: "Joke Generator",
      Tech: "JavaScript",
      githubLink:
        "https://github.com/tejal29may/Dad_Joke_Teller",
      HostedLink:
        "https://dad-joke-teller.vercel.app/",
    },
    {
      img: "",
      Projectname: "Stop Watch",
      Tech: "JavaScript",
      githubLink:
        "https://github.com/tejal29may/Stop_Watch",
      HostedLink:
        "https://stop-watch-nu-one.vercel.app/",
    },
    {
      img: "",
      Projectname: "Geek Food Site",
      Tech: "JavaScript",
      githubLink:
        "https://github.com/tejal29may/ReactAssignment/tree/main/Assignment3_classWork",
      HostedLink: "https://react-assignment-vyru.vercel.app/",
    },
    {
      img: "",
      Projectname: "LeaderBoard Project",
      Tech: "JavaScript",
      githubLink: "https://github.com/tejal29may/leaderBoard",
      HostedLink: "https://leader-board-sand.vercel.app/",
    },
    {
        img: "",
        Projectname: "Digital Clock",
        Tech: "JavaScript",
        githubLink: "https://github.com/tejal29may/Digital_Clock",
        HostedLink: "https://digital-clock-five-flame.vercel.app/",
      },
      {
        img: "",
        Projectname: "Invoice Generator",
        Tech: "JavaScript",
        githubLink: "https://github.com/Jinu-Vijayan/JS_GEEKATHON_TEAM14/tree/main/Tejal",
        HostedLink: "https://invoice-generator-gamma-rust.vercel.app/",
      },
      
  ];

  return (
    <>
      <div className="Reactprojects">
        {ReactProjects.map((ele, index, array) => {
          return (
            <div className="card" >
              
                <img
                  src="https://th.bing.com/th/id/OIP.4LVKPoqv9bp7GRFNIWvunQHaHa?rs=1&pid=ImgDetMain"
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
                  This Project is Build with javaScript ,You can check github repo
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

export default JSProjects;
