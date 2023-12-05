// // SongsList.js
// import React, { useState } from 'react';
// import "./SongList.css"
// const SongsList = () => {
//   const [songs, setSongs] = useState([
//     { id: 1, title: 'Song 1', url: 'song1.mp3' },
//     { id: 2, title: 'Song 2', url: 'song2.mp3' },
//     // Add more songs as needed
//   ]);

//   return (
//     <div>
//       <h1>Songs List</h1>
//       <ul>
//         {songs.map((song) => (
//           <li key={song.id}>{song.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default SongsList;



import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AddSong from './AddSong';

const SongsList = () => {
  const [songs, setSongs] = useState([]);

  const handleAddSong = (title) => {
    setSongs([...songs, { id: songs.length + 1, title, isPlaying: false }]);
  };

  const handleTogglePlay = (id) => {
    setSongs((prevSongs) =>
      prevSongs.map((song) =>
        song.id === id ? { ...song, isPlaying: !song.isPlaying } : song
      )
    );
  };

  return (
    <div className="songs-list-container">
      <h1>Songs List</h1>
      <ul>
        {songs.map((song) => (
          <li key={song.id}>
            {song.title} -{' '}
            <button onClick={() => handleTogglePlay(song.id)}>
              {song.isPlaying ? 'Pause' : 'Play'}
            </button>{' '}
            - <Link to={`/player/${song.id}`}>Details</Link>
          </li>
        ))}
      </ul>
      <AddSong onAddSong={handleAddSong} />
    </div>
  );
};

export default SongsList;
