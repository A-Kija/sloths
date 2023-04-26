import { useContext } from 'react';
import { AbcdContext } from './AbcdContext';
import { BContext } from './B';

export default function D() {

    const { count1, count2 } = useContext(AbcdContext);
    const { countB } = useContext(BContext);

    return (
        <div className="nice-border">
            <div className="name">D</div>
            <h2>{count1}</h2>
            <h2>{count2}</h2>
            <h2>{countB}</h2>
        </div>
        
    )

}