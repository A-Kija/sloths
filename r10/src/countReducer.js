export default function countReducer(state, action) {

    let s = state;

    switch(action.type) {
        case 'add_one':
            s++;
        break;
        case 'remove_1':
            s--;
        break;
        case 'r_33':
            s -= 33;
        break;
        case 'add_some':
            s += parseInt(action.payload);
        break;
        default:
    }

    return s;

}