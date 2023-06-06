import { CHANGE_PAGE, CHANGE_PER_PAGE, FILTER_PRICE, FILTER_TYPES, LOAD_FROM_SERVER, SEARCH_BOOK, SORT_BOOKS } from './constants';

export const loadFromServer = load => {
    return {
        type: LOAD_FROM_SERVER,
        payload: load
    }
}

export const sortBooks = direction => {
    return {
        type: SORT_BOOKS,
        payload: direction
    }
}


export const searchBook = what => {
    return {
        type: SEARCH_BOOK,
        payload: what
    }
}

export const filterPrice = range => {
    return {
        type: FILTER_PRICE,
        payload: range
    }
}

export const filterTypes = types => {
    return {
        type: FILTER_TYPES,
        payload: types
    }
}

export const changePage = page => {
    return {
        type: CHANGE_PAGE,
        payload: page
    }
}

export const changePerPage = perPage => {
    return {
        type: CHANGE_PER_PAGE,
        payload: perPage
    }
}