import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import { useState } from 'react';
import { useEffect } from 'react';
import { crudCreate, crudRead, crudUpdate } from './Utils/localStorage';
import List from './Components/List';
import Edit from './Components/Edit';

const key = 'ClientsDb';

function App() {

  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const [data, setData] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [editModalData, setEditModalData] = useState(null);
  const [editData, setEditData] = useState(null);


  useEffect(() => {
    setData(crudRead(key));
  }, [lastUpdateTime]);


  useEffect(() => {
    if (null === createData) {
      return;
    }
    crudCreate(key, createData);
    setLastUpdateTime(Date.now());
  }, [createData]);


  useEffect(() => {
    if (null === editData) {
      return;
    }
    crudUpdate(key, editData, editData.id);
    setLastUpdateTime(Date.now());
  }, [editData]);

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
            <List data={data} setEditModalData={setEditModalData}/>
          </div>
        </div>
      </div>
      <Edit editModalData={editModalData} setEditModalData={setEditModalData} setEditData={setEditData} />
    </>
  );
}
export default App;