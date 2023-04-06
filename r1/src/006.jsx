import './App.scss';
import Square from './Components/006/Square';

const data = [
    {color: '#87ceeb', letter: 1},
    {color: '#dc143c', letter: 5},
    {color: '#dc143c', letter: 7},
    {color: '#87aaeb', letter: 22},
    {color: '#6495ed', letter: 3},
    {color: '#87aaeb', letter: 1}
   
];

function App() {

  const print = color => {
    console.log('%c' + color, `background:${color}; padding:5px;`);
  }

  return (
    <div className="App">
      <header className="App-header">
      
        <div className="squares">
            {
                data.map((d, index) => <Square key={index} niceColor={d.color} letter={d.letter} />)
            }
        </div>
        <div className="squares">
            {
                data.map((d, index) => d.letter > 5 
                ? null 
                : <Square key={index} niceColor={d.color} letter={d.letter} />)
            }
        </div>
        <div className="squares">
            {
                [...data].sort((a, b) => b.letter - a.letter).map((d, index) => <Square key={index} niceColor={d.color} letter={d.letter} />)
            }
        </div>
        <div className="squares">
          <button onClick={_ => print('gray')}>Gray</button>
          <button className="red" onClick={_ => print('crimson')}>Red</button>
          <button className="blue" onClick={_ => print('skyblue')}>Blue</button>
          <button className="pink" onClick={_ => print('pink')}>Pink</button>
          <button className="yellow" onClick={_ => print('darkorange')}>Yellow</button>
          <button className="green" onClick={_ => print('greenyellow')}>Green</button>

        </div>

      </header>
    </div>
  );

}

export default App;