import { useState } from 'react';
import './App.scss';
import './buttons.scss';
import useCount from './useCount';
import { addCustom, addOne, rem33, remCustom, remOne } from './actions';



function App() {

  const [count, dispachCount] = useCount(7);
  const [addValue, setAddValue] = useState(0);
  const [remValue, setRemValue] = useState(0);


  return (
    <div className="app">
      <div className="left">
        <button className="blue" onClick={_ => dispachCount(addOne())}>+1</button>
        <button className="red" onClick={_ => dispachCount(remOne())}>-1</button>
        <button className="green" onClick={_ => dispachCount(rem33())}>-33</button>
        <div className="with-input">
        <input type="number" value={addValue} onChange={e => setAddValue(e.target.value)}></input>
        <button className="yellow" onClick={_ => dispachCount(addCustom(addValue))}>+++</button>
        </div>
        <div className="with-input">
        <input type="number" value={remValue} onChange={e => setRemValue(e.target.value)}></input>
        <button className="red" onClick={_ => dispachCount(remCustom(remValue))}>---</button>
        </div>
      </div>
      <div className="right">
        <h1 className="count">{count}</h1>
      </div>
    </div>
  );
}

export default App;
