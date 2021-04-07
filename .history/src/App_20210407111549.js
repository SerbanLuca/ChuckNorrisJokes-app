import './App.css';
import React from 'react';
import Button from './Button';

const LEVEL_JOKES = [
  {
    name: "no so good jokes"
  },
  {
    name: "medium jokes"
  },
  
]

function App() {
  return (
    <>
      <Button className="level-1-jokes"/>
      <Button className="level-2-jokes"/>
      <Button className="level--jokes"/>
    </>
  );
}

export default App;
