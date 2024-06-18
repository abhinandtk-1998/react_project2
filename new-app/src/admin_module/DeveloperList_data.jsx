import axios from 'axios';
import React, { useEffect, useState } from 'react'
import config from "./config"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function DeveloperList_data() {

  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`${config.baseurl}dev_details/`)
        .then(response => {
            setMembers(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching member details:', error);
        });
  }, []);

  const tableStyle = {
    width: '100px',
    borderCollapse: 'collapse',
  };

  const thStyle = {
    border: '1px solid black',
    padding: '8px',
    textAlign: 'left',
    fontSize: '30px',
    textAlign:'center'
  };

  const tdStyle = {
    border: '1px solid black',
    padding: '8px',
    fontSize: '20px',
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
    width: '300px',
  }

  const action_content_width = {
    textAlign:'center'
  }

  const [members, setMembers] = useState([]);


  const delete_developer = (id) => {

    let data = {
      "id":id
    }
    console.log(id)

    axios.delete(`${config.baseurl}disapprove_dev/?id=${id}`)
    .then((res) => {
      console.log(res)
      navigate(0);

    })
    .catch((err) => {
      console.log(err)
    })



  };


  const developer_to_Tl = (id) => {

    let data = {
      "id":id
    }
    console.log(id)

    axios.put(`${config.baseurl}dev_to_tl/?id=${id}`)
    .then((res) => {
      console.log(res)
      navigate(0);

    })
    .catch((err) => {
      console.log(err)
    })



  };






  const baseURL = 'http://127.0.0.1:8000';


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
         {
         members.map((member, index) => (
            <tr key={member.id}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{member.user.first_name} {member.user.last_name}</td>
              <td style={tdStyle}>{member.user.email}</td>
              <td style={tdStyle}>{member.department}</td>
              <td style={tdStyle}>{member.course}</td>
              <td style={{...tdStyle, ...action_content_width}}> 
                <Button variant="success" onClick={() => developer_to_Tl(member.id)}>Pramote as TL</Button>{'  '} 
                <Button variant="danger" onClick={() => delete_developer(member.id)}>Delete</Button>{' '}
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default DeveloperList_data