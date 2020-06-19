import { SET_CANS, canActionTypes, ICans } from '../components/types/vending';

export const setCans = (cans: ICans): canActionTypes => ({
    type: SET_CANS,
    cans
});