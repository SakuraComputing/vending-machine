import { combineReducers } from '@reduxjs/toolkit'
import cansReducer from "./cans";

const rootReducer = combineReducers({
  cans: cansReducer,
});

export type RootState = ReturnType<typeof rootReducer>

export default rootReducer
