import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Home from './Home';

function App() {
  const [message, setMessage] = useState('');
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('/api/new')
      .then((response) => setMessage(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (e) => {
    setCount((current) => current + 1);
  }

  return (
    <div>
      <Home />
      <div>{message + ' is the message.'}</div>
      <div>The count is: {count}</div>
      <button type="button" onClick={handleClick} >Click Me</button>
    </div>
  )
}

export default App;
