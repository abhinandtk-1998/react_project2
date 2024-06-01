import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";
import "./Home.css"

function Home() {
  return (
    <>
        <Navbar expand="lg" className="bg-body-tertiary" >
            <Container>
                <Navbar.Brand href="#home">Employee Management</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto"> {/* Use ms-auto to push contents to the right */}
                        <Nav.Link><Link>Home</Link></Nav.Link>
                        <Nav.Link><Link to='/login' >Log In</Link></Nav.Link>
                        <Nav.Link><Link to='/signup' >Sign Up</Link></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        <div >

        </div>

    </>
  )
}

export default Home