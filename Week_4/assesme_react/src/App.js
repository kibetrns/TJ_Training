import logo from './logo.svg';
import './App.css';
import Input from './components/Input.jsx';
import ListInput from './components/ListInputs';
import { useState } from 'react';

function App() {
let [input, setInput] = useState("")


function handleInput(e) {
  setInput( input = e)
  console.log(e);
}


  return (
    <div className="App">
      <h3>....</h3>
      <Input className="Input" onChange={e => handleInput(e.target.value)}></Input>

        <ListInput className="ListInputs">input = {input}</ListInput>
    
    </div>
  );
}

export default App;
