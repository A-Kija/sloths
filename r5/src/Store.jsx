import { createContext } from 'react';
import useCreate from './Hooks/useCreate';

export const Store = createContext();


export const Data = ({children}) => {


    const [showHideCreateModal, showCreate, hideCreate] = useCreate();


    return (
        <Store.Provider value={{
            showHideCreateModal, showCreate, hideCreate
        }}>
            {children}
        </Store.Provider>
    );
}