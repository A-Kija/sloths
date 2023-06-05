import { FILTER_PRICE, FILTER_TYPES, LOAD_FROM_SERVER, SEARCH_BOOK, SORT_BOOKS } from "./constants";

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
            if (null !== s) {
                s.forEach(b => {
                    if (b.title.toLowerCase().includes(action.payload.toLowerCase())) {
                        b.show.delete('search');
                    } else {
                        b.show.add('search');
                    }
                });
            }
            break;

        case FILTER_PRICE:
            if (null !== s) {
                s.forEach(b => {
                    if (b.price >= action.payload[0] && b.price <= action.payload[1]) {
                        b.show.delete('price');
                    } else {
                        b.show.add('price');
                    }
                });
            }
            break;
        case FILTER_TYPES:
            if (null !== s) {
                if (!action.payload.size) {
                    s.forEach(b => {
                        b.show.delete('type');
                    });
                } else {
                    s.forEach(b => {
                        if (action.payload.has(b.type)) {
                            b.show.delete('type');
                        } else {
                            b.show.add('type');
                        }
                    });
                }
            }
            break;

        default:
    }




    return s;
}