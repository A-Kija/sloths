import { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {


  const [animal, setAnimal] = useState('');


  useEffect(() => {

    axios.get('http://localhost:3003/animal/Vilkai')
    .then(res => {
      console.log(res);

      setAnimal(res.data.text);
    })


  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>SRVER</h1>


        <h1>Hello, {animal} !</h1>
        


      </header>
    </div>
  );
}

export default App;