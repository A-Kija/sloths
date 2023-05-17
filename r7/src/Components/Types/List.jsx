import { useContext } from 'react';
import { Data } from '../../Data';
import Item from './Item';

export default function List() {

    const { types } = useContext(Data);

    return (
        <div className="card-body">
            <h5 className="card-title color-gray">All types</h5>
            {
                types
                    ? types.map(t => <Item key={t.id} type={t} />)
                    : <h5 className="color-green">Loading...</h5>
            }
        </div>
    );


}