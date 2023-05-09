import { useEffect, useState } from 'react';
import axios from 'axios';

const LOGIN_URL = 'http://localhost:3003/login';

export default function usePageLogin() {

    const [requestData, setRequestData] = useState(null);
    const [responseData, setResponseData] = useState(null);

    const _setRequestData = data => {
        const validated = {
            pass: data.pass || '',
            email: data.email || ''
        }
        setRequestData(validated);
    }

    useEffect(() => {
        if (null === requestData) {
            return;
        }
        axios.post(LOGIN_URL, requestData)
            .then(res => {
                setResponseData(res.data)
            })

    }, [requestData]);


    return [responseData, _setRequestData];

}