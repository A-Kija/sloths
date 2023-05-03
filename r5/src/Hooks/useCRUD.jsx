import axios from 'axios';
import { useEffect, useState } from 'react';

const SERVER_URL = 'http://localhost:3003/colors'

export default function useCRUD() {

    
    const [createData, setCreateData] = useState(null);
    const [readData, setReadData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);

    const crudCreate = data => {
        setCreateData(data);
    }

    useEffect(() => {
        axios.get(SERVER_URL)
        .then(res => {
            console.log(res.data);
            setReadData(res.data.colors);
        })

    }, []);


    useEffect(() => {
        if (null === createData) {
            return;
        }
        axios.post(SERVER_URL, {color:createData})
        .then(res => {
            console.log(res.data);
        });
    }, [createData]);


    useEffect(() => {
        if (null === deleteData) {
            return;
        }
        axios.delete(SERVER_URL + '/' + deleteData.id)
        .then(res => {
            console.log(res.data);
        });
    }, [deleteData]);




    return [crudCreate, readData, deleteData];
}