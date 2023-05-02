import { createContext } from 'react';
import useCreate from './Hooks/useCreate';
import useCRUD from './Hooks/useCRUD';

export const Store = createContext();


export const Data = ({children}) => {


    const [showHideCreateModal, showCreate, hideCreate, colors, addColor, removeAddedColor, addTitle, doCreate] = useCreate();
    
    const [crudCreate] = useCRUD();


    // 


    return (
        <Store.Provider value={{
            showHideCreateModal, showCreate, hideCreate, 
            colors, addColor, removeAddedColor, doCreate,
            addTitle,

        }}>
            {children}
        </Store.Provider>
    );
}