import React, { useRef, useState } from 'react'
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
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
  

function Change_dev_password_form() {

    const passwordref = useRef(null)
    const newpasswordref = useRef(null)
    const cnewpasswordref = useRef(null)

    const [newPassword, setNewPassword] = useState('');


    const navigate = useNavigate()


    const passwordChange = () => {


        let data = {
            "password":passwordref.current.value,
        }
          
          
        var token = localStorage.getItem('auth_token');

        console.log(token)

        const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Token ${token}`
        };


        axios.post("http://127.0.0.1:8000/check_password/",data, {headers})
            .then(response => {
                
                console.log(response.data);

                if(newpasswordref.current.value === cnewpasswordref.current.value){

                    const specialCharactersRegex = /[!@#$%^&*(),.?":{}|<>]/g;
        
                    const numberRegex = /\d/;  // \d matches any digit (0-9)
        
                    const capitalLetterRegex = /[A-Z]/;

                    setNewPassword(newpasswordref.current.value)
        
                    if(newPassword.length < 8){
                        alert("password must contain minimum 8 characters")
                    }
                    else if(specialCharactersRegex.test(newpasswordref.current.value)){
                        alert("password must contain special character")
                    }
        
                    else if(numberRegex.test(newpasswordref.current.value)){
                        alert("password must contain numbers")
                    }
        
                    else if(capitalLetterRegex.test(newpasswordref.current.value)){
                        alert("password must contain capital letter")
                    }
        
                    else{

                        let data = {
                            "newpassword":newpasswordref.current.value
                
                          }
                          
                        var token = localStorage.getItem('auth_token');

                        console.log(token)

                        const headers = {
                        'Content-Type': 'application/json',
                        'Authorization': `Token ${token}`
        };
                        axios.put("http://127.0.0.1:8000/change_password/", data, headers)
                            .then((res) => {
                            console.log(res.data)
                            navigate('/developer')
                        })
                
                            .catch((err) => {
                            console.log(err)
                            })
                    }
        
            
                  
            
                      
                }
                else{
                  alert("Enter all field")
                }
            })
            .catch(error => {
                console.error('Error fetching profile details:', error);
            });


  
  
  
        
  
  
  
  
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