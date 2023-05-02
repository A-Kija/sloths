import axios from 'axios';
import { useEffect, useState } from 'react';

const SERVER_URL = 'http://localhost:3000/colors'

export default function useCRUD() {

    
    const [createData, setCreateData] = useState(null);

    const crudCreate = data => {
        setCreateData(data);
    }



    useEffect(() => {
        if (null === createData) {
            return;
        }
        axios.post(SERVER_URL, createData)
        .then(res => {
            console.log(res.data);
        })

    }, [createData]);



    return [crudCreate];
}