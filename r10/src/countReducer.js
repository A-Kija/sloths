import team1Reducer from './team1Reducer';
import team2Reducer from './team2Reducer';

export default function countReducer(state, action) {

    if (action.type <= 100) {
        return team1Reducer(state, action);
    }

    if (action.type <= 200) {
        return team2Reducer(state, action)
    }

    return state;

}