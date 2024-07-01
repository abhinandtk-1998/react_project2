import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import Header_dev from './Header_dev'
import Sidebar_dev from './Sidebar_dev'
import './Developer.css'

function Developer() {
  const navigate = useNavigate() 
  // const token = localStorage.getItem('auth_token')
  // const headers = {
  //   'Authorization' : `Token ${token}`,
  //   'Content-Type' : 'application/json'
  // }
  

  // function getdata() {
  //   axios.get('http://127.0.0.1:8000/data/', {headers:headers})
  //   .then((res) => {
  //     console.log(res.data)
  //   }).catch((err) => {
  //     console.log(err)
  //   })
  // }


  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }


  return (

    <div className='grid-container'>
      <Header_dev OpenSidebar={OpenSidebar}/>
      <Sidebar_dev openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      {/* <Dashboard /> */}
    </div>
    


  // <div className='grid-container'>
  //   <Header OpenSidebar={OpenSidebar}/>
  //   <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
  //   <Dashboard />
  //   <div>Developer</div>
  //   <button onClick={() => {localStorage.removeItem('auth_token');navigate('/login')}}>logout</button>
  //   <button onClick={getdata}>data get</button>
  // </div>




    
  )
}

export default Developer