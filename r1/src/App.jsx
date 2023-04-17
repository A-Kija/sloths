import { useState } from 'react';
import './App.scss';
import ContentEditable from 'react-contenteditable';

const list = [
    { id: 5460, name: 'Beaver' },
    { id: 5456, name: 'Fox' },
    { id: 8746, name: 'Rabbit' },
    { id: 5879, name: 'Wolf' }
];

function App() {

    const [text, setText] = useState({
        t1: 'Labas',
        t2: 'Ate'
    });

    const [checkbox, setCheckbox] = useState({
        A: true,
        B: false,
        C: true,
        D: false
    });

    const [radio, setRadio] = useState('C');

    const [select, setSelect] = useState(5456);



    const handleChange1 = (e, t) => {
        setText(texts => ({ ...texts, [t]: e.target.value }))
    }

    const handleChange2 = cb => {
        setCheckbox(checkboxes => ({ ...checkboxes, [cb]: !checkboxes[cb] }));
    }

    const handleChange3 = r => {
        setRadio(r);
    }

    const handleChange4 = id => {
        setSelect(parseInt(id));
    }


    return (
        <div className="App">
            <header className="App-header">
                <h1>Forms</h1>
                <fieldset>
                    <legend>Few texts one state</legend>
                    <div>
                        <ContentEditable tagName="i" onChange={e => handleChange1(e, 't1')} html={text.t1} />
                    </div>
                    <div>
                        <ContentEditable tagName="u" onChange={e => handleChange1(e, 't2')} html={text.t2} />
                    </div>
                </fieldset>

                <fieldset>
                    <legend>4 checkboxes one state</legend>
                    <div className="field">
                        <span className={'checkbox' + (checkbox.A ? ' active' : '')} onClick={_ => handleChange2('A')}>A</span>
                        <span className={'checkbox' + (checkbox.B ? ' active' : '')} onClick={_ => handleChange2('B')}>B</span>
                        <span className={'checkbox' + (checkbox.C ? ' active' : '')} onClick={_ => handleChange2('C')}>C</span>
                        <span className={'checkbox' + (checkbox.D ? ' active' : '')} onClick={_ => handleChange2('D')}>D</span>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>4 checkboxes one state</legend>
                    <div className="field">
                        <span className={'checkbox' + (radio === 'A' ? ' active' : '')} onClick={_ => handleChange3('A')}>A</span>
                        <span className={'checkbox' + (radio === 'B' ? ' active' : '')} onClick={_ => handleChange3('B')}>B</span>
                        <span className={'checkbox' + (radio === 'C' ? ' active' : '')} onClick={_ => handleChange3('C')}>C</span>
                        <span className={'checkbox' + (radio === 'D' ? ' active' : '')} onClick={_ => handleChange3('D')}>D</span>
                    </div>
                </fieldset>

                <fieldset>
                    <legend>Select on one state</legend>

                    <div className="select">
                        <div className="selected">{list.find(l => select === l.id).name}</div>
                        {
                            list.map(o => <div key={o.id} style={{color: select === o.id ? 'crimson' : null}} onClick={_ => handleChange4(o.id)}>{o.name}</div>)
                        }

                    </div>


                </fieldset>




            </header>

        </div>
    );

}

export default App;