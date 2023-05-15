import { useContext } from 'react';
import { Data } from '../../Data';
import Item from './Item';

export default function List() {

    const { trees } = useContext(Data);

    return (
        <div className="card m-3">
            <h2 className="card-header color-yellow">Trees list</h2>
            <div className="card-body">
                <h5 className="card-title color-gray">All planted trees</h5>
                {
                    trees 
                    ? trees.map(t => <Item key={t.id} tree={t} />)
                    : <h5 className="color-green">Loading...</h5>
                }
            </div>
        </div>
    );


}