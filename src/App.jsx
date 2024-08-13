import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home/Home';
import AboutUs from './Components/Home/AboutUs';
import Healthcare from './Components/Home/Healthcare';
import Doctors from './Components/Home/Doctors';
import ServiceDetail from './Components/Home/ServiceDetail'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/services/:serviceName" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
