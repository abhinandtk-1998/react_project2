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
import { useNavigate } from 'react-router-dom';

function Edit_tl_profile_form() {

    const first_nameref = useRef(null)
  const last_nameref = useRef(null)
  const usernameref = useRef(null)
  const emailref = useRef(null)
  const addressref = useRef(null)
  const courseref = useRef(null)
  const fileref = useRef(null)
  const departmentref = useRef(null)


  const [profile, setProfile] = useState([]);

  const [courseOption, setCourseOption] = useState('');

  const [departmentOption, setDepartmentOption] = useState('');

  const courseChange = (event) => {
    setCourseOption(event.target.value);
  };

  const departmentChange = (event) => {
    setDepartmentOption(event.target.value);
  };

  

  const navigate = useNavigate()

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
            setCourseOption(response.data.course);
            setDepartmentOption(response.data.course);
            console.log(response.data);
        })
        .catch(error => {
            console.error('Error fetching profile details:', error);
        });

}, []);



    const handleEdit = () => {
      // const updatedProfile = {
      //   first_name: first_nameref.current.value,

      //   last_name: last_nameref.current.value,
      //   username: usernameref.current.value,
      //   email: emailref.current.value,
      //   address: addressref.current.value,
      //   course: courseref.current.value,
      //   department: departmentref.current.value,
      //   file: fileref.current.files[0]
      // };
      // console.log('Updated Profile:', updatedProfile);
      // Add code here to send updated profile data to the server



      if(first_nameref.current.value && last_nameref.current.value && usernameref.current.value &&
        emailref.current.value && addressref.current.value && courseref.current.value &&
        departmentref.current.value
      ){
  
  
        let data = {
          "id":profile.id,
          "first_name":first_nameref.current.value,
          "last_name":last_nameref.current.value,
          "username":usernameref.current.value,
          "email":emailref.current.value,
          "address":addressref.current.value,
          "course":courseref.current.value,
          "file":fileref.current.files[0],
          "department":departmentref.current.value
        }
        
  
  
        
        const headers = {
          'Content-Type': "application/json",
        }
        axios.put("http://127.0.0.1:8000/edit_profile/", data, headers)
            .then((res) => {
              console.log(res.data)
              navigate('/teamlead')
          })
  
            .catch((err) => {
              console.log(err)
            })
  
            
      }
      else{
        alert("Enter all field")
      }




    };

    // const address = profile?.address || '';
    // const firstName = profile?.user?.first_name || '';
    // const lastName = profile?.user?.last_name || '';
    // const userName = profile?.user?.username || '';
    // const deparment = profile?.department || '';
    // const email = profile?.user?.email || '';
    // const course = profile?.course || '';

  return (
    <main className='main-container'>

        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-3' style={{maxWidth: '800px'}}>
            <MDBCardBody className='px-5'>
              <h2 className="text-uppercase text-center mb-5">Edit Profile</h2>
              <Form.Control className='mb-4' id='fname' type='text' defaultValue={profile.user?.first_name || ''} ref={first_nameref}/>
              <Form.Control className='mb-4' id='lname' type='text' defaultValue={profile.user?.last_name || ''} ref={last_nameref}/>
              <Form.Control className='mb-4' id='username' type='text' defaultValue={profile.user?.username || ''}ref={usernameref}/>
              <Form.Control className='mb-4' id='email' type='email' defaultValue={profile.user?.email || ''} ref={emailref}/>
              <Form.Control className='mb-4' as="textarea" rows={3} defaultValue={profile.address || ''} ref={addressref} />
              <Form.Select className='mb-4' aria-label="Default select example" value={courseOption} onChange={courseChange} ref={courseref}>
                <option>Course Completed</option>
                <option value="Javascript">Javascript</option>
                <option value="Python">Python</option>
                <option value="Java">Java</option>  
              </Form.Select>
              <Form.Group controlId="formFile" className="mb-4">
                <Form.Control type="file" ref={fileref} />
              </Form.Group>
              <Form.Select aria-label="Default select example" value={departmentOption} onChange={departmentChange} ref={departmentref}>
                <option>Department</option>
                <option value="digital_marketting">Digital marketting</option>
                <option value="python">Python</option>
              </Form.Select>
              <br></br>

              <span></span>
              <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={handleEdit} >Edit</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
    </main>
  )
}

export default Edit_tl_profile_form