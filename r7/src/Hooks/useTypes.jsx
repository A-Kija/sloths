import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3003/types'

export default function useTypes() {

    const [types, setTypes] = useState(null);
    const [createTypes, setCreateTypes] = useState(null);
    const [editTypes, setEditTypes] = useState(null);
    const [deleteTypes, setDeleteTypes] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(null);
    const [message, setMessage] = useState(null);


    useEffect(() => {
        axios.get(URL)
        .then(res => {
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
            setMessage(res.data.showMessage);
        })
    }, [createTypes]);


    useEffect(() => {
        if (null === deleteTypes) {
            return;
        }
        axios.delete(URL + '/' + deleteTypes.id)
        .then(res => {
            setLastUpdate(Date.now());
            setMessage(res.data.showMessage);
        })
    }, [deleteTypes]);


    useEffect(() => {
        if (null === editTypes) {
            return;
        }
        axios.put(URL + '/' + editTypes.id, editTypes)
        .then(res => {
            setLastUpdate(Date.now());
            setMessage(res.data.showMessage);
        })
    }, [editTypes]);


    
    
    return [types, setCreateTypes, setEditTypes, setDeleteTypes, lastUpdate, message];

}