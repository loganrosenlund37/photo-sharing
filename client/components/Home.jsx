import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const Home = () => {
  const [count, setCount] = useState(0);

  const handleClick = (e) => {
    setCount((current) => current + 1);
  };

  return (
    <>
      <div>Home Page</div>
      <div>The count is: {count}</div>
      <Button type="button" onClick={handleClick}>Increment Count</Button>
    </>
  );
};

export default Home;
