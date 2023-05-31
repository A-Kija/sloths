import { ADD_ONE, REMOVE_33, REMOVE_ONE } from './constants';

export default function team1Reducer(state, action) {

    let s = state;

    switch(action.type) {
        case ADD_ONE:
            s++;
        break;
        case REMOVE_ONE:
            s--;
        break;
        case REMOVE_33:
            s -= 33;
        break;
        default:
    }
    
    return s;

}