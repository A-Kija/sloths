import { useContext } from 'react';
import '../Style/delete-button.scss';
import { Store } from '../Store';

export default function DeleteButton({clolorId}) {

    const { showCreate } = useContext(Store);

    return (
        <div className="delete-button" role="button" onClick={showCreate}>
            Delete
        </div>
    );
}