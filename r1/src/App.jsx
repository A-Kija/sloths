import { useState } from 'react';
import './App.scss';
import Square from './Components/008/Square';
const seaPlaners = [
    { id: 1, type: 'man', name: 'Lina', color: 'blue' },
    { id: 2, type: 'car', name: 'Opel', color: 'red' },
    { id: 3, type: 'animal', name: 'Vilkas', color: 'green' },
    { id: 4, type: 'fish', name: 'Ungurys', color: 'yellow' },
    { id: 5, type: 'man', name: 'Tomas', color: 'green' },
    { id: 6, type: 'animal', name: 'Bebras', color: 'red' },
    { id: 7, type: 'animal', name: 'Barsukas', color: 'green' },
    { id: 8, type: 'car', name: 'MB', color: 'blue' },
    { id: 9, type: 'car', name: 'ZIL', color: 'red' },
    { id: 10, type: 'man', name: 'Teta Toma', color: 'yellow' },
];

function App() {

    const [sq, setSquare] = useState(seaPlaners);


    return (
        <div className="App">
            <header className="App-header">
                <div className="squares">
                    {
                        sq.map(s => <Square key={s.id} data={s} />)
                    }
                </div>


            </header>
        </div>
    );

}

export default App;