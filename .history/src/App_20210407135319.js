import './App.css';
import React, {useState, useEffect} from 'react';

const API_KEY = `https://api.chucknorris.io/jokes/random`;

function App() {

  const [joke, setJoke] = useState('');

  useEffect(() => {
    
  },[])

  return (
    <>
      <div className="container">
        <h1>Luca's Jokes</h1>
        <p>JOKE</p>
        <button className="button">GET JOKE</button>
      </div>
    </>
  );
}

export default App;
