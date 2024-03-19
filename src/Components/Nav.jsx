import React, { useState } from "react";
import "./Nav.css";
import { Outlet, Link, NavLink } from "react-router-dom";
import "animate.css";
import { MdMenu } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import ToggleColorMode from "./Theme";
function Nav({ theme, setTheme }) {
  const [displayd, setDisplay] = useState(false);
  return (
    <>
      <div className="nav animate__animated animate__fadeInDown  animate__slow">
        <div className="left">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <p>Tejal Mohod</p>
          </NavLink>
        </div>
        <div className="menu" onClick={()=>{
          setDisplay(!displayd)
        }}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="right">
          <ul className={displayd?"open":""}>
            <li>
              <NavLink to="/" style={{ textDecoration: "none" }}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/About" style={{ textDecoration: "none" }}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/Projects" style={{ textDecoration: "none" }}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/Contact" style={{ textDecoration: "none" }}>
                Contact{" "}
              </NavLink>
            </li>
            <li>
              <a
                href="https://drive.google.com/file/d/1T735AVuipt2CEoUMfcnh_9IYrCgYBYcS/view?usp=sharing"
                style={{ textDecoration: "none" }}
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
