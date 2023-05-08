import { useEffect, useState } from 'react';
import axios from 'axios';

const LOGIN_URL = 'http://localhost:3003/login';

export default function usePageLogin() {


const [sentData, setSentData] = useState(null);


useEffect(() => {
    if(null === sentData) {
        return;
    }
    axios.post(LOGIN_URL, sentData)
    .then(res => {
        console.log(res.data);
    })

}, [sentData]);



}