import { useState } from 'react';
import rand from '../../Functions/rand';

export default function ReactState2() {


    const [shape, setShape] = useState(null);
    const [count, setCount] = useState(rand(5, 25));

    const doShape = _ => {
        setShape(s => s ? null : '50%');
    }

    const doRand = _ => {
        setCount(rand(5, 25));
    }


    return (
        <>

            <div className="squares">
                <div className="square" style={{
                    borderRadius: shape
                }}>
                    {count}
                </div>
            </div>

            <div className="squares">
                <button className="blue" onClick={doShape}>change</button>
                <button className="yellow" onClick={doRand}>random</button>
            </div>

        </>
    )


}