import axios from 'axios';
import { useEffect, useState } from 'react';

const SERVER_URL = 'http://localhost:3003/colors'

export default function useCRUD() {

    
    const [createData, setCreateData] = useState(null);
    const [readData, setReadData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const crudCreate = data => {
        setCreateData(data);
    }

    const crudDelete = data => {
        setDeleteData(data);
    }

    useEffect(() => {
        axios.get(SERVER_URL)
        .then(res => {
            console.log(res.data);
            setReadData(res.data.colors);
        })

    }, [lastUpdate]);


    useEffect(() => {
        if (null === createData) {
            return;
        }
        axios.post(SERVER_URL, {color:createData})
        .then(res => {
            setLastUpdate(Date.now());
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
            setLastUpdate(Date.now());
        });
    }, [deleteData]);




    return [crudCreate, readData, crudDelete];
}