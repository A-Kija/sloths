import { useEffect, useState } from 'react';
import axios from 'axios';

const URL = 'http://localhost:3003/types-count'

export default function useTypesCount() {

    const [typesCount, setTypesCount] = useState();
    const [lastUpdate, setLastUpdate] = useState(Date.now());

    useEffect(() => {
        axios.get(URL)
        .then(res => {
            setTypesCount(res.data.result);
        });
    }, [lastUpdate]);


    return [typesCount, setLastUpdate];

}
