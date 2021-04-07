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
      <Button className="level-1-jokes" name=/>
      <Button className="level-2-jokes"/>
      <Button className="level--jokes"/>
    </>
  );
}

export default App;
