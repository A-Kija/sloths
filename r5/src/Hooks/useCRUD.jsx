import axios from 'axios';
import { useCallback, useEffect, useState } from 'react';

const SERVER_URL = 'http://localhost:3003/colors'

export default function useCRUD() {


    const [createData, setCreateData] = useState(null);
    const [readData, setReadData] = useState(null);
    const [deleteData, setDeleteData] = useState(null);
    const [editData, setEditData] = useState(null);

    const [lastUpdate, setLastUpdate] = useState(Date.now());

    const crudCreate = useCallback(data => setCreateData(data), []);
    const crudDelete = useCallback(data => setDeleteData(data), []);
    const crudEdit = useCallback(data => setEditData(data), []);


    useEffect(() => {
        axios.get(SERVER_URL)
            .then(res => {
                // console.log(res.data);
                setReadData(res.data.colors);
            })

    }, [lastUpdate]);


    useEffect(() => {
        if (null === createData) {
            return;
        }
        axios.post(SERVER_URL, { color: createData })
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


    useEffect(() => {
        if (null === editData) {
            return;
        }
        axios.put(SERVER_URL + '/' + editData.id, { color: editData })
            .then(res => {
                console.log(res.data);
                setLastUpdate(Date.now());
            });
    }, [editData]);





    return [crudCreate, readData, crudDelete, crudEdit];
}