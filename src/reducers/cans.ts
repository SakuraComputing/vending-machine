// cans reducer
import { SET_CANS, IAppState, canActionTypes } from '../components/types/vending'

const cansReducerDefualtState: IAppState = { cans: [] };
export default (state = cansReducerDefualtState, action: canActionTypes) => {
    switch (action.type) {
        case SET_CANS:
            return action.cans;
        default:
            return state;
    }
};