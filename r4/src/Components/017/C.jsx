import { useContext } from 'react';
import D from './D';
import { AbcdContext } from './AbcdContext';

export default function C() {

    const { setCount2 } = useContext(AbcdContext);

    return (
        <div className="nice-border">
            <div className="name">C</div>
            <D />
            <button className="yellow" onClick={_ => setCount2(c => c - 1)}>-1</button>
        </div>

    );

}