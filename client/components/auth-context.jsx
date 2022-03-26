import React, { createContext } from 'react';

const authContext = createContext({
  status: null,
  login: () => {},
  logout: () => {},
});

export default authContext;
