import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

function LoginRoute() {

    const token = localStorage.getItem('auth_token')

    console.log(token)



  return (
    token ? <Outlet></Outlet> : <Navigate to='/login' />
  )
}

export default LoginRoute