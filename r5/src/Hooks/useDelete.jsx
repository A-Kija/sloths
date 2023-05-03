export default function useDelete() {

    const [show, setShow] = useState(false);



    const showDelete = _ => setShow(true);
    const hideDelete = _ => setShow(false);


    return [show, showDelete, hideDelete]

}