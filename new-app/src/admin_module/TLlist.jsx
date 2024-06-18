import React, { useState } from 'react'
import Header from '../Header'
import Sidebar from '../Sidebar'
import TLlist_data from './TLlist_data'
import './Admin.css'

function TLlist() {
    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
        setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar}/>
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
        <TLlist_data />
        
    </div>
  )
}

export default TLlist