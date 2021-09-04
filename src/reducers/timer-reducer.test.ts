import {changeHrsAC, changeMinAC, changeSecAC, timerReducer, TimerStateType} from "./timer-reducer";


test('sec value have to be changed', () => {
    const initState: TimerStateType = {
        SS_val: 0,
        MM_val: 0,
        HH_val: 0,
    }
    const action = changeSecAC(initState.SS_val + 1)
    const finalState = timerReducer(initState, action)
    expect(finalState.SS_val).toBe(1)
} )

test('min value have to be changed', () => {
    const initState: TimerStateType = {
        SS_val: 0,
        MM_val: 0,
        HH_val: 0,
    }
    const action = changeMinAC(initState.MM_val + 1)
    const finalState = timerReducer(initState, action)
    expect(finalState.MM_val).toBe(1)
} )

test('hrs value have to be changed', () => {
    const initState: TimerStateType = {
        SS_val: 0,
        MM_val: 0,
        HH_val: 0,
    }
    const action = changeHrsAC(initState.HH_val + 1)
    const finalState = timerReducer(initState, action)
    expect(finalState.HH_val).toBe(1)
} )



