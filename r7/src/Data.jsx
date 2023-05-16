import { createContext, useState } from 'react';
import useTrees from './Hooks/useTrees';
import useTypes from './Hooks/useTypes';

export const Data = createContext();

const treeTypes = [
    {id: 1, title: 'Lapuočiai'},
    {id: 2, title: 'Spygliuočiai'},
    {id: 3, title: 'Palmės'}
]

export const  DataProvider = ({children}) => {

    const [trees, setCreateTrees, setEditTrees, setDeleteTrees] = useTrees();
    const [types, setCreateTypes, setEditTypes, setDeleteTypes] = useTypes();
    const [tab, setTab] = useState('trees')

    return (
        <Data.Provider value={{
            treeTypes,

            tab, setTab,
            trees, setCreateTrees, setEditTrees, setDeleteTrees,
            types, setCreateTypes, setEditTypes, setDeleteTypes
        }}>
            {children}
        </Data.Provider>
    );
}