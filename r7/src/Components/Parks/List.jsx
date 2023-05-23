import { useContext } from 'react';
import { Data } from '../../Data';
import Item from './Item';

export default function List() {

    const { parks } = useContext(Data);

    return (
        <div className="card-body">
            <h5 className="card-title color-gray">All Parks</h5>
            {
                parks
                    ? parks.map(p => <Item key={p.id} park={p} />)
                    : <h5 className="color-green">Loading...</h5>
            }
        </div>
    );


}