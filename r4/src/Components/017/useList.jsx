import { useEffect, useState } from 'react';
import axios from 'axios';
export default function useList() {

    const [list, setList] = useState(null);

    useEffect(() => {
        axios.get('https://dummyjson.com/quotes')
        .then(res => setList(res.data.quotes));
    }, []);

    return [list];

}