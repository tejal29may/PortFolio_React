import React from "react";
import "../Components/Home_section1.css";
// import { FaGithub } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa";
// import 'animate.css';
import TypingAnimator from "react-typing-animator";

function Home_Section1() {
  const textArray = [
    "A passionate Fullstack Developer",
    "Active Learner",
    "Computer Science & Engineering Student",
  ];
  return (
    <>
      <div className="main">
        <div className="left">
          <h1>helllo 👋.</h1>
          <p style={{ marginBottom: "1%" }}>
            I am{" "}
            <span style={{ color: "rgb(252, 16, 86) " }}>Tejal Mohod,</span>
          </p>{" "}

          <p style={{marginTop:"2%"}}>
          <TypingAnimator
            textArray={textArray}
            cursorColor="rgb(19, 185, 185)"
            textColor="rgb(19, 185, 185)"
            fontSize="26px"
            loop
            typingSpeed={60}
            delaySpeed={1000}
            backspace
            height="60px"
            textAlign="center"
          /></p>
          <p id="p"
            style={{
              fontSize: "22px",
              color: "gray",
              textAlign: "center",
              // marginTop: "1%",
            }}
          >
            I excel in creating seamless user interfaces, uniquely merging my
            backend expertise to optimize performance and user experience
          </p>
        </div>
      </div>
    </>
  );
}

export default Home_Section1;
