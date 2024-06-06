import React, { useRef, useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody
  }
  from 'mdb-react-ui-kit';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";






function Login() {

  const usernameref = useRef(null)
  const passwordref = useRef(null)

  // const [username, setUsername] = useState()
  // const [password, setPassword] = useState()

  function loginSubmit(){

    // console.log(username, password)

    
  
    if(usernameref.current.value && passwordref.current .value){
      let data = {
        "password":passwordref.current .value,
        "username":usernameref.current.value
      }
      const headers = {
        'Content-Type': "application/json",
      }
      axios.post("http://127.0.0.1:8000/login/", data)
          .then((res) => console.log(res.data))
          .catch((err) => {
            console.log(err)
          })
    }
    else{
      alert("Enter username and password")
    }
  
    
  }


  return (
    <>


    <Navbar expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Employee Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* Use ms-auto to push contents to the right */}
                        <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                        <Nav.Link><Link>Log In</Link></Nav.Link>
                        <Nav.Link><Link to='/signup'>Sign Up</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>







    <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='text' ref={usernameref}/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' ref={passwordref}/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn className="mb-4" onClick={loginSubmit}>Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <Link to='/signup'>Register</Link></p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>



  {/* <MDBContainer fluid>

  <MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
        <p className="text-white-50 mb-5">Please enter your login and password!</p>

        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='text' size="lg" />
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" />

        <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
        <MDBBtn outline className='mx-2 px-5' color='white' size='lg' >
          Login
        </MDBBtn>

        <div className='d-flex flex-row mt-3 mb-5'>
          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="lg"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='twitter' size="lg"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='google' size="lg"/>
          </MDBBtn>
        </div>

        <div>
          <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

        </div>
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
  </MDBRow>

  </MDBContainer> */}




    </>
  )
}

export default Login