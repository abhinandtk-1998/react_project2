import axios from 'axios';
import React, { useState } from 'react'
import config from "./config"




function Requests_data() {

  const [items, setItems] = useState(false)

  const tableStyle = {
    width: '100px',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
    fontSize: '20px',
  };

  const tdStyle = {
    border: '1px solid black',
    padding: '8px',
    fontSize: '14px',
  };

  const sl_no_width = {
    width: '70px'
  }

  const name_width = {
    width: '200px'
  }

   const email_width = {
    width: '200px'
  }

  const department_width = {
    width: '200px'
  }

  const course_width = {
    width: '300px'
  }

  const action_width = {
    width: '300px'
  }

  axios.get(`${config.baseurl}reg_details/`)
  .then((res) => {
    setItems(res)
    console.log(res)
  })
  .catch((err) => {
    console.log(err)
  })





  return (
    <main className='main-container'>
      <table striped bordered hover className='m-3'>
        <thead>
          <th style={{...thStyle, ...sl_no_width}}>Sl.No</th>
          <th style={{...thStyle, ...name_width}}>Name</th>
          <th style={{...thStyle, ...email_width}}>Email</th>
          <th style={{...thStyle, ...department_width}}>Department</th>
          <th style={{...thStyle, ...course_width}}>Course Completed</th>
          <th style={{...thStyle, ...action_width}}>Action</th>
        </thead>
        <tbody>
        {/* {Object.keys(items).map(key => {
          const [id, firstName, lastName, email, department, course] = items[key];
          return (
            <tr key={id}>
              <td>{id}</td>
              <td>{firstName}</td>
              <td>{lastName}</td>
              <td>{email}</td>
              <td>{department}</td>
              <td>{course}</td>
            </tr>
          );
        })} */}
        </tbody>
      </table>

      
    </main>
    
  )
}

export default Requests_data