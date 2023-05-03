import { createContext, useEffect } from 'react';
import useCreate from './Hooks/useCreate';
import useCRUD from './Hooks/useCRUD';
import useDelete from './Hooks/useDelete';

export const Store = createContext();


export const Data = ({children}) => {


    const [showHideCreateModal, showCreate, hideCreate, colors, addColor, removeAddedColor, addTitle, doCreate, createColor] = useCreate();
    const [showHideDeleteModal, showDelete, hideDelete] = useDelete();

    const [crudCreate, readData] = useCRUD();


    useEffect(() => {
        if (null === createColor) {
            return;
        }
        crudCreate(createColor);
    }, [createColor])




    return (
        <Store.Provider value={{
            showHideCreateModal, showCreate, hideCreate,
            showHideDeleteModal, showDelete, hideDelete, 
            colors, addColor, removeAddedColor, doCreate,
            addTitle,
            readData,

        }}>
            {children}
        </Store.Provider>
    );
}