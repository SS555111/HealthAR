// // AddSong.js
// import React, { useState } from 'react';
// import "./AddSong.css"
// const AddSong = ({ onAddSong }) => {
//   const [newSongTitle, setNewSongTitle] = useState('');

//   const handleAddSong = () => {
//     // Simulate adding a new song
//     const newSong = {
//       id: Math.random(),
//       title: newSongTitle,
//       url: 'new-song.mp3',
//     };
//     onAddSong(newSong);
//   };

//   return (
//     <div>
//       <h1>Add Song</h1>
//       <input
//         type="text"
//         placeholder="Enter song title"
//         value={newSongTitle}
//         onChange={(e) => setNewSongTitle(e.target.value)}
//       />
//       <button onClick={handleAddSong}>Add Song</button>
//     </div>
//   );
// };

// export default AddSong;


// src/components/AddSong.js
// src/components/AddSong.js
import React, { useState } from 'react';
import "./AddSong.css"

const AddSong = ({ onAddSong }) => {
  const [songTitle, setSongTitle] = useState('');

  const handleAddSong = () => {
    if (songTitle.trim() !== '') {
      // Call the onAddSong function passed from the parent component
      onAddSong(songTitle);
      setSongTitle('');
    } else {
      alert('Please enter a valid song title.');
    }
  };

  return (
    <div className="add-song-container">
      <h1>Add Song</h1>
      <input
        type="text"
        placeholder="Enter song title"
        value={songTitle}
        onChange={(e) => setSongTitle(e.target.value)}
      />
      <button onClick={handleAddSong}>Add Song</button>
    </div>
  );
};

export default AddSong;
