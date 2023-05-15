import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3003/trees'

export default function useTrees() {

    const [trees, setTrees] = useState(null);
    const [createTrees, setCreateTrees] = useState(null);
    const [editTrees, setEditTrees] = useState(null);
    const [deleteTrees, setSeleteTrees] = useState(null);


    useEffect(() => {
        axios.get(URL)
        .then(res => {
            console.log(res.data.result)
            setTrees(res.data.result);
        });
    }, []);


    
    
    return [trees, setCreateTrees, setEditTrees, setSeleteTrees];

}