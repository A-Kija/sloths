import { createContext } from 'react';
import useTrees from './Hooks/useTrees';

export const Data = createContext();

const treeTypes = [
    {id: 1, title: 'Lapuočiai'},
    {id: 2, title: 'Spygliuočiai'},
    {id: 3, title: 'Palmės'}
]

export const  DataProvider = ({children}) => {

    const [trees, setCreateTrees, setEditTrees, setSeleteTrees] = useTrees();


    return (
        <Data.Provider value={{
            treeTypes,


            trees, setCreateTrees, setEditTrees, setSeleteTrees
        }}>
            {children}
        </Data.Provider>
    );
}