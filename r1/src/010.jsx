import { useState } from 'react';
import './App.scss';


const list = [
    { id: 5460, name: 'Beaver' },
    { id: 5456, name: 'Fox' },
    { id: 8746, name: 'Rabbit' },
    { id: 5879, name: 'Wolf' }
];


function App() {

    const [text1, setText1] = useState('');
    const [text2, setText2] = useState({ A: '', B: '' });
    const [input1, setInput1] = useState({ range: 0, color: '#00ff00' });
    const [select, setSelect] = useState(5456);
    const [checkbox, setCheckbox] = useState({
        A: false,
        B: true,
        C: true,
        D: false
    });

    const [radio, setRadio] = useState('B');

    const handleChange1 = e => {
        setText1(e.target.value);
    }

    const handleChange2 = (e, input) => {
        setText2(t => ({ ...t, [input]: e.target.value }));
    }

    const handleChange3 = (e, input) => {
        setInput1(t => ({ ...t, [input]: e.target.value }));

    }

    const handleChange4 = cb => {

        setCheckbox(c => ({...c, [cb]: !c[cb]}));

    }


    const handleChange5 = r => {

        setRadio(r);

    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Forms</h1>
                <fieldset>
                    <legend>One text one state</legend>
                    <input type="text" value={text1} onChange={handleChange1} />
                </fieldset>

                <fieldset>
                    <legend>Two texts one state</legend>
                    <input type="text" value={text2.A} onChange={e => handleChange2(e, 'A')} />
                    <input type="text" value={text2.B} onChange={e => handleChange2(e, 'B')} />
                </fieldset>

                <fieldset>
                    <legend>One range one Color and one state</legend>
                    <input type="range" value={input1.range} onChange={e => handleChange3(e, 'range')} />
                    <input type="color" value={input1.color} onChange={e => handleChange3(e, 'color')} />
                </fieldset>

                <fieldset>
                    {/* eslint-disable-next-line */}
                    <legend>Selected: {list.find(l => select == l.id).name}</legend>

                    {/* Religija 3X= */}
                    {/* <legend>Selected: {list.find(l => parseInt(select) === l.id).name}</legend> */}
                    <select value={select} onChange={e => setSelect(e.target.value)}>
                        {
                            list.map(o => <option key={o.id} value={o.id}>{o.name}</option>)
                        }
                    </select>
                </fieldset>

                <fieldset>
                    <legend>4 Checkbox One state</legend>
                    <div>
                        <input id="_A" type="checkbox" onChange={_ => handleChange4('A')} checked={checkbox.A} />
                        <label htmlFor="_A" >A</label>
                    </div>
                    <div>
                        <input id="_B" type="checkbox" onChange={_ => handleChange4('B')} checked={checkbox.B} />
                        <label htmlFor="_B">B</label>
                    </div>
                    <div>
                        <input id="_C" type="checkbox" onChange={_ => handleChange4('C')} checked={checkbox.C} />
                        <label htmlFor="_C">C</label>
                    </div>
                    <div>
                        <input id="_D" type="checkbox" onChange={_ => handleChange4('D')}  checked={checkbox.D} />
                        <label htmlFor="_D">D</label>
                    </div>
                </fieldset>


                <fieldset>
                    <legend>4 Radio One state</legend>
                    <div>
                        <input id="_Ar" type="checkbox" onChange={_ => handleChange5('A')} checked={radio === 'A'} />
                        <label htmlFor="_Ar" >A</label>
                    </div>
                    <div>
                        <input id="_Br" type="checkbox" onChange={_ => handleChange5('B')} checked={radio === 'B'} />
                        <label htmlFor="_Br">B</label>
                    </div>
                    <div>
                        <input id="_Cr" type="checkbox" onChange={_ => handleChange5('C')} checked={radio === 'C'} />
                        <label htmlFor="_Cr">C</label>
                    </div>
                    <div>
                        <input id="_Dr" type="checkbox" onChange={_ => handleChange5('D')}  checked={radio === 'D'} />
                        <label htmlFor="_Dr">D</label>
                    </div>
                </fieldset>


            </header>
            {console.clear() || console.log(checkbox)}
        </div>
    );

}

export default App;