import './App.css';
import React from 'react';
import Button from './Button';

function App() {
  return (
    <>
      <Button className="level-1-jokes">Easy</Button>
      <Button className="level-2-jokes"/>
      <Button className="level--jokes"/>
    </>
  );
}

export default App;
