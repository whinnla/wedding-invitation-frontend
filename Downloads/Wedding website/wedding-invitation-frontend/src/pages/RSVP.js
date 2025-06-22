import React, { useState } from 'react';
import axios from '../utils/axios';

const RSVP = () => {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState(false);
  const [dietaryPreferences, setDietaryPreferences] = useState('');
  const [plusOne, setPlusOne] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/rsvp', {
        name,
        attending,
        dietaryPreferences,
        plusOne,
      });
      alert('RSVP submitted successfully');
    } catch (error) {
      alert('Error submitting RSVP');
    }
  };

  return (
    <div className="container">
      <h1>RSVP</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label>
          <input
            type="checkbox"
            checked={attending}
            onChange={(e) => setAttending(e.target.checked)}
          />
          Attending
        </label>
        <input
          type="text"
          placeholder="Dietary Preferences"
          value={dietaryPreferences}
          onChange={(e) => setDietaryPreferences(e.target.value)}
        />
        <input
          type="text"
          placeholder="Plus One"
          value={plusOne}
          onChange={(e) => setPlusOne(e.target.value)}
        />
        <button type="submit">Submit RSVP</button>
      </form>
    </div>
  );
};

export default RSVP;
