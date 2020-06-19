export const SET_CANS = 'SET_CANS';

export interface ICan {
    id: number;
    desc: string;
    volume: string;
    price: string;
}

export interface ICans {
    ICans: ICan[];
}

interface setCansAction {
    type: typeof SET_CANS
    cans: ICans
}

export interface IAboutProps {
    name: string;
}

export type canActionTypes = setCansAction;

export interface IAppState {
    cans: ICans[];
}
 