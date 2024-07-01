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


  return (
    <div>Projects_dev_data</div>
  )
}

export default Projects_dev_data