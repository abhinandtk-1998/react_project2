import React, { useEffect, useRef, useState } from 'react'
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

function Edit_dev_profile_form() {

  const first_nameref = useRef(null)
  const last_nameref = useRef(null)
  const usernameref = useRef(null)
  const emailref = useRef(null)
  const addressref = useRef(null)
  const courseref = useRef(null)
  const fileref = useRef(null)
  const departmentref = useRef(null)


  const [profile, setProfile] = useState([]);

  useEffect(() => {

    var token = localStorage.getItem('auth_token');

    console.log(token)

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`
    };



    axios.get("http://127.0.0.1:8000/developer_profile/", {headers})
        .then(response => {
            
            setProfile(response.data);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching profile details:', error);
        });
}, []);

    const address = profile?.address || 'No address provided';
    const firstName = profile?.user?.first_name || 'No name provided';
    const lastName = profile?.user?.last_name || 'No name provided';
    const userName = profile?.user?.username || 'No usernme provided';
    const deparment = profile?.department || 'No department provided';
    const email = profile?.user?.email || 'No email provided';
    const course = profile?.course || 'No course provided';

  return (
    <main className='main-container'>

        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-3' style={{maxWidth: '800px'}}>
            <MDBCardBody className='px-5'>
              <h2 className="text-uppercase text-center mb-5">Edit Profile</h2>
              <MDBInput wrapperClass='mb-4' id='fname' type='text' placeholder={firstName} ref={first_nameref}/>
              <MDBInput wrapperClass='mb-4' id='lname' type='text' placeholder={lastName} ref={last_nameref}/>
              <MDBInput wrapperClass='mb-4' id='username' type='text' placeholder={userName} ref={usernameref}/>
              <MDBInput wrapperClass='mb-4' id='email' type='email' placeholder={email} ref={emailref}/>
              <Form.Control className='mb-4' as="textarea" rows={3} placeholder={address} ref={addressref} />
              <Form.Select className='mb-4' aria-label="Default select example" defaultValue={profile.course || ''} ref={courseref}>
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

              <span></span>
              <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Edit</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
    </main>
  )
}

export default Edit_dev_profile_form