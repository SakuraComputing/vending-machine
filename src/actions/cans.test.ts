import cans from '../shared/cans';
import { setCans } from './cans';
import { SET_CANS, ICans } from '../components/types/vending';

describe('cans actions', () => {
    it('should set up the cans action object with data', () => {
        const action: ICans[] = setCans(cans);

        expect(action).toEqual({
            type: SET_CANS,
            cans
        })
    });
});
