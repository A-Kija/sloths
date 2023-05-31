import { LOAD_FROM_SERVER } from './constants';

export const loadFromServer = load => {
    return {
        type: LOAD_FROM_SERVER,
        payload: load
    }
}