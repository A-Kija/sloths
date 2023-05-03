import { useState } from "react";

export default function useDelete() {

    const [color, setColor] = useState(null);
    const [id, setId] = useState(0);
    const [show, setShow] = useState(false);

    const showDelete = _ => setShow(true);
    const hideDelete = _ => setShow(false);
    const setModalDeleteId = id => setId(id); 

    const doDelete = _ => {
        setColor({id});
        setShow(false);
        setId(0);
    }


    return [show, showDelete, hideDelete, color, doDelete, setModalDeleteId]

}