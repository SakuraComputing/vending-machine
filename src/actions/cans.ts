import { SET_CANS, canActionTypes, ICan } from '../components/types/vending';

export function setCans(cans: ICan[]): canActionTypes {
    return {
        type: SET_CANS,
        cans
    }
};