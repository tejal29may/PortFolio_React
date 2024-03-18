import React from 'react'
import Example from '../Components/FaqType'
import Nav from '../Components/Nav'
import ProjectSection1 from '../Components/ProjectSection1'

import "../App.css"
function Projects() {
  return (
    <div>
      <Nav/>
<ProjectSection1/>
<div className="allProjects" style={{marginTop:"5%"}}>
<Example/>
      </div>
    </div>
  )
}

export default Projects