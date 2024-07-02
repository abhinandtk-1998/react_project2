import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Projects_dev_data() {

    const modalStyle = {
        backgroundColor: '#263043'
      }
  
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
      
        const date_width = {
          width: '200px'
        }
      
        const course_width = {
          width: '250px'
        }
      
        const action_width = {
          width: '300px',
        }
      
        const action_content_width = {
          textAlign:'center'
        }

        const [projects, setProjects] = useState([]);


        useEffect(() => {

            var token = localStorage.getItem('auth_token');
  
            console.log(token)
  
            const headers = {
              'Content-Type': 'application/json',
              'Authorization': `Token ${token}`
            };
  
  
  
            axios.get("http://127.0.0.1:8000/project_details_dev/", {headers})
                .then(response => {
                    
                    setProjects(response.data);
                    console.log(response.data);
                })
                .catch(error => {
                    console.error('Error fetching member details:', error);
                });
        }, []);


  return (
    <main className='main-container'>
        <table className='m-3'>
        <thead>
          <tr>
            <th style={{...thStyle, ...sl_no_width}}>Sl.No</th>
            <th style={{...thStyle, ...name_width}}>Client Name</th>
            <th style={{...thStyle, ...email_width}}>Project Name</th>
            <th style={{...thStyle, ...date_width}}>Start Date</th>
            <th style={{...thStyle, ...date_width}}>End Date</th>
            <th style={{...thStyle, ...course_width}}>Assigned To</th>
            <th style={{...thStyle, ...action_width}}>Action</th>
          </tr>
        </thead>
        <tbody>
         {
         projects.map((project, index) => (
            <tr key={project.id}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{project.client_name}</td>
              <td style={tdStyle}>{project.project_name}</td>
              <td style={tdStyle}>{project.start_date}</td>
              <td style={tdStyle}>{project.end_date}</td>
              <td style={tdStyle}>
              
              </td>
              <td style={{...tdStyle, ...action_content_width}}> 
                
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Projects_dev_data