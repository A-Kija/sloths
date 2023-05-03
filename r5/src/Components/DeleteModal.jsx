import { useContext, useEffect, useState } from 'react';
import '../Style/delete-modal.scss';
import { Store } from '../Store';

export default function DeleteModal() {

    const [opacity, setOpacity] = useState(0);
    const [show, setShow] = useState(0);


    const { showHideDeleteModal, hideDelete, doDelete } = useContext(Store);

    useEffect(() => {

        setOpacity(showHideDeleteModal ? 1 : 0);

        if (showHideDeleteModal === true) {
            setShow(true);
        } else {
            // setTimeout(_ => setShow(false), 2000);
            setShow(false);
        }

    }, [showHideDeleteModal])


    if (!show) {
        return null;
    }




    return (
        <div className="delete-modal" style={{opacity}}>
            <div className="delete-modal-body">
                <div className="delete-modal-title">
                    Delete?
                </div>
                <div className="delete-modal-bottom">
                    <button onClick={_=> doDelete()}>ok</button>
                    <button onClick={hideDelete}>cancel</button>
                </div>
            </div>
        </div>
    );

}