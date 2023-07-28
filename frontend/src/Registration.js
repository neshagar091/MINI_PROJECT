import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Registration.css';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName]=useState('');
  const [phone , setPhone]=useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNameChange= (e)=>{
    setName(e.target.value);
  }

  const handlePhoneChange = (e) =>{
    setPhone(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your login logic here
  };

  return (
    <div className='topReg'>

    <div className="login-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={handleEmailChange} />
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={handlePasswordChange} />
        </div>
        <div>
          <label>Name:</label>
          <input type="string" value={name} onChange={handleNameChange} />
        </div>
        <div>
            <label>phone:</label>
            <input type="string" value={phone} onChange={handlePhoneChange} />
        </div>
        <Link to="/">

        <button type="submit">Register</button>
        </Link>
       
      </form>
      
      
    </div>
    </div>
  
    
    
  );
  
  
};

export default Register;
