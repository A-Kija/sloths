import { useEffect } from 'react';
import './App.scss';
import { useRef, useState } from 'react';

function App() {

    const [count, setCount] = useState(1);

    const needFocus = useRef();

    const mySave = useRef(1);

    // const [mySave2, setMySave2] = useState(1);
    
    
    useEffect(() => {

        mySave.current = count;
        console.log('SAVE:', mySave.current);

    }, [count, mySave])


    // useEffect(() => {

    //     setMySave2(count);
    //     console.log('SAVE2:', mySave2);

    // }, [count, mySave2])


    const click = _ => {
        setCount(c => c + 1);
        // document.querySelector('#need-focus').focus();
        needFocus.current.focus();
        console.log('CLICK:', mySave.current);
    }


    // const save = _ => {
    //     mySave.current = count;
    //     console.log('SAVE:', mySave.current);
    // }



    return (
        <div className="App">
            <header className="App-header">
                <h1>useRef</h1>

                <input id="need-focus" ref={needFocus} type="text" value={count}></input>

                <button className="red" onClick={click}>Click Me!</button>

                {/* <button className="blue" onClick={save}>Save</button> */}

            </header>
        </div>
    );

}

export default App;