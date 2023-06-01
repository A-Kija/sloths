import { LOAD_FROM_SERVER, SORT_BOOKS } from "./constants";

export default function reducer(state, action) {
    let s = state ? [...state] : null;

    switch (action.type) {
        case LOAD_FROM_SERVER:
            s = action.payload.map((b, i) => ({ ...b, row: i, show: new Set() }));
            break;
        case SORT_BOOKS:
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
            break;


        default:
    }




    return s;
}