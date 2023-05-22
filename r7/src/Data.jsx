import { createContext, useEffect, useState } from 'react';
import useTrees from './Hooks/useTrees';
import useTypes from './Hooks/useTypes';
import useParks from './Hooks/useParks';
import useTypesCount from './Hooks/useTypesCount';
import useMessages from './Hooks/useMessages';

export const Data = createContext();

export const  DataProvider = ({children}) => {

    const [trees, setCreateTrees, setEditTrees, setDeleteTrees, lastUpdateTrees, treeMessage] = useTrees();
    const [types, setCreateTypes, setEditTypes, setDeleteTypes, lastUpdateTypes, typeMessage] = useTypes();
    const [parks, setCreateParks, setEditParks, setDeleteParks, parkMessage] = useParks();
    const [tab, setTab] = useState('trees');
    const [typesCount, setLastUpdateTypesCount] = useTypesCount();
    const [msg, addMessage, removeMessage] = useMessages();


    useEffect(() => {
        if (null === treeMessage) {
            return;
        }
        addMessage(treeMessage);
    }, [treeMessage]);

    useEffect(() => {
        if (null === typeMessage) {
            return;
        }
        addMessage(typeMessage);
    }, [typeMessage]);

    useEffect(() => {
        if (null === parkMessage) {
            return;
        }
        addMessage(parkMessage);
    }, [parkMessage]);


    useEffect(() => {
        if (null === lastUpdateTrees && null === lastUpdateTypes) {
            return
        }
        setLastUpdateTypesCount(Date.now());

    }, [lastUpdateTrees, lastUpdateTypes])


    return (
        <Data.Provider value={{

            tab, setTab,
            trees, setCreateTrees, setEditTrees, setDeleteTrees,
            types, setCreateTypes, setEditTypes, setDeleteTypes,
            parks, setCreateParks, setEditParks, setDeleteParks,
            typesCount,
            msg, addMessage, removeMessage
        }}>
            {children}
        </Data.Provider>
    );
}