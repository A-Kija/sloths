import CreateButton from './Components/CreateButton';
import CreateModal from './Components/CreateModal';
import DeleteModal from './Components/DeleteModal';
import List from './Components/List';
import { Data } from './Store';
import './app.scss';

function App() {
  return (
    <Data>
      <div className="app">

        <List />
        <CreateButton />
        <CreateModal />
        <DeleteModal />
      </div>
    </Data>
  );
}

export default App;
