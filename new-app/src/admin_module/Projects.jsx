import React, { useState } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Projects_data from './Projects_data'
import './Admin.css'

function Projects() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Projects_data />
        
    </div>
  )
}

export default Projects