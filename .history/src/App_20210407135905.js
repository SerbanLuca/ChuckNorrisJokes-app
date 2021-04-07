import './App.css';
import React, {useState, useEffect} from 'react';

const API_KEY = `https://api.chucknorris.io/jokes/random`;

function App() {

  const [joke, setJoke] = useState('');

  const getJoke = () =>
  {
      fetch(API_KEY)
        .then(res => res.json())
          .then(data => setJoke(data.value.joke));
  }

  useEffect(() => {
      getJoke();
  },[])


  return (
    <>
      <div className="container">
        <h1>Luca's Jokes</h1>
        <p>{joke}</p>
        <button className="button" onClick={getJoke}>GET JOKE</button>
      </div>
    </>
  );
}

export default App;
