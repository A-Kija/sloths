import { useEffect, useState } from 'react';
import './App.scss';
import randColor from './Functions/randColor';
import Square from './Components/009/Square';
import { v4 as uuidv4 } from 'uuid';


function App() {


    const [sq, setSq] = useState(null);

    const [racoon, setRacoon] = useState({})

    const addSquare = _ => {
        setSq(s => [...s, {c:randColor(), id: uuidv4()}])
    }

    useEffect(() => {
        if (null !== localStorage.getItem('sq')) {
            setSq(JSON.parse(localStorage.getItem('sq')))
        } else {
            setSq([]);
        }

    }, []);


    useEffect(() => {
        if (null === sq) {
            return;
        }
        localStorage.setItem('sq', JSON.stringify(sq));
    }, [sq]);


    const write = _ => {
        localStorage.setItem('r', JSON.stringify({t:'Racoon trash bandit'}));
    }

    const read = _ => {
        setRacoon(JSON.parse(localStorage.getItem('r')));
    }

    const clear = _ => {
        localStorage.removeItem('r');
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>life cycle: LIFE & DEAD</h1>
                <div className="squares">
                    {
                        sq?.map(s => <Square key={s.id} square={s} setSq={setSq} />)
                    }
                </div>
                <button className="green" onClick={addSquare}>[+]</button>
                <h1>Local Storage: {racoon.t}</h1>
                <button className="blue" onClick={write}>Racoon write</button>
                <button className="pink" onClick={read}>Racoon read</button>
                <button className="red" onClick={clear}>Racoon clear</button>
            </header>
        </div>
    );

}

export default App;