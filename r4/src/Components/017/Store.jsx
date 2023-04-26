import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const Store = createContext();

export function Code({children}) {

    const [counter1, setCounter1] = useState(1);
    const [counter3, setCounter3] = useState(3);
    const [color1, setColor1] = useState('ok');
    const [list, setList] = useState(null);

    useEffect(() => {
        axios.get('https://dummyjson.com/quotes')
        .then(res => setList(res.data.quotes));
    }, []);

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


    return (
        <Store.Provider value={{
            counter1, doCounter1,
            counter3, doCounter3,
            color1,
            list
        }}>
            {children}
        </Store.Provider>
    )

}