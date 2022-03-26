import React, { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './NavBar';
import Home from './Home';
import Prompts from './Prompts';
import Pictures from './Pictures';
import LoginPage from './LoginPage';
import AuthContext from './auth-context';
import HelpPage from './HelpPage';


function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('logged-in')); 
  const login = () => {
    setLoggedIn(true);
    localStorage.setItem('logged-in', true);
  };
  const logout = () => {
    setLoggedIn(false);
    localStorage.removeItem('logged-in');
  };

  return (
    <>
      <AuthContext.Provider value={{ status: loggedIn, login: login, logout: logout }}>
        {
          loggedIn 
          ? <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="prompts" element={<Prompts />} />
              <Route path="pictures" element={<Pictures />} />
            </Routes>
          </>
          : <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="help" element={<HelpPage />} />
          </Routes>
        }
      </AuthContext.Provider>
    </>
  )
}

export default App;
