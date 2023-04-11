import { useState } from 'react';
import './App.scss';
import Square from './Components/Bond/Square';
import rand from './Functions/rand';
import randColor from './Functions/randColor';


function App() {

    // const [count, setCount] = useState(7);
    // const [letter, setLetter] = useState('NOP')

    // const set0 = _ => {
    //     setCount(0); // NAUJAS PAPRASTAI
    // }

    // const plus1 = _ => {
    //     // setCount(count + 1); // IVYKSTA NE IS KARTO!!!!!
    //     // setCount(count + 1);
    //     // setCount(count + 1);

    //     setCount(c => c + 1); // REDAGAVIMAS TIK PER CALLBACK
    //     setCount(c => c + 1); 
    //     setCount(c => c + 1); 

    // }

    const [sq, setSq] = useState([]);

    const addSq = _ => {
        setSq(s => [...s, {
            color: randColor(),
            spin: rand(0, 1) ? 'spin' : 'spin-back',
            number: ('' + rand(1, 9999)).padStart(4, '0'),
            row: s.length,
            show: true
        }
        ]);
        
    }

    const sort = _ => {
        const direction =
            (sq[0]?.number || 0) - (sq[sq.length - 1]?.number || 0) > 0
                ? 1 : -1;
        setSq(s => [...s].sort((a, b) => direction * (a.number - b.number)));
    }

    const sortDefault = _ => {
        setSq(s => [...s].sort((a, b) => a.row - b.row));
    }

    const l1000 = _ => {
        if (-1 === sq.findIndex(s => s.show === false)) {
            setSq(s => s.map(s => s.number < 1000 ? {...s, show: true} : {...s, show: false}));
        } else {
            setSq(s => s.map(s => ({...s, show: true})));
        }
        
    }

    const spin = dir => {
        switch(dir) {
            case 'r':
                setSq(s => s.map(s => s.spin === 'spin' ? {...s, show: true} : {...s, show: false}));
                break;
            case 'l':
                setSq(s => s.map(s => s.spin === 'spin-back' ? {...s, show: true} : {...s, show: false}));
                break;
            default:
                setSq(s => s.map(s => ({...s, show: true})));  
        }
    }


    return (
        <div className="App">
            <header className="App-header">
                {/* <div className="squares">

            <Square number={count}/>
            <Square number={letter}/>

        </div>
        <div className="squares">
        <button className="yellow" onClick={set0}>0</button>
        <button className="pink" onClick={_=> setLetter(l => l === 'PINK' ? 'NOP' : "PINK" )}>pink</button>
        <button className="red" onClick={plus1}>+1</button>
        </div> */}


                <div className="squares">
                    {
                        sq.map((s, i) => s.show ? <Square key={i} data={s} /> : null)
                    }
                </div>

                {console.log(sq)}

                <div className="squares">
                    <button className="green" onClick={addSq}>add []</button>
                    <button className="red" onClick={_ => setSq([])}>destroy all</button>
                    <button className="blue" onClick={sort}>sort</button>
                    <button className="blue" onClick={sortDefault}>Deafault Sort</button>
                    <button className="yellow" onClick={l1000}>LESS 1000</button>
                    <button className="pink" onClick={_ => spin('l')}>LEFT SPIN</button>
                    <button className="pink" onClick={_ => spin('r')}>RIGHT SPIN</button>
                    <button className="pink" onClick={_ => spin('b')}>BOTH SPIN</button>
                </div>



            </header>
        </div>
    );

}

export default App;