import CreateButton from './Components/CreateButton';
import CreateModal from './Components/CreateModal';
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
      </div>
    </Data>
  );
}

export default App;
