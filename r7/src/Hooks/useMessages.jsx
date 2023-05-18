import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const time = 60;

export default function useMessages() {

    const [msg, setMsg] = useState([]);

    const removeMessage = id => {
        setMsg(m => m
            .map(m => {
                if (m === m.id) {
                    clearInterval(m.timer);
                }
                return m;
            })
            .filter(m => m.id !== id)
    )}

    const addSecond = id => {
        setMsg(m => m
            .map(m => {
                if (m === m.id && m.seconds > time ) {
                    clearInterval(m.timer);
                }
                return m;
            })
            .filter(m => m.id !== id || m.seconds < time)
            .map(m => m.id === id ? {...m, seconds: m.seconds + 5} : {...m}));
        }

    const addMessage = (m) => {
        const id = uuidv4();
        const msg = {
            id,
            type: m.type,
            title: m.title,
            text: m.text,
            seconds: 0,
            timer: setInterval(() => addSecond(id), 5000)
        }
        setMsg(m => [...m, msg]);
    }
    return [msg, addMessage, removeMessage];

}