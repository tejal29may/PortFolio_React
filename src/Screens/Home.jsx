import React from 'react'
import "../Screens/Home.css"
import Nav from '../Components/Nav'
import Home_Section1 from '../Components/Home_Section1'
import Home_section2 from '../Components/Home_section2'
function Home() {
  return (
    <div className='home'>
<Nav/>
<Home_Section1/>
<Home_section2/>
    </div>
  )
}

export default Home