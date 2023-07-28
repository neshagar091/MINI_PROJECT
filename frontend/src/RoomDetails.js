// RoomDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';
import Roomdata from './Roomdata';
import './room.css';

const RoomDetails = () => {
  const { id } = useParams(); // Get the "id" parameter from the URL
  const selectedRoom = Roomdata.find((room) => room.id === parseInt(id));

  if (!selectedRoom) {
    return <div>Room not found</div>; // Handle if the room with the given ID is not found
  }

  return (
    <div className="room-details-page">
      <div className="room-details-card">
        <img src={selectedRoom.image} alt={selectedRoom.name} />
        <h2>{selectedRoom.name}</h2>
        <p>Location: {selectedRoom.location}</p>
        <p>Price from Rs.{selectedRoom.price} per night</p>
        <p>Description: {selectedRoom.description}</p>
        {/* Add more details you want to display */}
      </div>
    </div>
  );
};

export default RoomDetails;
