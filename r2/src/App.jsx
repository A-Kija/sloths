import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import { useState } from 'react';
import { useEffect } from 'react';
import { crudCreate, crudRead } from './Utils/localStorage';
import List from './Components/List';

const key = 'ClientsDb';

function App() {

  const [data, setData] = useState(null);
  const [createData, setCreateData] = useState(null);


  useEffect(() => {
    setData(crudRead(key));
  }, []);

  useEffect(() => {
    if (null === createData) {
      return;
    }
    crudCreate(key, createData);

  }, [createData]);

  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Clients Database</span>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Create setCreateData={setCreateData} />
          </div>
          <div className="col-8">
            <List data={data}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default App;