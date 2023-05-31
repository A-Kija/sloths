import { LOAD_FROM_SERVER } from "./constants";

export default function reducer(state, action) {
    let s = state ? [...state] : null;

    switch(action.type) {
        case LOAD_FROM_SERVER:
            s = action.payload;
            break;
        default:
    }




    return s;
}