import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rentals from './pages/Rentals';
import './App.css';
import Landing from './pages/reportDeath/Landing';

const App = () => {
  return(
    <Routes>
      <Route path="/book" element={<Home />} />
      <Route path="/rentals" element={<Rentals />} />
      <Route path="/" element={<Landing />} />
    </Routes>
  )
};

export default App;
