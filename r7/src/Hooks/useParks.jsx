import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3003/parks'

export default function useParks() {

    const [parks, setParks] = useState(null);
    const [createParks, setCreateParks] = useState(null);
    const [editParks, setEditParks] = useState(null);
    const [deleteParks, setDeleteParks] = useState(null);
    const [lastUpdate, setLastUpdate] = useState(null);
    const [message, setMessage] = useState(null);


    useEffect(() => {
        axios.get(URL)
        .then(res => {
            setParks(res.data.result);
        });
    }, [lastUpdate]);


    useEffect(() => {
        if (null === createParks) {
            return;
        }
        axios.post(URL, createParks)
        .then(res => {
            setLastUpdate(Date.now());
            setMessage(res.data.showMessage);
        })
    }, [createParks]);


    useEffect(() => {
        if (null === deleteParks) {
            return;
        }
        axios.delete(URL + '/' + deleteParks.id)
        .then(res => {
            setLastUpdate(Date.now());
            setMessage(res.data.showMessage);
        })
    }, [deleteParks]);


    useEffect(() => {
        if (null === editParks) {
            return;
        }
        axios.put(URL + '/' + editParks.id, editParks)
        .then(res => {
            setLastUpdate(Date.now());
            setMessage(res.data.showMessage);
        })
    }, [editParks]);


    
    
    return [parks, setCreateParks, setEditParks, setDeleteParks, message];

}