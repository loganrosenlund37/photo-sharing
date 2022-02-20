import React from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './NavBar';
import Home from './Home';
import Prompts from './Prompts';
import Pictures from './Pictures';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="prompts" element={<Prompts />} />
        <Route path="pictures" element={<Pictures />} />
      </Routes>
    </>
  )
}

export default App;
