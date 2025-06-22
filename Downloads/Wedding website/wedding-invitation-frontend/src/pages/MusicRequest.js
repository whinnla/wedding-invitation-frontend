import React, { useState } from 'react';
import axios from '../utils/axios';

const MusicRequest = () => {
  const [songTitle, setSongTitle] = useState('');
  const [artist, setArtist] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/music-request', { songTitle, artist });
      alert('Music request submitted successfully');
    } catch (error) {
      alert('Error submitting music request');
    }
  };

  return (
    <div className="container">
      <h1>Music Request</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Song Title"
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Artist"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          required
        />
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default MusicRequest;
