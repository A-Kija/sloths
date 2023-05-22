import CreateTree from './Components/Trees/Create';
import CreateType from './Components/Types/Create';
import CreatePark from './Components/Parks/Create';
import TreeList from './Components/Trees/List';
import TypesList from './Components/Types/List';
import ParksList from './Components/Parks/List';
import Tab from './Components/Tab';
import { useContext } from 'react';
import { Data } from './Data';
import Messages from './Components/Messages';

function App() {

  const { tab } = useContext(Data);

  return (
    <>
    <div className="container">
      <div className="row">
        <div className="col-4">
          <CreatePark />
          <CreateType />
          <CreateTree />
        </div>
        <div className="col-8">
          <Tab title="Tree List" show={tab === 'trees'}><TreeList /></Tab>
          <Tab title="Types List" show={tab === 'types'}><TypesList /></Tab>
          <Tab title="Parks List" show={tab === 'parks'}><ParksList /></Tab>
        </div>
      </div>
    </div>
    <Messages />
    </>
  );
}

export default App;
