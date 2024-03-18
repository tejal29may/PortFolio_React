import React from "react";
import "./Nav.css";
import { Outlet, Link, NavLink } from "react-router-dom";
import 'animate.css';
import ToggleColorMode from "./Theme";
function Nav({theme,setTheme}) {
  return (
    <>
      <div className="nav animate__animated animate__fadeInDown  animate__slow">
        <div className="left">
          
          <NavLink to="/" style={{textDecoration:"none"}}><p>Tejal Mohod</p></NavLink>
        </div>
        <div className="right">
          <ul>
            <li><NavLink to="/" style={{textDecoration:"none"}}>Home</NavLink></li>
            <li><NavLink to="/About" style={{textDecoration:"none"}}>About</NavLink></li>
            <li><NavLink to="/Projects" style={{textDecoration:"none"}}>Projects</NavLink></li>
            <li><NavLink to="/Contact" style={{textDecoration:"none"}}>Contact </NavLink></li>
            <li 
          ><a href="https://drive.google.com/file/d/1T735AVuipt2CEoUMfcnh_9IYrCgYBYcS/view?usp=sharing" style={{textDecoration:"none"}}>Resume</a></li>
            {/* <li><ToggleColorMode/></li> */}
            
            {/* <li><button style={{backgroundColor:"pink", color:"black", padding:"3px 15px", border:"none", borderRadius:"5px", fontSize:"20px"}}>mode</button></li> */}
            
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
