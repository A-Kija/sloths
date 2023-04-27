import { useState } from "react";

export default function useCreate() {

    const [show, setShow] = useState(false);



    const showCreate = _ => setShow(true);
    const hideCreate = _ => setShow(false);


    return [show, showCreate, hideCreate];
}