import React, { useState } from 'react';
import './login.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from './action';
import axios from 'axios';

const Login = () => {
  const dispatch = useDispatch();
  const [username, setusername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleusernameChange = (e) => {
    setusername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      email: email,
      uname: username,
      password: password,
    };

    axios.post("http://127.0.0.1:8080/add", data)
      .then((response) => {
        console.log("Data stored in the database:", response.data);
        console.log(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Error:", error.response.data);
        } else {
          console.log('Error:', error.message);
        }
      });

    dispatch(setUser(email));
  };

  return (
    <div className='top'>
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Username:</label>
            <input type="text" value={username} onChange={handleusernameChange} />
          </div>
          <div>
            <label>Password:</label>
            <input type="password" value={password} onChange={handlePasswordChange} />
          </div>
          <Link to='/Room'><button type="submit">Login</button></Link>
        </form>

        <div className="login-container-bottom">
          <h5>
            Don't have an account?
            <Link to="/signup">
              <p style={{ color: 'green' }}> Sign Up</p>
            </Link>
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Login;
