import React, { useState } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import './Admin.css'

function DeveloperList() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        
    </div>
  )
}

export default DeveloperList