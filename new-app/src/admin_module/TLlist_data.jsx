import React, { useEffect, useState } from 'react'
import axios from 'axios';
import config from "./config"
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function TLlist_data() {



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



      const navigate = useNavigate()

    const [members, setMembers] = useState([]);

    useEffect(() => {
        axios.get(`${config.baseurl}tl_details/`)
            .then(response => {
                setMembers(response.data);
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error fetching member details:', error);
            });
      }, []);
    



    const delete_Tl = (id) => {

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

      const Tl_to_developer = (id) => {

        let data = {
          "id":id
        }
        console.log(id)
    
        axios.put(`${config.baseurl}tl_to_dev/?id=${id}`)
        .then((res) => {
          console.log(res)
          navigate(0);
    
        })
        .catch((err) => {
          console.log(err)
        })
    
    
    
      };

      



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
                <Button variant="success" onClick={() => Tl_to_developer(member.id)}>Convert to Developer</Button>{'  '} 
                <Button variant="danger" onClick={() => delete_Tl(member.id)}>Delete</Button>{' '}
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </main>
  )
}

export default TLlist_data