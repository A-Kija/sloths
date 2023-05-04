import { useContext } from 'react';
import '../Style/edit-button.scss';
import { Store } from '../Store';

export default function EditButton({ color }) {

    const { showEdit, setModalEditData } = useContext(Store);



    const edit = _ => {
        showEdit();
        setModalEditData(color);
        
    }

    return (
        <div className="edit-button" role="button" onClick={edit}>
            Edit
        </div>
    );
}