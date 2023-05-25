import { useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import List from './Components/List';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now())

  return (
    <div className="app">
          <div className="left">
          <Create setLastUpdate={setLastUpdate} />
          </div>
          <div className="right">
          <List lastUpdate={lastUpdate} setLastUpdate={setLastUpdate}/>
          </div>
    </div>
  );
}

export default App;
