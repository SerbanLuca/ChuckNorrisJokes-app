import './App.css';
import React, {useState, useEffect} from 'react';
import Joke from './Joke';

const data = [
  {
    name:'I think my neighbor is stalking me as she’s been googling my name on her computer. I saw it through my telescope last night.',
    index: 0,
    points: 10
  },
  {
    name:'For Sale: Parachute. Used once, never opened, small stain.',
    index: 1,
    points: 10
  },
  {
    name:'NASA stands for Need Another Seven Astronauts',
    index: 2,
    points: 10
  },
  {
    name:'Whats the difference between my mum and my dad? My mum stayed',
    index: 3,
    points: 10
  }
]

function App() {

  //const [selectedJokeIndex, setSelectedJokeIndex] = useState(0);
  const [easyLevels, setEasyLevels] = useState('');

  function generateJoke()
  {
    setEasyLevels(data.name)
  }
  
  useEffect(() => {
    generateJoke();
  },[])

  return (
    <>
      <div className="container-btn">
          {easyLevels.map((easyLevel, index)=> {
            <Joke key={index}/>
          })}

      </div>
    </>
  );
}

export default App;