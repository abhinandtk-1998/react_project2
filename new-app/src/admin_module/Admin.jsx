import React from 'react'
import { useLocation } from 'react-router-dom';

function Admin() {

  const location = useLocation();
  const { state } = location;

  console.log(state);


  return (
    <>
    <div>Admin </div>
    <h1>Admin Page</h1>
    <p>Received data: {JSON.stringify(state)}</p>
    </>
    
  )
}

export default Admin