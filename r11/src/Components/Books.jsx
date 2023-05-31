import { useContext } from 'react';
import Book from './Book';
import { Store } from '../Store';

export default function Books() {

    const { books } = useContext(Store);

    return (
        <div className="books-list">
            {
                books
                    ? books.map(b => <Book key={b.id} book={b} />)
                    : <h2>LOADING...</h2>
            }
        </div>
    )
}