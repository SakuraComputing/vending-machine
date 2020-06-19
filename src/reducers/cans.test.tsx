import cansReducer from './cans';
import cans from '../shared/cans';
import { SET_CANS, canActionTypes } from '../components/types/vending'

describe('Cans Reducer', () => {
    it('should set cans object in the store', () => {
        const action = {
            type: SET_CANS,
            cans
        };
        const state = cansReducer(cans, action);
        expect(state).toEqual(cans);
    });
})
