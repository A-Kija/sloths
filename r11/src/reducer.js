import { LOAD_FROM_SERVER, SEARCH_BOOK, SORT_BOOKS } from "./constants";

export default function reducer(state, action) {
    let s = state ? [...state] : null;

    console.log('REDUCER:', action);

    switch (action.type) {
        case LOAD_FROM_SERVER:
            s = action.payload.map((b, i) => ({ ...b, row: i, show: new Set() }));
            break;
        case SORT_BOOKS:
            if (null !== s) {
                switch (action.payload) {
                    case 'price_desc':
                        s.sort((a, b) => b.price - a.price);
                        break;
                    case 'price_asc':
                        s.sort((a, b) => a.price - b.price);
                        break;
                    case 'title':
                        s.sort((a, b) => a.title.localeCompare(b.title));
                        break;
                    case 'author':
                        s.sort((a, b) => a.author.split(' ').pop().localeCompare(b.author.split(' ').pop()));
                        break;
                    default:
                        s.sort((a, b) => a.row - b.row);
                }
            }
            break;
        case SEARCH_BOOK:
            s.forEach(b => {
                if (b.title.toLowerCase().includes(action.payload.toLowerCase())) {
                    b.show.delete('search');
                } else {
                    b.show.add('search');
                }
            });
            break;

        default:
    }




    return s;
}