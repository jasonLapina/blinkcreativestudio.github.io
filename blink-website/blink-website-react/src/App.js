import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import Navbar from './components/Navbar';
import Tagline from './components/Tagline';
import Footer from './components/Footer';
import Home from './components/pages/Home';
import Capabilities from './components/pages/Capabilities';
import Works from './components/pages/Works';
import Studio from './components/pages/Studio';
import Livestream from './components/pages/Livestream';

import './App.css';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/capabilities' element={<Capabilities/>} />
          <Route path='/works' element={<Works/>} />
          <Route path='/studio' element={<Studio/>} />
          <Route path='/livestream' element={<Livestream/>}/>
        </Routes>
        <Tagline />
        <Footer />
      </Router>
    </>
  );
}

export default App;