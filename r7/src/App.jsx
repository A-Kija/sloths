import CreateTree from './Components/Trees/Create';
import CreateType from './Components/Types/Create';
import TreeList from './Components/Trees/List';
import TypesList from './Components/Types/List';
import Tab from './Components/Tab';
import { useContext } from 'react';
import { Data } from './Data';

function App() {

  const { tab } = useContext(Data);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <CreateTree />
          <CreateType />
        </div>
        <div className="col-8">
          <Tab title="Tree List" show={tab === 'trees'}><TreeList /></Tab>
          <Tab title="Types List" show={tab === 'types'}><TypesList /></Tab>
        </div>
      </div>
    </div>
  );
}

export default App;
