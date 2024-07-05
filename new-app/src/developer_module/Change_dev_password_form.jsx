import React, { useRef } from 'react'
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
  

function Change_dev_password_form() {

    const passwordref = useRef(null)
    const newpasswordref = useRef(null)
    const cnewpasswordref = useRef(null)


    const passwordChange = () => {
  
  
  
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
                navigate('/developer')
            })
    
              .catch((err) => {
                console.log(err)
              })
    
              
        }
        else{
          alert("Enter all field")
        }
  
  
  
  
      };

  return (
    <main className='main-container'>

        <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' >
          <div className='mask gradient-custom-3'></div>
          <MDBCard className='m-3' style={{maxWidth: '800px'}}>
            <MDBCardBody className='px-5'>
              <h2 className="text-uppercase text-center mb-5">Change Password</h2>
              <br></br>
              <MDBInput wrapperClass='mb-4' placeholder="enter current password" id='form2' type='password' ref={passwordref}/>
              <MDBInput wrapperClass='mb-4' placeholder="enter new password" id='form3' type='password' ref={newpasswordref}/>
              <MDBInput wrapperClass='mb-4' placeholder="conform password" id='form4' type='password' ref={cnewpasswordref}/>
              <span></span>
              <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg' onClick={passwordChange} >Save</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBContainer>
    </main>
  )
}

export default Change_dev_password_form