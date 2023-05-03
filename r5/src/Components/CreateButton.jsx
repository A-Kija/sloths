import { useContext } from 'react';
import '../Style/create-button.scss';
import { Store } from '../Store';

export default function CreateButton() {

    const { showCreate } = useContext(Store);

    return (
        <div className="create-button" role="button" onClick={showCreate}>
            Add New
        </div>
    );
}