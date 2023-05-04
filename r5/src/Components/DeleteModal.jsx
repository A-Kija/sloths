import { useContext, useEffect, useState } from 'react';
import '../Style/delete-modal.scss';
import { Store } from '../Store';
import variables from '../Style/variables.module.scss';

export default function DeleteModal() {

    const [opacity, setOpacity] = useState(0);
    const [show, setShow] = useState(null);


    const { showHideDeleteModal, hideDelete, doDelete } = useContext(Store);

    useEffect(() => {
        // if (null === show) {
        //     setShow(false);
        //     return;
        // }

        if (showHideDeleteModal === true) {
            setShow(true);
            setTimeout(_ => setOpacity(1), 50); // fake wait while css apply
        } else {
            setOpacity(0);
            setTimeout(_ => setShow(false), parseInt(variables.animationTime));
        }

    }, [showHideDeleteModal]);


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