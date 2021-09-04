import {Dispatch} from "redux";

export type TimerStateType = {
    SS_val: number
    MM_val: number
    HH_val: number
    timerMode: boolean
}

const initState: TimerStateType = {
    SS_val: 0,
    MM_val: 0,
    HH_val: 0,
    timerMode: false
}

export type TimerActionsType = changeSecAC_Type | changeMinAC_Type | changeHrsAC_Type | resetTimerModeAC_Type

export const timerReducer = (state: TimerStateType = initState, action: TimerActionsType): TimerStateType => {
    switch (action.type) {
        case 'CHANGE-SEC': {
            return {...state, SS_val: action.sec}
        }
        case 'CHANGE-MIN': {
            return {...state, MM_val: action.min}
        }
        case 'CHANGE-HRS': {
            return {...state, HH_val: action.hrs}
        }
        case 'CHANGE-TIMER-MODE': {
            return {...state, timerMode: action.resetTimerMode}
        }
        default: return state
    }
}

type resetTimerModeAC_Type = ReturnType<typeof resetTimerModeAC>
export const resetTimerModeAC = (resetTimerMode: boolean) => {
    return {type: 'CHANGE-TIMER-MODE', resetTimerMode} as const
}

type changeHrsAC_Type = ReturnType<typeof changeHrsAC>
export const changeHrsAC = (hrs: number) => {
    return {type: 'CHANGE-HRS', hrs} as const
}

type changeMinAC_Type = ReturnType<typeof changeMinAC>
export const changeMinAC = (min: number) => {
    return {type: 'CHANGE-MIN', min} as const
}

type changeSecAC_Type = ReturnType<typeof changeSecAC>
export const changeSecAC = (sec: number) => {
    return {type: 'CHANGE-SEC', sec} as const
}


// THUNK

export const timerRemoteTC = (S: number, M: number, H: number) => (dispatch: Dispatch) => {
    S < 0 && dispatch(changeSecAC(59))
    S < 0 && dispatch(changeMinAC(M - 1))
    S > 59 && dispatch(changeSecAC(0))
    S > 59 && dispatch(changeMinAC(M + 1))

    M < 0 && dispatch(changeMinAC(59))
    M < 0 && dispatch(changeHrsAC(H - 1))
    M > 59 && dispatch(changeMinAC(0))
    M > 59 && dispatch(changeHrsAC(H + 1))

    H < 0 && dispatch(changeHrsAC(23))
    H > 23 && dispatch(changeHrsAC(0))
}




