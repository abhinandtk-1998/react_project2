import React, { useState } from 'react'
import Header_tl from './Header_tl'
import Sidebar_tl from './Sidebar_tl'
import './Teamlead.css'
import Projects_tl_data from './Projects_tl_data'

function Projects_tl() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  return (
    <div className='grid-container'>
      <Header_tl OpenSidebar={OpenSidebar}/>
      <Sidebar_tl openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Projects_tl_data />
    </div>
  )
}

export default Projects_tl