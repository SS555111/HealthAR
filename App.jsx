// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';
import Login from './Components/Login';
import VerifyOTP from './Components/VerifyOTP';
import SongsList from './Components/SongsList';
import AddSong from './Components/AddSong';
import Player from './Components/Player';
import NewPageComponent from './Components/NewPageComponent';

import "./App.css"


const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleLogout = () => {
    setAuthenticated(false);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {authenticated && (
            <>
              <li>
                <Link to="/songs-list">Songs List</Link>
              </li>
              <li>
                <Link to="/add-song">Add Song</Link>
              </li>
              <li>
                <Link to="/player">Player</Link>
              </li>
              <li>
                <Link to="/new-page">New Page</Link>
              </li>
            </>
          )}
          {!authenticated && (
            <li>
              <Link to="/login">Login</Link>
            </li>
          )}
          {authenticated && (
            <li>
              <button onClick={handleLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>

      <Routes>
        <Route
          path="/"
          element={authenticated ? <Navigate to="/songs-list" /> : <Login setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/login"
          element={<Login setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/verify-otp"
          element={authenticated ? <Navigate to="/songs-list" /> : <VerifyOTP setAuthenticated={setAuthenticated} />}
        />
        <Route
          path="/songs-list"
          element={authenticated ? <SongsList /> : <Navigate to="/" />}
        />
        <Route
          path="/add-song"
          element={authenticated ? <AddSong /> : <Navigate to="/" />}
        />
        <Route
          path="/player"
          element={authenticated ? <Player /> : <Navigate to="/" />}
        />
        <Route
          path="/new-page"
          element={authenticated ? <NewPageComponent /> : <Navigate to="/" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
