import React, { useState } from 'react';
import "./home.css";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from './Navbar';
function HotelBookingPage() {
  const [checkInDate, setCheckInDate] = useState('');
  const [checkOutDate, setCheckOutDate] = useState('');
  const [numAdults, setNumAdults] = useState(1);
  const [numChildren, setNumChildren] = useState(0);
  const [location, setlocation] = useState('');

  const handlelocationchange = (e) => {
    setlocation(e.target.value);
  }

  const handleCheckInDateChange = (e) => {
    setCheckInDate(e.target.value);
  };

  const handleCheckOutDateChange = (e) => {
    setCheckOutDate(e.target.value);
  };

  const handleNumAdultsChange = (e) => {
    setNumAdults(parseInt(e.target.value));
  };

  const handleNumChildrenChange = (e) => {
    setNumChildren(parseInt(e.target.value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    const data = {
      location: location,
      children: numChildren,
      guest: numAdults,
      out: checkOutDate,
      in: checkInDate,
    };

    console.log(data);

    axios.post("http://127.0.0.1:8080/postbook", data)
      .then((response) => {
        console.log("Data stored in the database:", response.data);
        console.log(data);
      })
      .catch((error) => {
        if (error.response) {
          console.log("Error:", error.response.data);
        } else {
          console.log('Error:', error.message);
        }
      });
  };

  return (
    <div>
      <Navbar/>
      
      <div className="content">
        <div className="hotel-booking-page">
          <h1>Path to Paradise</h1>
          <form onSubmit={handleSubmit}>
            <label>
              Check-in Date:
              <input type="date" value={checkInDate} onChange={handleCheckInDateChange} required/>
            </label>
            <label>
              Check-out Date:
              <input type="date" value={checkOutDate} onChange={handleCheckOutDateChange} required/>
            </label>
            <label>
              Number of Adults:
              <input type="number" value={numAdults} onChange={handleNumAdultsChange} required/>
            </label>
            <label>
              Number of Children:
              <input type="number" value={numChildren} onChange={handleNumChildrenChange} required/>
            </label>
            <label>
              Location:
              <input className='loc' type="text" value={location} onChange={handlelocationchange} required/>
            </label>
            <Link to='/Room'><button type="submit">Book Now</button></Link>
          </form>
        </div>
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} BookMyStay. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HotelBookingPage;
