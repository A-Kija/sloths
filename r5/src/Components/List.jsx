import { useContext } from 'react';
import '../Style/main-list.scss';
import { Store } from '../Store';
import ListItem from './ListItem';

export default function List() {

    const { readData } = useContext(Store);

    if (null === readData) {
        return (
            <h2>Loading...</h2>
        )
    }

    return (
        <div className="main-list">
            {
                readData.map(c => <ListItem key={c.id} color={c} />)
            }
        </div>
    )
}