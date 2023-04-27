import { createContext } from 'react';
import useList from './useList';
import useCount from './useCount';


export const Store = createContext();

export function Code({children}) {


    const [list] = useList();
    const [counter1, doCounter1, counter3, doCounter3, color1] = useCount();


    return (
        <Store.Provider value={{
            counter1, doCounter1,
            counter3, doCounter3,
            color1,
            list
        }}>
            {children}
        </Store.Provider>
    );

}