import React, { useContext } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import AuthContext from './auth-context';

const NavBar = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Nav className="ms-2 me-auto">
          <Nav.Link href="/#/">Home</Nav.Link>
          <Nav.Link href="#/prompts">Prompts</Nav.Link>
          <Nav.Link href="#/pictures">Pictures</Nav.Link>
        </Nav>
        <Nav className='me-2'>
          <Nav.Link href="/#/" className="ms-auto" onClick={auth.logout}>Logout</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default NavBar;
