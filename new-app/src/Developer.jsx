import React from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Developer() {
  const navigate = useNavigate() 
  const token = localStorage.getItem('auth_token')
  const header = {
    'Authorization' : `Token ${token}`,
    'Content-Type' : 'application/json'
  }
  

  function getdata() {
    axios.get('http://127.0.0.1:8000/data/', {headers:header})
    .then((res) => {
      console.log(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }


  return (
    <>
    <div>Developer</div>
    <button onClick={() => {localStorage.removeItem('auth_token');navigate('/login')}}>logout</button>
    <button onClick={getdata}>data get</button>
    </>
    
  )
}

export default Developer