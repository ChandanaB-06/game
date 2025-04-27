import { useState } from 'react';
import './App.css'

function App() {
const[target]=useState(Math.floor(Math.random()*10+1));
const [guess,setGuess]=useState('');
const [message,setMessage]=useState('');

const checkGuess =() =>
{
  if(parseInt(guess)===target){
    setMessage('congrats!!!!!! Right Guess');
  }else{
  setMessage(guess>target? 'too high guess':'too low guess' );}
  setGuess('');
}


return(
  <div>
    <h2>GUESS A NUMBER GAME</h2>
    <p>GUESS A NUMBER  (1-10)</p>
    <input type="number" value={guess} onChange={(e)=> setGuess(e.target.value)}/>
    <button onClick={checkGuess}>Check</button>
    <p>{message}</p>
    <p>Target number was : {target}</p>
  </div>
)
}
export default App;
