import CreateTree from './Components/Trees/Create';
import List from './Components/Trees/List';

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <CreateTree />
        </div>
        <div className="col-8">
          <List />
        </div>
      </div>
    </div>
  );
}

export default App;
