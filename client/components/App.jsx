import React, { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavBar from './NavBar';
import Home from './Home';
import Prompts from './Prompts';
import Pictures from './Pictures';
import LoginPage from './LoginPage';
import AuthContext from './auth-context';


function App() {
  const [authStatus, setAuthStatus] = useState(localStorage.getItem('logged-in')); 
  const login = () => {
    setAuthStatus(true);
    localStorage.setItem('logged-in', true);
  };
  const logout = () => {
    setAuthStatus(false);
    localStorage.removeItem('logged-in');
  };

  return (
    <>
      <AuthContext.Provider value={{ status: authStatus, login: login, logout: logout }}>
        {
          authStatus 
          ? <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="prompts" element={<Prompts />} />
              <Route path="pictures" element={<Pictures />} />
            </Routes>
          </>
          : <LoginPage />
        }
      </AuthContext.Provider>
    </>
  )
}

export default App;
