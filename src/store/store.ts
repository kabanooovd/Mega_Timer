import {applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk";
import {timerReducer} from "../reducers/timer-reducer";

export type ReducersType = ReturnType<typeof reducers>

const reducers = combineReducers({
    timer: timerReducer
})

export const store = createStore(reducers, applyMiddleware(thunk))



// @ts-ignore
window.store = store