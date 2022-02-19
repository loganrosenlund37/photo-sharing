import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Home from './Home';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('/api/new')
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <Home />
      <div>{message}</div>
    </div>
  )
}

export default App;
