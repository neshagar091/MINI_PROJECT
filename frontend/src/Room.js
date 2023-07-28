// Room.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Roomdata from './Roomdata';
import './room.css';

const Room = () => {
  const [selectedLocation, setSelectedLocation] = useState('New Delhi');

  const filteredRooms = Roomdata.filter(room => room.location === selectedLocation);

  return (
    <div className="room-selection-page">
      <div className="location-selector">
        <h3>Select a Location:</h3>
        <select value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
          <option value="New Delhi">New Delhi</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Chennai">Chennai</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Jaipur">Jaipur</option>
          <option value="Kolkata">Kolkata</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Pune">Pune</option>
        </select>
      </div>
      <div className="room-list">
        {filteredRooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image} alt={room.name} />
            <h2>{room.name}</h2>
            <p>Location: {room.location}</p>
            <p>Price from Rs.{room.price} per night</p>
            <Link to='/booknow'>Book Now</Link>
          </div>
        ))}
        
<nav className="navbar">
        <ul style={{display:"flex",justifyContent:"center"}}>
          <li style={{marginRight:"100px"}}><Link to="/about">About</Link></li>
          <li style={{marginRight:"700px"}}><Link to="/feedback">feedback</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      </div>
    </div>
  );
};

export default Room;
