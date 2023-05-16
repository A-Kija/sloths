import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3003/types'

export default function useTypes() {

    const [types, setTypes] = useState(null);
    const [createTypes, setCreateTypes] = useState(null);
    const [editTypes, setEditTypes] = useState(null);
    const [deleteTypes, setDeleteTypes] = useState(null);

    const [lastUpdate, setLastUpdate] = useState(Date.now());


    useEffect(() => {
        axios.get(URL)
        .then(res => {
            console.log(res.data.result)
            setTypes(res.data.result);
        });
    }, [lastUpdate]);


    useEffect(() => {
        if (null === createTypes) {
            return;
        }
        axios.post(URL, createTypes)
        .then(res => {
            setLastUpdate(Date.now());
            console.log(res.data);
        })
    }, [createTypes]);


    useEffect(() => {
        if (null === deleteTypes) {
            return;
        }
        axios.delete(URL + '/' + deleteTypes.id)
        .then(res => {
            setLastUpdate(Date.now());
            console.log(res.data);
        })
    }, [deleteTypes]);


    useEffect(() => {
        if (null === editTypes) {
            return;
        }
        axios.put(URL + '/' + editTypes.id, editTypes)
        .then(res => {
            // setLastUpdate(Date.now());
            console.log(res.data);
        })
    }, [editTypes]);


    
    
    return [types, setCreateTypes, setEditTypes, setDeleteTypes];

}