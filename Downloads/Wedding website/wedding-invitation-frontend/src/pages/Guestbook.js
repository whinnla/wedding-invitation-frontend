import React, { useState, useEffect } from 'react';
import axios from '../utils/axios';

const Guestbook = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get('/guestbook');
      setMessages(response.data);
    };
    fetchMessages();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/guestbook', { name, message });
      setMessages([response.data, ...messages]);
      setName('');
      setMessage('');
    } catch (error) {
      alert('Error submitting message');
    }
  };

  return (
    <div className="container">
      <h1>Guestbook</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button type="submit">Submit Message</button>
      </form>
      <div>
        {messages.map((msg) => (
          <div key={msg._id}>
            <h3>{msg.name}</h3>
            <p>{msg.message}</p>
            <small>{new Date(msg.timestamp).toLocaleString()}</small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guestbook;
