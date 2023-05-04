import { createContext, useEffect } from 'react';
import useCreate from './Hooks/useCreate';
import useCRUD from './Hooks/useCRUD';
import useDelete from './Hooks/useDelete';
import useEdit from './Hooks/useEdit';

export const Store = createContext();


export const Data = ({children}) => {


    const [showHideCreateModal, showCreate, hideCreate, colors, addColor, removeAddedColor, addTitle, doCreate, createColor] = useCreate();
    const [showHideDeleteModal, showDelete, hideDelete, deleteColor, doDelete, setModalDeleteId] = useDelete();

    const [showHideEditModal, showEdit, hideEdit, setModalEditData] = useEdit();
    
    const [crudCreate, readData, crudDelete] = useCRUD();


    useEffect(() => {
        if (null === createColor) {
            return;
        }
        crudCreate(createColor);
    }, [createColor]);


    useEffect(() => {
        if (null === deleteColor) {
            return;
        }
        crudDelete(deleteColor);
    }, [deleteColor]);




    return (
        <Store.Provider value={{
            showEdit, setModalEditData, showHideEditModal,

            showHideCreateModal, showCreate, hideCreate,
            showHideDeleteModal, showDelete, hideDelete, doDelete, setModalDeleteId,
            colors, addColor, removeAddedColor, doCreate,
            addTitle,
            readData,

        }}>
            {children}
        </Store.Provider>
    );
}