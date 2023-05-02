import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const API_URL = 'https://www.thecolorapi.com/id?hex=';

export default function useCreate() {

    const [show, setShow] = useState(false);
    const [colors, setColors] = useState(null);
    const [title, setTitle] = useState('');


    const showCreate = _ => setShow(true);
    const hideCreate = _ => setShow(false);

    const addTitle = t => setTitle(t);


    const addColor = hex => {
        const id = uuidv4();
        axios.get(API_URL + hex.substring(1))
        .then(res => {
            // console.log(res.data);
            setColors(c => c.map(c => c.id === id ? {...c, title: res.data.name.value} : {...c}));
        });
        setColors(c => [...c ?? [], {id, color: hex}]);
    }

    const removeColor = id => {
        setColors(c => {
            const colors = c.filter(c => c.id !== id);
            return colors.length ? colors : null;
        });
    }




    return [show, showCreate, hideCreate, colors, addColor, removeColor, addTitle];
}