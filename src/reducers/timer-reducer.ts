

export type TimerStateType = {
    SS_val: number
    MM_val: number
    HH_val: number
}

const initState: TimerStateType = {
    SS_val: 0,
    MM_val: 0,
    HH_val: 0,
}

export type TimerActionsType = changeSecAC_Type | changeMinAC_Type | changeHrsAC_Type

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
        default: return state
    }
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




