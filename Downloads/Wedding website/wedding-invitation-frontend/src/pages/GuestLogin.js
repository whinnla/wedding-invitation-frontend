import React, { useState } from 'react';
import axios from '../utils/axios';

const GuestLogin = () => {
  const [email, setEmail] = useState('');
  const [inviteCode, setInviteCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/guest/login', { email, inviteCode });
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
    } catch (error) {
      alert('Invalid email or invite code');
    }
  };

  return (
    <div className="container">
      <h1>Guest Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Invite Code"
          value={inviteCode}
          onChange={(e) => setInviteCode(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default GuestLogin;
