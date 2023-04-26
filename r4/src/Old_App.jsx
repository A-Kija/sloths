import { useState } from 'react';
import './App.scss';
import './buttons.scss';
import A from './Components/017/A';
import { AbcdContext } from './Components/017/AbcdContext';
import E from './Components/017/E';

function App() {

  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useState(99);

  return (
    <div className="App">
      <header className="App-header">
          <h1>ConTeXT</h1>

          <E color="red">
            <button className="red" onClick={_ => setCount1(c => c + 1)}>+1</button>
            <button className="blue" onClick={_ => setCount1(c => c + 1)}>+1</button>
            <button className="yellow" onClick={_ => setCount1(c => c + 1)}>+1</button>
          </E>
          

          <AbcdContext.Provider value={{
            count1,
            count2: count2,
            setCount2
          }}>

            {/* <A /> */}

          </AbcdContext.Provider>


      </header>
    </div>
  );
}

export default App;
