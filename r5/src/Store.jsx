import { createContext } from 'react';
import useCreate from './Hooks/useCreate';

export const Store = createContext();


export const Data = ({children}) => {


    const [showHideCreateModal, showCreate, hideCreate, colors, addColor, removeColor, addTitle] = useCreate();


    return (
        <Store.Provider value={{
            showHideCreateModal, showCreate, hideCreate, 
            colors, addColor, removeColor,
            addTitle
        }}>
            {children}
        </Store.Provider>
    );
}