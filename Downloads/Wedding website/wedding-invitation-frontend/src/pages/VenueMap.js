import React from 'react';

const VenueMap = () => {
  return (
    <div className="container">
      <h1>Venue Map</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086217509378!2d-122.419415684681!3d37.77492927975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f1a3b1b1%3A0x4b7b1b1b1b1b1b1b!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1616161616161!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Wedding Venue Map"
      ></