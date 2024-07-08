import React, { useState } from 'react'
import Header_tl from './Header_tl'
import Sidebar_tl from './Sidebar_tl'
import './Teamlead.css'
import Edit_tl_profile_form from './Edit_tl_profile_form'

function Edit_tl_profile() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
    <div className='grid-container'>
      <Header_tl OpenSidebar={OpenSidebar}/>
      <Sidebar_tl openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Edit_tl_profile_form />
    </div>
  )
}

export default Edit_tl_profile