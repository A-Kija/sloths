import { useEffect, useState } from 'react';
import randColor from '../../Functions/randColor';

export default function Square({square, setSq}) {

    const rc = _ => {
        setSq(s => s.map(s => s.id === square.id ? {...s, c: randColor()} : {...s}))
    }

    const gs = _ => {
        setSq(s => s.filter(s => s.id !== square.id))
    }

    const [live, setLive] = useState(false);

    useEffect(() => {

        if (live) {
            console.log('%c[is CHANGING]', 'background-color:'+ square.c);
        } else {
            console.log('%c[is ALIVE]', 'background-color:'+ square.c);
        }
        setLive(true);

    }, [square.c]);

    return (
        <div className="square big" style={{
            backgroundColor: square.c + '60',
            borderColor: square.c
            }}>
                <button className="pink small" onClick={rc}>RC</button>
                <button className="red small" onClick={gs}>Go Sleep</button>
        </div>
    );
}