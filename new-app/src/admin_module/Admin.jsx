import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Dashboard from '../Dashboard'
import './Admin.css'

function Admin() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Dashboard />
    </div>
    
  )
}

export default Admin