import { useReducer, createContext, useEffect } from 'react';
import reducer from './reducer';
import axios from 'axios';
import { loadFromServer } from './action';

export const Store = createContext();


export const StoreProvider = props => {


    const [books, dispachBooks] = useReducer(reducer, null);




    useEffect(() => {
        axios.get('https://in3.dev/knygos/')
        .then(res => dispachBooks(loadFromServer(res.data)))
        .catch(error => console.log(error))

    }, []);


    return (
        <Store.Provider value={{
            books
        }}>
            {props.children}
        </Store.Provider>
    );

}