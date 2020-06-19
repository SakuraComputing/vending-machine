import {configureStore, Action} from '@reduxjs/toolkit'
import { ThunkAction } from 'redux-thunk'
import rootReducer, {RootState} from "../reducers/rootReducer";
import { setCans } from '../actions/cans';
import { cans } from '../shared/cans';

const store = configureStore({
    reducer: rootReducer
});

// if (process.env.NODE_ENV === 'development' && module.hot) {
//     module.hot.accept('./rootReducer', () => {
        const newRootReducer = require('../reducers/rootReducer').default
        store.replaceReducer(newRootReducer)
//     })
// }

console.log('confirgStore ', cans)

export type AppDispatch = typeof store.dispatch

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>

store.dispatch( setCans(cans) );

export default store;







