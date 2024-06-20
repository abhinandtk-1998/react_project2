import React, { useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


function Projects_data() {

    const [show, setShow] = useState(false);
    const navigate = useNavigate()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const client_nameref = useRef(null)
    const client_addressref = useRef(null)
    const project_nameref = useRef(null)
    const descriptionref = useRef(null)
    const start_dateref = useRef(null)
    const end_dateref = useRef(null)
    const attachmentref = useRef(null)


    function addProject(){

      if(client_nameref.current.value && client_addressref.current.value && project_nameref.current.value &&
        descriptionref.current.value && start_dateref.current.value && end_dateref.current.value && attachmentref.current.files[0]
      ){
  
  
        let data = {
          "client_name":client_nameref.current.value,
          "client_address":client_addressref.current.value,
          "project_name":project_nameref.current.value,
          "description":descriptionref.current.value,
          "start_date":start_dateref.current.value,
          "end_date":end_dateref.current.value,
          "attachment":attachmentref.current.files[0],
        }
  
        
  
  
        
        const headers = {
          'Content-Type': "application/json",
        }
        axios.post("http://127.0.0.1:8000/add_project/", data, headers)
            .then((res) => console.log(res.data),navigate(0))
  
            .catch((err) => {
              console.log(err)
            })
  
            
      }
      else{
        alert("Enter all field")
      }
    

    }

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

  return (
    <main className='main-container'>

      <Button variant="primary" onClick={handleShow} >
        Add Project
      </Button>

      <Modal show={show} onHide={handleClose} >
        <Modal.Header closeButton style={modalStyle}>
          <Modal.Title>Add Project</Modal.Title>
        </Modal.Header>
        <Modal.Body style={modalStyle}>

          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Client Name</Form.Label>
              <Form.Control type="text" ref={client_nameref} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Client Address</Form.Label>
              <Form.Control as="textarea" rows={3} ref={client_addressref} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Project Name</Form.Label>
              <Form.Control type="text" ref={project_nameref} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} ref={descriptionref} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Start Date</Form.Label>
              <Form.Control type="date" ref={start_dateref}  />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>End Date</Form.Label>
              <Form.Control type="date" ref={end_dateref} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Attachment</Form.Label>
              <Form.Control type="file" ref={attachmentref} />
            </Form.Group>
          </Form>

        </Modal.Body>
        <Modal.Footer style={modalStyle}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addProject}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      <table striped bordered hover className='m-3'>
        <thead>
          <th style={{...thStyle, ...sl_no_width}}>Sl.No</th>
          <th style={{...thStyle, ...name_width}}>Name</th>
          <th style={{...thStyle, ...email_width}}>Email</th>
          <th style={{...thStyle, ...department_width}}>Department</th>
          <th style={{...thStyle, ...course_width}}>Course Completed</th>
          <th style={{...thStyle, ...action_width}}>Action</th>
        </thead>
        {/* <tbody>
         {
         members.map((member, index) => (
            <tr key={member.id}>
              <td style={tdStyle}>{index + 1}</td>
              <td style={tdStyle}>{member.user.first_name} {member.user.last_name}</td>
              <td style={tdStyle}>{member.user.email}</td>
              <td style={tdStyle}>{member.department}</td>
              <td style={tdStyle}>{member.course}</td>
              <td style={{...tdStyle, ...action_content_width}}> 
                <Button variant="success" >Convert to Developer</Button>{'  '} 
                <Button variant="danger" >Delete</Button>{' '}
              </td>
              
            </tr>
          ))}
        </tbody> */}
      </table>
    </main>
  )
}

export default Projects_data