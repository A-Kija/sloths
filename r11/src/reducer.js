import { CHANGE_PAGE, CHANGE_PER_PAGE, FILTER_PRICE, FILTER_TYPES, LOAD_FROM_SERVER, SEARCH_BOOK, SORT_BOOKS } from './constants';

const pager = s => {
    let from = (s.p - 1) * s.pp;
    let to = from + s.pp;
    let counter = 0;

    s.list.forEach(b => {
        b.show.delete('page');
    });

    s.list.forEach(b => {
        if (!b.show.size) {
            counter++;
            if (counter > from && counter <= to) {
                b.show.delete('page');
            } else {
                b.show.add('page');
            }
        }
    });

    s.links = Math.ceil(counter / s.pp);
}


export default function reducer(state, action) {
    let s = state ? structuredClone(state) : null;

    // console.log('REDUCER:', action);

    switch (action.type) {
        case LOAD_FROM_SERVER:
            s = {
                list: action.payload.map((b, i) => ({ ...b, row: i, show: new Set() })),
                p: 1,
                pp: 3,
                links: 0
            };
            break;
        case SORT_BOOKS:
            if (null !== s) {
                switch (action.payload) {
                    case 'price_desc':
                        s.list.sort((a, b) => b.price - a.price);
                        break;
                    case 'price_asc':
                        s.list.sort((a, b) => a.price - b.price);
                        break;
                    case 'title':
                        s.list.sort((a, b) => a.title.localeCompare(b.title));
                        break;
                    case 'author':
                        s.list.sort((a, b) => a.author.split(' ').pop().localeCompare(b.author.split(' ').pop()));
                        break;
                    default:
                        s.list.sort((a, b) => a.row - b.row);
                }
            }
            break;
        case SEARCH_BOOK:
            if (null !== s) {
                s.list.forEach(b => {
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
                s.list.forEach(b => {
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
                    s.list.forEach(b => {
                        b.show.delete('type');
                    });
                } else {
                    s.list.forEach(b => {
                        if (action.payload.has(b.type)) {
                            b.show.delete('type');
                        } else {
                            b.show.add('type');
                        }
                    });
                }
            }
            break;
        case CHANGE_PAGE:
            s.p = action.payload;
            break;

        case CHANGE_PER_PAGE:
            if (null !== s) {
                s.pp = action.payload;
            }
            break;

        default:
    }



    if (null !== s) {

        if (s.pp !== 'all') {
            pager(s);
            if (s.p > s.links && s.links) {
                s.p = s.links;
                pager(s);
            }
        } else {
            s.list.forEach(b => {
                b.show.delete('page');
            });
            s.links = 0;
        }


    }


    return s;
}