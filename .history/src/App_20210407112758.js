import './App.css';
import React, {useState} from 'react';
import Button from './Button';

const 

function App() {

  const [levels, setLevels] = useState(LEVEL_JOKES);

  return (
    <>
      <div className="container-btn">
          <button clasName="easy">Not so good jokes</button>
          <button clasName="medium">Medium jokes</button>
          <button clasName="hard">Best jokes</button>
      </div>
    </>
  );
}

export default App;
