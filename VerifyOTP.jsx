// // Import for React Router v6
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// const VerifyOTP = ({ setAuthenticated }) => {
//   const navigate = useNavigate();
//   const [otp, setOtp] = useState('');

//   const handleVerifyOTP = () => {
//     // Simulate OTP verification
//     const isVerified = true; // Replace with actual verification logic

//     if (isVerified) {
//       setAuthenticated(true);
//       navigate('/songs-list');
//     } else {
//       alert('Invalid OTP. Please try again.');
//     }
//   };

//   return (
//     <div>
//       <h1>Verify OTP</h1>
//       <input
//         type="text"
//         placeholder="Enter OTP"
//         value={otp}
//         onChange={(e) => setOtp(e.target.value)}
//       />
//       <button onClick={handleVerifyOTP}>Verify OTP</button>
//     </div>
//   );
// };

// export default VerifyOTP;




// src/components/VerifyOTP.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./VerifyOTP.css"

const VerifyOTP = ({ setAuthenticated }) => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleVerifyOTP = () => {
    // In a real scenario, you would send the entered OTP to the server for verification.
    // Here, we simulate the verification using a hardcoded value (e.g., "5678").
    const isVerified = otp === '5678';

    if (isVerified) {
      setAuthenticated(true);
      navigate('/songs-list');
    } else {
      alert('Invalid OTP. Please try again.');
    }
  };

  return (
    <div>
      <h1>Verify OTP</h1>
      <p>Enter the OTP sent to your device:</p>
      <input
        type="text"
        placeholder="Enter OTP"
        value={otp}
        onChange={(e) => setOtp(e.target.value)}
      />
      <button onClick={handleVerifyOTP}>Verify OTP</button>
    </div>
  );
};

export default VerifyOTP;
