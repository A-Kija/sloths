import { ADD_CUSTOM, ADD_ONE, REMOVE_33, REMOVE_CUSTOM, REMOVE_ONE } from './constants';

export const addOne = _ => {
    const action = {
        type: ADD_ONE
    };
    return action;
}

export const remOne = _ => {
    const action = {
        type: REMOVE_ONE
    };
    return action;
}

export const rem33 = _ => {
    const action = {
        type: REMOVE_33
    };
    return action;
}

export const addCustom = what => {
    const action = {
        type: ADD_CUSTOM,
        payload: what
    };
    return action;
}

export const remCustom = what => {
    const action = {
        type: REMOVE_CUSTOM,
        payload: what
    };
    return action;
}

