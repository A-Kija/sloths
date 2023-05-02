import { useContext } from 'react';
import '../Style/create-color.scss';
import { Store } from '../Store';

export default function CreateColor({ color, title, id }) {

    const { removeAddedColor } = useContext(Store);

    const remove = _ => {
        removeAddedColor(id)
    }

    return (
        <div className="create-color" style={{
            backgroundColor: color
        }}>
            {title ? title : 'no title'}
            <div className="remove" onClick={remove}></div>
        </div>
    );

}