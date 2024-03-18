import React, { useState } from 'react'
import "../Screens/Home.css"
import Nav from '../Components/Nav'
import Home_Section1 from '../Components/Home_Section1'
import Home_section2 from '../Components/Home_section2'
import Footer from '../Components/Footer'
function Home() {
  const[theme,setTheme]=useState(true)
  return (
    
    <div className='home' style={{backgroundColor:theme?"rgb(29, 29, 29)":"white"}}>
<Nav theme={theme} setTheme={setTheme}/>
<Home_Section1/>
<Home_section2/>
<Footer/>
    </div>
  )
}

export default Home