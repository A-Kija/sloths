import { useContext } from 'react';
import '../Style/delete-button.scss';
import { Store } from '../Store';

export default function DeleteButton({ colorId }) {

    const { showDelete, setModalDeleteId } = useContext(Store);

    const del = _ => {
        showDelete();
        setModalDeleteId(colorId);
    }

    return (
        <div className="delete-button" role="button" onClick={del}>
            Delete
        </div>
    );
}