import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';


function Signup() {
  return (
    <>
    
    <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Employee Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* Use ms-auto to push contents to the right */}
                        <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/login' >Log In</Link></Nav.Link>
                        <Nav.Link><Link>Sign Up</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>


        {/* style={{backgroundImage: 'url(https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp)'}} */}

        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-3' style={{maxWidth: '800px'}}>
            <MDBCardBody className='px-5'>
              <h2 className="text-uppercase text-center mb-5">Create an account</h2>
              <MDBInput wrapperClass='mb-4' label='Your Name' size='lg' id='form1' type='text'/>
              <MDBInput wrapperClass='mb-4' label='Your Email' size='lg' id='form2' type='email'/>
              <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={3} />
                <Form.Label>Example textarea</Form.Label>
              </Form.Group>
              <MDBInput wrapperClass='mb-4' label='Course completed' size='lg' id='form3' type='text'/>
              <Form.Group controlId="formFile" className="mb-3">
                <Form.Control type="file" />
                <Form.Label>Attach certificate</Form.Label>
              </Form.Group>
              <Form.Select aria-label="Default select example">
                <option>Department</option>
                <option value="1">Digital marketting</option>
                <option value="2">Python</option>
              </Form.Select>
              <br></br>
              <MDBInput wrapperClass='mb-4' label='Password' size='lg' id='form3' type='password'/>
              <MDBInput wrapperClass='mb-4' label='Repeat your password' size='lg' id='form4' type='password'/>
              <div className='d-flex flex-row justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I agree all statements in Terms of service' />
              </div>
              <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Register</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>









    </>
  )
}

export default Signup