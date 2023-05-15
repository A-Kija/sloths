import { useState } from 'react';

export default function useTrees() {

    const [trees, setTrees] = useState(null);
    const [createTrees, setCreateTrees] = useState(null);
    const [editTrees, setEditTrees] = useState(null);
    const [deleteTrees, setSeleteTrees] = useState(null);



    
    
    return [trees, setCreateTrees, setEditTrees, setSeleteTrees];

}