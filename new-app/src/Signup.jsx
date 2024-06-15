import React, { useRef, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from "react-router-dom";
import { Row, Col, Button, Spinner, Alert } from 'react-bootstrap';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox,
  MDBRow,
  MDBCol,
  MDBTextArea,
  MDBFile
}
from 'mdb-react-ui-kit';
import { Form } from 'react-bootstrap';
import axios from 'axios';


function Signup() {

  const navigate = useNavigate()


  const first_nameref = useRef(null)
  const last_nameref = useRef(null)
  const usernameref = useRef(null)
  const emailref = useRef(null)
  const addressref = useRef(null)
  const courseref = useRef(null)
  const fileref = useRef(null)
  const departmentref = useRef(null)
  const passwordref = useRef(null)

  // const [username, setUsername] = useState()
  // const [password, setPassword] = useState()

  function signupSubmit(){

    


    
  
    if(first_nameref.current.value && last_nameref.current.value && usernameref.current.value &&
      emailref.current.value && addressref.current.value && courseref.current.value && fileref.current.files[0] &&
      departmentref.current.value && passwordref.current.value
    ){


      let data = {
        "first_name":first_nameref.current.value,
        "last_name":last_nameref.current.value,
        "username":usernameref.current.value,
        "email":emailref.current.value,
        "address":addressref.current.value,
        "course":courseref.current.value,
        "file":fileref.current.files[0],
        "department":departmentref.current.value,
        "password":passwordref.current .value
      }

      // const data = new FormData();
      // data.append('first_name', first_nameref.current.value );
      // data.append('last_name', last_nameref.current.value);
      // data.append('username',  usernameref.current.value);
      // data.append('email', emailref.current.value);
      // data.append('address', addressref.current.value);
      // data.append('course', courseref.current.value);
      // data.append('file', fileref.current.files[0]);
      // data.append('department', departmentref.current.value);
      // data.append('password', passwordref.current.value);
      


      
      const headers = {
        'Content-Type': "application/json",
      }
      axios.post("http://127.0.0.1:8000/register/", data, headers)
          .then((res) => console.log(res.data))
          navigate('/login')

          .catch((err) => {
            console.log(err)
          })
    }
    else{
      alert("Enter all field")
    }
  
    
  }










  // const dispatch = useDispatch();
  // const [newUser, setNewUser] = useState(initialState);
  // const [passwordError, setPasswordError] = useState(passVerificationError);

  // const { isLoading, status, message } = useSelector(
  //   (state) => state.registration
  // );

  // useEffect(() => {}, [newUser]);

  // const handleOnChange = (e) => {
  //   const { name, value } = e.target;

  //   setNewUser({ ...newUser, [name]: value });

  //   if (name === "password") {
  //     const isLenthy = value.length > 8;
  //     const hasUpper = /[A-Z]/.test(value);
  //     const hasLower = /[a-z]/.test(value);
  //     const hasNumber = /[0-9]/.test(value);
  //     const hasSpclChr = /[@,#,$,%,&]/.test(value);

  //     setPasswordError({
  //       ...passwordError,
  //       isLenthy,
  //       hasUpper,
  //       hasLower,
  //       hasNumber,
  //       hasSpclChr,
  //     });
  //   }

  //   if (name === "confirmPass") {
  //     setPasswordError({
  //       ...passwordError,
  //       confirmPass: newUser.password === value,
  //     });
  //   }
  // };

  // const handleOnSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log(newUser);
  //   const { name, phone, email, company, address, password } = newUser;

  //   const newRegistration = {
  //     name,
  //     phone,
  //     email,
  //     company,
  //     address,
  //     password,
  //   };
  //   dispatch(newUserRegistration(newRegistration));
  // };


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


        {/* <Container>
          <Row>
            <Col>
              <h1 className="text-info">User Registration</h1>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              {message && (
                <Alert variant={status === "success" ? "success" : "danger"}>
                  {message}
                </Alert>
              )}
            </Col>
          </Row>

          <Row>
            <Col>
              <Form onSubmit={handleOnSubmit}>
                <Form.Group>
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    value={newUser.name}
                    onChange={handleOnChange}
                    placeholder="Your name"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Phone</Form.Label>
                  <Form.Control
                    type="number"
                    name="phone"
                    value={newUser.phone}
                    onChange={handleOnChange}
                    placeholder="Phone"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    value={newUser.email}
                    onChange={handleOnChange}
                    placeholder="Enter email"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Company name</Form.Label>
                  <Form.Control
                    type="text"
                    name="company"
                    value={newUser.company}
                    onChange={handleOnChange}
                    placeholder="Company name"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="address"
                    value={newUser.address}
                    onChange={handleOnChange}
                    placeholder="Full address"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="password"
                    value={newUser.password}
                    onChange={handleOnChange}
                    placeholder="Password"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="password"
                    name="confirmPass"
                    value={newUser.confirmPass}
                    onChange={handleOnChange}
                    placeholder="Confirm Password"
                    required
                  />
                </Form.Group>
                <Form.Text>
                  {!passwordError.confirmPass && (
                    <div className="text-danger mb-3">Password doesn't match!</div>
                  )}
                </Form.Text>

                <ul className="mb-4">
                  <li
                    className={
                      passwordError.isLenthy ? "text-success" : "text-danger"
                    }
                  >
                    Min 8 characters
                  </li>
                  <li
                    className={
                      passwordError.hasUpper ? "text-success" : "text-danger"
                    }
                  >
                    At least one upper case
                  </li>
                  <li
                    className={
                      passwordError.hasLower ? "text-success" : "text-danger"
                    }
                  >
                    At least one lower case
                  </li>
                  <li
                    className={
                      passwordError.hasNumber ? "text-success" : "text-danger"
                    }
                  >
                    At least one number
                  </li>
                  <li
                    className={
                      passwordError.hasSpclChr ? "text-success" : "text-danger"
                    }
                  >
                    At least on of the special characters i.e @ # $ % &{" "}
                  </li>
                </ul>

                <Button
                  variant="primary"
                  type="submit"
                  disabled={Object.values(passwordError).includes(false)}
                >
                  Submit
                </Button>
                {isLoading && <Spinner variant="info" animation="border" />}
              </Form>
            </Col>
          </Row>
          <Row className="py-4">
            <Col>
              Already have an account <a href="/">Login Now</a>
            </Col>
          </Row>
        </Container> */}









    </>
  )
}

export default Signup