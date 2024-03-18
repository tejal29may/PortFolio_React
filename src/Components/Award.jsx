import React from 'react'
import 'animate.css';
function Award() {
    const data = [
        {
          year: "Aug 2022",
          name: " Smart India Hackathon",
         
          location: "IIT BHU ,Varanasi",
          img:"https://media.licdn.com/dms/image/C510BAQGAmTUtxpvm0Q/company-logo_200_200/0/1630581404006?e=1718841600&v=beta&t=Fg7xQSUKMyws3OAxe9FNam6nNsx6Oez1uZB_Kc9XrZU"
          ,
          details:
            "Participating in the 2022 Smart India Hackathon was an eye-opening experience, where my team and I worked on developing a government FAQ chatbot. Collaborating with teams from diverse states not only exposed me to cutting-edge technology but also enriched my understanding of different cultures. It was a rewarding opportunity for personal and professional growth, for which I am immensely grateful.",
        }
        
      ];
  return (
    <>
    {data.map((ele, index, array) => {
      return (
        <div className="cardss animate__animated animate__fadeInUp animate__slow">
            <div className="upper">
              <h1>{ele.year}</h1>
             <img src={ele.img} alt="" width={60}/>
            </div>
            <hr id="hred" />
            <div className="lower">
              <p style={{color:"rgb(252, 16, 86)"}}>{ele.name}</p>
              <p>{ele.location}</p><br />
              <p>{ele.details}</p>
            </div>
          </div>
      );
    })}
  </>
  )
}

export default Award