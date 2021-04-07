import './App.css';
import React, {useState} from 'react';
import Button from './Button';

const EASY_JOKES = [
  {
    name:"I think my neighbor is stalking me as she’s been googling my name on her computer. I saw it through my telescope last night."
  }
]

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
