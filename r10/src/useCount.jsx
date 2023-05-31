import { useReducer } from "react";
import countReducer from './countReducer';

export default function useCount(init)
{

    const [count, realDispachCount] = useReducer(countReducer, init);

    const dispachCount = action => {

        if (action.hasOwnProperty('payload')) {
            action.payload = parseInt(action.payload);
            if (action.payload < 0) {
                action.payload *= -1;
            }
        }

        realDispachCount(action);

    }

    return [count, dispachCount];
}