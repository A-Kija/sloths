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
import axios from 'axios';

const key = 'ClientsDb';

const url = 'http://localhost:3003/clients';

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
  const [stat, setStat] = useState(null);


  useEffect(() => {
    axios.get(url)
    .then(res => {
      setData(res.data.clients.map((c, i) => ({ ...c, row: i, show: true })));
    });
  }, [lastUpdateTime]);




  useEffect(() => {
    if (null === createData) {
      return;
    }
    axios.post(url, {client: createData})
    .then(res => {
      msg(...res.data.message);
      setLastUpdateTime(Date.now());
    });
  }, [createData]);


  useEffect(() => {
    if (null === editData) {
      return;
    }
    axios.put(url + '/' + editData.id, {client: editData})
    .then(res => {
      msg(...res.data.message);
      setLastUpdateTime(Date.now());
    });
  }, [editData]);


  useEffect(() => {
    if (null === deleteData) {
      return;
    }
    axios.delete(url + '/' + deleteData.id)
    .then(res => {
      msg(...res.data.message);
      setLastUpdateTime(Date.now());
    });
  }, [deleteData]);

  useEffect(() => {
    if (null === data) {
      return;
    }
    setStat(
      data.reduce((clients, client) => ({
        count: clients.count + 1,
        age: clients.age + client.age,
        fb: client.social === 'fb' ? clients.fb + 1 : clients.fb,
        is: client.social === 'is' ? clients.is + 1 : clients.is,
        tt: client.social === 'tt' ? clients.tt + 1 : clients.tt,
      }), { count: 0, age: 0, fb: 0, is: 0, tt: 0 }
      )
    );
  }, [data]);

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
        setData(d => d.map(c => c.social === 'fb' ? { ...c, show: true } : { ...c, show: false }));
        break;
      case 'fb':
        setFilterSocialValue('is');
        setData(d => d.map(c => c.social === 'is' ? { ...c, show: true } : { ...c, show: false }));
        break;
      case 'is':
        setFilterSocialValue('tt');
        setData(d => d.map(c => c.social === 'tt' ? { ...c, show: true } : { ...c, show: false }));
        break;
      default:
        setFilterSocialValue('');
        setData(d => d.map(c => ({ ...c, show: true })));
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
            <List stat={stat} socialFilter={socialFilter} filterSocialValue={filterSocialValue} sortAgeDir={sortAgeDir} data={data} setEditModalData={setEditModalData} setDeleteModalData={setDeleteModalData} ageSort={ageSort} />
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