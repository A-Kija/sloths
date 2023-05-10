import { useEffect, useState } from 'react';
import axios from 'axios';

const ADMIN_URL = 'http://localhost:3003/admin';


export default function usePageAdmin() {


    const [responseData, setResponseData] = useState(null);
    const [loadTime, setLoadTime] = useState(null);

    const load = _ => {
        setLoadTime(Date.now());
    }

    useEffect(() => {
        if (null === loadTime) {
            return;
        }
        axios.get(ADMIN_URL, {withCredentials: true})
        .then(res => {
            setResponseData(res.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, [loadTime]);


    return [responseData, load];

}