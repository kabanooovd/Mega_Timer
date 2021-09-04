import React from "react";
import s from './Timer.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReducersType} from "../../store/store";
import {changeHrsAC, changeMinAC, changeSecAC, TimerStateType} from "../../reducers/timer-reducer";

export const Timer = () => {

    const dispatch = useDispatch()

    const S = useSelector<ReducersType, TimerStateType>(state => state.timer).SS_val
    const M = useSelector<ReducersType, TimerStateType>(state => state.timer).MM_val
    const H = useSelector<ReducersType, TimerStateType>(state => state.timer).HH_val

    const addZero = (num: number) => {
        return num <= 9 ? `0${num}` : num
    }

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

    return (
        <div className={s.MainTimerContainer}>
            <div className={s.timerDisplay}>
                <div className={s.buttonsUpBlock}>
                    <div className={s.plus} onClick={() => {
                       dispatch(changeHrsAC(H + 1))
                    }}/>
                    <div className={s.plus} onClick={() => {
                        dispatch(changeMinAC(M + 1))
                    }}/>
                    <div className={s.plus} onClick={() => {
                        dispatch(changeSecAC(S + 1))
                    }}/>
                </div>

                <h1>{addZero(H)} : {addZero(M)} : {addZero(S)}</h1>

                <div className={s.buttonsDownBlock}>
                    <div className={s.minus} onClick={() => {
                        dispatch(changeHrsAC(H - 1))
                    }}/>
                    <div className={s.minus} onClick={() => {
                        dispatch(changeMinAC(M - 1))
                    }}/>
                    <div className={s.minus} onClick={() => {
                        dispatch(changeSecAC(S - 1))
                    }}/>
                </div>
            </div>
            <div className={s.setBTNsContainer}>
                <div className={s.setBTN_style} onClick={ ()=>{} }><b>START</b></div>
                <div className={s.setBTN_style}><b>STOP</b></div>
            </div>
        </div>
    )
}