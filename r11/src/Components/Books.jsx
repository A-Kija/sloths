import { useContext } from 'react';
import Book from './Book';
import { Store } from '../Store';
import { changePage } from '../action';

export default function Books() {

    const { books, dispachBooks } = useContext(Store);

    return (
        <div className="main">
            <div className="books-list">
                {
                    books
                        ? books.list.map(b => b.show.size ? null : <Book key={b.id} book={b} />)
                        : <h2>LOADING...</h2>
                }
            </div>
            {
                books && books.links
                    ?
                    <div className="links">
                        {
                            books?.p === 1
                                ?
                                <div className="arrow left disabled"></div>
                                :
                                <div className="arrow left" onClick={_ => dispachBooks(changePage(books.p - 1))}></div>
                        }

                        {
                            [...Array(books.links ? books.links : 0)].map((_, i) =>
                                i + 1 === books.p
                                    ?
                                    <div className="link active" key={i}>{i + 1}</div>
                                    :
                                    <div className="link" key={i} onClick={_ => dispachBooks(changePage(i + 1))}>{i + 1}</div>
                            )
                        }
                        {
                            books.links === books.p
                                ?
                                <div className="arrow right disabled"></div>
                                :
                                <div className="arrow right" onClick={_ => dispachBooks(changePage(books.p + 1))}></div>
                        }
                    </div>
                    :
                    null
            }
        </div>
    )
}