import React, { useState } from 'react';
import './App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  // State for storing user input
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // Function to handle form submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Perform authentication logic here (e.g., send a request to your server)

    // Reset the form fields
    setUsername('');
    setPassword('');
    navigate('/app');
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      <form className="Form" onSubmit={handleLogin}>
        <div className="FormRow">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="FormRow">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="FormRow">
          <button type="submit" className='loginbtn'>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
