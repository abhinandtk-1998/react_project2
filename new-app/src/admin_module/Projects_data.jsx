import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Projects_data() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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

      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
            <div className='mask gradient-custom-3'></div>
            <MDBCard className='m-3' style={{maxWidth: '800px'}}>
                <MDBCardBody className='px-5'>
                <h2 className="text-uppercase text-center mb-5">Registration Form</h2>
                <MDBInput wrapperClass='mb-4' id='fname' type='text' placeholder='enter first name' ref={first_nameref}/>
                <MDBInput wrapperClass='mb-4' id='lname' type='text' placeholder='enter last name' ref={last_nameref}/>
                <MDBInput wrapperClass='mb-4' id='username' type='text' placeholder='enter username' ref={usernameref}/>
                <MDBInput wrapperClass='mb-4' id='email' type='email' placeholder='enter email' ref={emailref}/>
                <Form.Control className='mb-4' as="textarea" rows={3} placeholder='enter address' ref={addressref} />
                <Form.Select className='mb-4' aria-label="Default select example" ref={courseref}>
                    <option>Course Completed</option>
                    <option value="Javascript">Javascript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>  
                </Form.Select>
                <Form.Group controlId="formFile" className="mb-4">
                    <Form.Control type="file" ref={fileref} />
                </Form.Group>
                <Form.Select aria-label="Default select example" ref={departmentref}>
                    <option>Department</option>
                    <option value="digital_marketting">Digital marketting</option>
                    <option value="python">Python</option>
                </Form.Select>
                <br></br>
                <MDBInput wrapperClass='mb-4' placeholder="enter password" id='form3' type='password' ref={passwordref}/>
                <MDBInput wrapperClass='mb-4' placeholder="conform password" id='form4' type='password'/>
                <span></span>
                <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={signupSubmit}>Register</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            </MDBContainer> 
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
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