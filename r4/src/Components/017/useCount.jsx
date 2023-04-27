import { useEffect, useState } from 'react';

export default function useCount() {


    const [counter1, setCounter1] = useState(1);
    const [counter3, setCounter3] = useState(3);
    const [color1, setColor1] = useState('ok');


    useEffect(() => {
        if (counter1 > 15) {
            setColor1('error');
        }
    }, [counter1]);

    const doCounter1 = _ => {
        setCounter1(c => c + 1);
    }

    const doCounter3 = _ => {
        setCounter3(c => c * 3);
    }

    return [counter1, doCounter1, counter3, doCounter3, color1];

}