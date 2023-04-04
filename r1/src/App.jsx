import './App.css';
import './Components/005/animal.scss';
import Fox from './Components/005/Fox';
import Racoon from './Components/005/Racoon';

function App() {

  return (
    <div className="App">
      <header className="App-header">

        <h1>START</h1>

        <Racoon />
        <Fox />


      </header>
    </div>
  );

}

export default App;
