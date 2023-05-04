import { createContext, useEffect } from 'react';
import useCreate from './Hooks/useCreate';
import useCRUD from './Hooks/useCRUD';
import useDelete from './Hooks/useDelete';
import useEdit from './Hooks/useEdit';

export const Store = createContext();


export const Data = ({children}) => {


    const [showHideCreateModal, showCreate, hideCreate, colors, addColor, removeAddedColor, addTitle, doCreate, createColor] = useCreate();
    const [showHideDeleteModal, showDelete, hideDelete, deleteColor, doDelete, setModalDeleteId] = useDelete();

    const [showHideEditModal, showEdit, hideEdit, setModalEditData, oldData, editColors, editTitle, addEColor, removeEditededColor, doEdit, editColor] = useEdit();
    
    const [crudCreate, readData, crudDelete, crudEdit] = useCRUD();


    useEffect(() => {
        if (null === createColor) {
            return;
        }
        crudCreate(createColor);
    }, [createColor, crudCreate]);


    useEffect(() => {
        if (null === deleteColor) {
            return;
        }
        crudDelete(deleteColor);
    }, [deleteColor, crudDelete]);


    useEffect(() => {
        if (null === editColor) {
            return;
        }
        crudEdit(editColor);
    }, [editColor, crudEdit]);




    return (
        <Store.Provider value={{
            showEdit, setModalEditData, showHideEditModal, hideEdit, oldData, editColors, editTitle, addEColor, removeEditededColor, doEdit,

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