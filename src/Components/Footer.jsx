import React from 'react'
import { ImGithub } from "react-icons/im";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import "./Footer.css"
function Footer() {
   
  return (
    <>
   <br /><hr style={{border:"none", height:"1px", backgroundColor:"gray"}}/><br /><br />
    <div className="footer" style={{width:"100%", height:"30px",}}>
        <ul style={{display:"flex", listStyle:"none", justifyContent:"center", gap:"5%"}}>
            <li style={{fontSize:"25px", border:"1px ", borderRadius:"50%", padding:"10px 15px"}} ><ImGithub /></li>
            <li style={{fontSize:"25px", border:"1px ", borderRadius:"50%" , padding:"10px 15px"}} ><BsInstagram/></li>
            <li style={{fontSize:"25px", border:"1px ", borderRadius:"50%" , padding:"10px 15px"}} ><BsLinkedin /></li>
            <li style={{fontSize:"25px", border:"1px ", borderRadius:"50%" , padding:"10px 15px"}} ><BsTwitter /></li>
            <li style={{fontSize:"25px", border:"1px ", borderRadius:"50%" , padding:"10px 15px"}} ><HiMail /></li>
        </ul>
    </div>
    <br /><br />
    </>
  )
}

export default Footer