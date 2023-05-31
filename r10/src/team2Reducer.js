import { ADD_CUSTOM, REMOVE_CUSTOM } from './constants';

export default function team2Reducer(state, action) {

    let s = state;

    switch(action.type) {
        case ADD_CUSTOM:
            s += action.payload;
        break;
        case REMOVE_CUSTOM:
            s -= action.payload;
        break;
        default:

    }

    return s;

}