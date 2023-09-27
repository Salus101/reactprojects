import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function Welcome() {
  return (
    <div>
      <h1>Welcome to My React App</h1>
      <p>This is the welcome landing page.</p>
      {/* Add a Link to the login page */}
      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default Welcome;
