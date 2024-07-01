import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Projects_tl_data() {

    



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

        const [devs, setDevs] = useState([]);

        const [dropdownValue, setDropdownValue] = useState('');

        const navigate = useNavigate()


        const assign_work = async (m_id) => {
          // const assign_work = (m_id) => {
      
            
      
            let data = {
              "m_id":m_id,
              "dev_id":dropdownValue
        
            }
            // "tl_id":tl_optionref.current.value,
      
            const headers = {
              'Content-Type': "application/json",
            }
        
            axios.put("http://127.0.0.1:8000/assign_work_tl/", data, headers)
            .then((res) => {
              console.log(res)
              navigate(0);
        
            })
            .catch((err) => {
              console.log(err)
            })
        
        
        
          };



        useEffect(() => {

          var token = localStorage.getItem('auth_token');

          console.log(token)

          const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Token ${token}`
          };



          axios.get("http://127.0.0.1:8000/project_details_tl/", {headers})
              .then(response => {
                  
                  setProjects(response.data);
                  console.log(response.data);
              })
              .catch(error => {
                  console.error('Error fetching member details:', error);
              });
      }, []);


      useEffect(() => {
        axios.get("http://127.0.0.1:8000/dev_details_tl/")
            .then(response => {
                setDevs(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching TL details:', error);
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
              {project.developer_details ? (
                <p></p>
            ) : (
              <div>
              <Form.Select className='mb-4' aria-label="Default select example" onChange={(e) => setDropdownValue(e.target.value)}>
              <option>Select Developer</option>
              {
                devs.map((dev, index) => (
              <option key={dev.id} value={dev.id}>{dev.user.first_name} {dev.user.last_name}</option>

              

            ))}
            </Form.Select>

            <Button variant="primary" onClick={() => assign_work(project.id)}>
                Assign Work
            </Button>
            </div>
            )}


              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default Projects_tl_data