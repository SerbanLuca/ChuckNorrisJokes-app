import './App.css';
import React, {useState} from 'react';
import Button from './Button';

const LEVEL_JOKES = [
  {
    name: "no so good jokes"
  },
  {
    name: "medium jokes"
  },
  {
    name: "best jokes ever"
  }
]

function App() {

  const [levels, setLevels] = useState(LEVEL_JOKES);

  return (
    <>
      <button clasName="easy">Not so good jokes</button>
      <button clasName="medium">Not so good jokes</button>
      <button clasName="hard">Not so good jokes</button>

    </>
  );
}

export default App;
