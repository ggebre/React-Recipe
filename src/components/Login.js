import React, { useState } from 'react' 
import PropTypes from 'prop-types';
import './Login.css'

export default function Login({setToken}){
    const [name, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
          name,
          password
        });
        setToken(token);
        
      } 
      
    return (
        <div className="login-wrapper">
            <h1>Please Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)}/>                
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={e => setPassword(e.target.value)}/>
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
                <p><a href="www.google.com">Sign Up</a></p>
            </form>
        </div>  
    )
}

async function loginUser(credentials) {
    let url = 'https://myrecipe-gg.herokuapp.com/login'
    // let url = 'http://localhost:3000/login'

    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

   Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }