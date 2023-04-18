import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Create from './Components/Create';

function App() {
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
            <Create />
          </div>
          <div className="col-8">
            LIST
          </div>
        </div>
      </div>
    </>
  );
}
export default App;