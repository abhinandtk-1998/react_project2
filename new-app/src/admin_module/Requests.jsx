import React, { useState } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Requests_data from './Requests_data'


import './Admin.css'


function Requests() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }



  return (
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <Requests_data />
        
    </div>
  )
}

export default Requests