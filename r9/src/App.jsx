import { useState } from 'react';
import './App.scss';
import Create from './Components/Create';
import List from './Components/List';
import Edit from './Components/Edit';

function App() {

  const [lastUpdate, setLastUpdate] = useState(Date.now());

  const [modal, setModal] = useState(null);

  return (
    <div className="app">
          <div className="left">
          <Create setLastUpdate={setLastUpdate} />
          </div>
          <div className="right">
          <List lastUpdate={lastUpdate} setLastUpdate={setLastUpdate} setModal={setModal} />
          </div>
          <Edit setLastUpdate={setLastUpdate} setModal={setModal} modal={modal} />
    </div>
  );
}

export default App;
