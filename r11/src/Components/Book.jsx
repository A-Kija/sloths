import { useContext } from 'react';
import { Store } from '../Store';

export default function Book({book}) {

    const { types } = useContext(Store);

    return (
        <div className="book">
            <h2>{book.title}</h2>
            <div className="img">
                <img src={book.img} alt={book.title} />
            </div>
            <div className="author">{book.author}</div>
            <div className="price">{book.price} eur</div>
            <div className="type">{types?.find(t => t.id === book.type)?.title}</div>
        </div>
        
    );

}