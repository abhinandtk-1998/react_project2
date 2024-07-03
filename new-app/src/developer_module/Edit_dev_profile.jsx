import React, { useState } from 'react'
import Header_dev from './Header_dev'
import Sidebar_dev from './Sidebar_dev'
import './Developer.css'
import Edit_dev_profile_form from './Edit_dev_profile_form'

function Edit_dev_profile() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
    <div className='grid-container'>
      <Header_dev OpenSidebar={OpenSidebar}/>
      <Sidebar_dev openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Edit_dev_profile_form />
    </div>
  )
}

export default Edit_dev_profile