import { useState } from 'react';
import './App.scss';
import Square from './Components/008/Square';
import Create from './Components/008/Create';
import Stat from './Components/008/Stat';
const seaPlaners = [
    { id: 1, type: 'man', name: 'Lina', color: 'skyblue' },
    { id: 2, type: 'car', name: 'Opel', color: 'crimson' },
    { id: 3, type: 'animal', name: 'Vilkas', color: 'pink' },
    { id: 4, type: 'fish', name: 'Ungurys', color: 'orange' },
    { id: 5, type: 'man', name: 'Tomas', color: 'pink' },
    { id: 6, type: 'animal', name: 'Bebras', color: 'crimson' },
    { id: 7, type: 'animal', name: 'Barsukas', color: 'pink' },
    { id: 8, type: 'car', name: 'MB', color: 'skyblue' },
    { id: 9, type: 'car', name: 'ZIL', color: 'crimson' },
    { id: 10, type: 'man', name: 'Teta Toma', color: 'orange' },
];

function App() {

    const [sq, setSquare] = useState(seaPlaners);


    return (
        <div className="App">
            <header className="App-header">
                <h1>CRUD</h1>
                <span>Create Read Update Delete</span>
                <div className="squares">
                    {
                        sq.map(s => <Square key={s.id} data={s} setSquare={setSquare} />)
                    }
                </div>
                    <Create sq={sq} setSquare={setSquare} />
                    <Stat sq={sq} />
            </header>
        </div>
    );

}

export default App;