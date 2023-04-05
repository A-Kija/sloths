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

      </header>
    </div>
  );

}

export default App;