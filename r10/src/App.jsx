import { useReducer, useState } from 'react';
import './App.scss';
import './buttons.scss';
import countReducer from './countReducer';


function App() {

  const [count, dispachCount] = useReducer(countReducer, 7);
  const [addValue, setAddValue] = useState(0);

  const add1 = _ => {
    dispachCount({
      type: 'add_one'
    });
  }

  const rem1 = _ => {
    dispachCount({
      type: 'remove_1'
    });
  }

  const addCustom = _ => {
    dispachCount({
      type: 'add_some',
      payload: addValue
    });
  }


  return (
    <div className="app">
      <div className="left">
        <button className="blue" onClick={add1}>+1</button>
        <button className="red" onClick={rem1}>-1</button>
        <button className="green" onClick={_ => dispachCount({type: 'r_33'})}>-33</button>
        <div className="with-input">
        <input type="number" value={addValue} onChange={e => setAddValue(e.target.value)}></input>
        <button className="yellow" onClick={addCustom}>+++</button>
        </div>
      </div>
      <div className="right">
        <h1 className="count">{count}</h1>
      </div>
    </div>
  );
}

export default App;
