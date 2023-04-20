import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Create from './Components/Create';
import { useState } from 'react';
import { useEffect } from 'react';
import { crudCreate, crudDelete, crudRead, crudUpdate } from './Utils/localStorage';
import List from './Components/List';
import Edit from './Components/Edit';
import Delete from './Components/Delete';
import Messages from './Components/Messages';
import { v4 as uuidv4 } from 'uuid';

const key = 'ClientsDb';

function App() {

  const [lastUpdateTime, setLastUpdateTime] = useState(Date.now());
  const [data, setData] = useState(null);
  const [createData, setCreateData] = useState(null);
  const [editModalData, setEditModalData] = useState(null);
  const [editData, setEditData] = useState(null);
  const [deleteModalData, setDeleteModalData] = useState(null);
  const [deleteData, setDeleteData] = useState(null);
  const [messages, setMessages] = useState([]);

  const [sortAgeDir, setSortAgeDir] = useState('');
  const [filterSocialValue, setFilterSocialValue] = useState('');


  useEffect(() => {
    setData(crudRead(key).map((c, i) => ({ ...c, row: i, show: true })));

  }, [lastUpdateTime]);


  useEffect(() => {
    if (null === createData) {
      return;
    }
    crudCreate(key, createData);
    setLastUpdateTime(Date.now());
    msg('New client was created', 'ok');
  }, [createData]);


  useEffect(() => {
    if (null === editData) {
      return;
    }
    crudUpdate(key, editData, editData.id);
    setLastUpdateTime(Date.now());
    msg('Client was updated', 'ok');
  }, [editData]);


  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    crudDelete(key, deleteData.id);
    setLastUpdateTime(Date.now());
    msg('Client was removed', 'info');
  }, [deleteData]);

  const msg = (text, type) => {
    const id = uuidv4();
    setMessages(m => [...m, { text, type, id }])
    setTimeout(() => {
      setMessages(m => m.filter(m => m.id !== id));
    }, 5000);
  }

  const ageSort = _ => {
    switch (sortAgeDir) {
      case '':
        setSortAgeDir('up');
        setData(d => [...d].sort((a, b) => a.age - b.age));
        break;
      case 'up':
        setSortAgeDir('down');
        setData(d => [...d].sort((a, b) => b.age - a.age));
        break;
      default:
        setSortAgeDir('');
        setData(d => [...d].sort((a, b) => a.row - b.row));
    }
  }

  const socialFilter = _ => {
    switch (filterSocialValue) {
      case '':
        setFilterSocialValue('fb');
        setData(d => d.map(c => c.social === 'fb' ? {...c, show: true} : {...c, show: false}));
        break;
      case 'fb':
        setFilterSocialValue('is');
        setData(d => d.map(c => c.social === 'is' ? {...c, show: true} : {...c, show: false}));
        break;
      case 'is':
        setFilterSocialValue('tt');
        setData(d => d.map(c => c.social === 'tt' ? {...c, show: true} : {...c, show: false}));
        break;
      default:
        setFilterSocialValue('');
        setData(d => d.map(c => ({...c, show: true})));
    }
  }

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
            <List socialFilter={socialFilter} filterSocialValue={filterSocialValue} sortAgeDir={sortAgeDir} data={data} setEditModalData={setEditModalData} setDeleteModalData={setDeleteModalData} ageSort={ageSort} />
          </div>
        </div>
      </div>
      <Edit editModalData={editModalData} setEditModalData={setEditModalData} setEditData={setEditData} />
      <Delete deleteModalData={deleteModalData} setDeleteModalData={setDeleteModalData} setDeleteData={setDeleteData} />
      <Messages messages={messages} />
    </>
  );
}
export default App;