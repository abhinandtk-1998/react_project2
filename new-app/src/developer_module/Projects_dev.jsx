import React, { useState } from 'react'
import Header_dev from './Header_dev'
import Sidebar_dev from './Sidebar_dev'
import './Developer.css'
import Projects_dev_data from './Projects_dev_data'

function Projects_dev() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
    <div className='grid-container'>
      <Header_dev OpenSidebar={OpenSidebar}/>
      <Sidebar_dev openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Projects_dev_data />
    </div>
  )
}

export default Projects_dev