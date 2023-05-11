import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const ADMIN_URL = 'http://localhost:3003/admin';

export default function usePageAdmin() {

    const [responseData, setResponseData] = useState(null);
    const [loadTime, setLoadTime] = useState(null);

    const load = useCallback(_ => {
        setLoadTime(Date.now());
    }, [setLoadTime]);

    useEffect(() => {
        if (null === loadTime) {
            return;
        }
        axios.get(ADMIN_URL, {withCredentials: true})
        .then(res => {
            setResponseData(res.data)
        })
        .catch(error => {
            setResponseData(error)
        })
    }, [loadTime]);

    return [responseData, load];
}