import { useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function useMessages() {

    const [messages, setMessages] = useState([]);

    const add = useCallback(msg => {
        const id = uuidv4();
        setMessages(m => [...m, { text: msg[0], type: msg[1], id }])
        setTimeout(() => {
          setMessages(m => m.filter(m => m.id !== id));
        }, 5000);
    }, []);
    return [messages, add];
}