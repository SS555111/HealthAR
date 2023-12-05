// // src/components/Login.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const Login = ({ setAuthenticated }) => {
//   const [phone, setPhone] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     // Simulate phone number verification
//     const isVerified = true; // Replace with actual verification logic

//     if (isVerified) {
//       setAuthenticated(true);
//       navigate('/songs-list');
//     } else {
//       alert('Invalid phone number. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Login</h1>
//       <input
//         type="tel"
//         placeholder="Enter phone number"
//         value={phone}
//         onChange={(e) => setPhone(e.target.value)}
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// };

// export default Login;



// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Login.css"

const Login = ({ setAuthenticated }) => {
  const [phone, setPhone] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate phone number verification
    const isVerified = true; // Replace with actual verification logic

    if (isVerified) {
      navigate('/verify-otp');
    } else {
      alert('Invalid phone number. Please try again.');
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <input
        type="tel"
        placeholder="Enter phone number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
