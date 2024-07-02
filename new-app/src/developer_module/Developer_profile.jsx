import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Developer_profile() {

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
    const deparment = profile?.department || 'No department provided';
    const email = profile?.user?.email || 'No email provided';
    




  return (
    <main className='main-container'>

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
      <div className="card m-7">
        <img src="img.jpg" alt={firstName} style={{ width: "100%" }} />
        <h1>{firstName} {lastName}</h1>
        <p className="title">Developer</p>
        <p>{email}</p>
        <p>{address}</p>
        <p>
          <button>Edit</button>
        </p>
      </div>
    </main>
  )
}

export default Developer_profile
