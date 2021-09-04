import {combineReducers, createStore } from "redux"
import {timerReducer} from "../reducers/timer-reducer";

export type ReducersType = ReturnType<typeof reducers>

const reducers = combineReducers({
    timer: timerReducer
})

export const store = createStore(reducers)



// @ts-ignore
window.store = store