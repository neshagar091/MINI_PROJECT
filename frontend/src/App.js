import React from 'react';
import Login from './login';
import Register from './Registration';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import DropdownMenu from './home';
import About from './about';
import Contact from './contact';
import Feedback from './feedback';
import Room from './Room';
import PaymentPage from './payment';
import RoomDetails from './RoomDetails';
const App = () => {
  return (
    <div>
      {/* <Login /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/Login"  element={<Login/>} />
          <Route path="/signup"  element={<Register />} />
          <Route path="/"  element={<DropdownMenu />} />
          <Route path="/about"  element={<About />} />
          <Route path="/contact"  element={<Contact/>} />
          <Route path="/Feedback"  element={<Feedback/>} />
          <Route path="/Room"  element={<Room/>} />
          <Route path="/booknow" element={<PaymentPage/>}/>
          <Route path="/roomdetails" component={RoomDetails} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
};

export default App;
