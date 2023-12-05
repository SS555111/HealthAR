import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Player = () => {
  const { id } = useParams();
  const [isPlaying, setIsPlaying] = useState(false);

  // You might have some logic here to fetch the song data based on the ID
  const song = /* Fetch song data based on ID */ {};

  const handleTogglePlay = () => {
    setIsPlaying((prevState) => !prevState);
    // Add logic to play or pause the audio here
  };

  return (
    <div className="player-container">
      <h1>Player</h1>
      {song ? (
        <div>
          <p>Song: {song.title}</p>
          {/* Add your audio player and controls here */}
          <audio controls>
            <source src={song.audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
          <button onClick={handleTogglePlay}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
      ) : (
        <p>Song not found</p>
      )}
    </div>
  );
};

export default Player;
