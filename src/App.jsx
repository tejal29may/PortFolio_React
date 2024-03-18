import React from "react";
import AnimatedCursor from "react-animated-cursor"
import Home from "./Screens/Home";
import About from "./Screens/About";
import Projects from "./Screens/Projects";
import Contact from "./Screens/Contact";
import { Route, Routes, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <div className="allComponents">
      <AnimatedCursor
  innerSize={8}
  outerSize={35}
  innerScale={1}
  outerScale={2}
  outerAlpha={0}
  hasBlendMode={true}
  innerStyle={{
    backgroundColor: 'white'
  }}
  outerStyle={{
    border: '3px solid rgb(252, 16, 86)'
  }}
/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
