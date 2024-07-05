import React, { useState } from 'react'
import Header_dev from './Header_dev'
import Sidebar_dev from './Sidebar_dev'
import './Developer.css'
import Change_dev_password_form from './Change_dev_password_form'

function Change_dev_password() {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

  return (
    <div className='grid-container'>
      <Header_dev OpenSidebar={OpenSidebar}/>
      <Sidebar_dev openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Change_dev_password_form />
    </div>
  )
}


export default Change_dev_password
