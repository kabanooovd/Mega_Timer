import React, {useEffect, useState} from "react";
import s from './Timer.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReducersType} from "../../store/store";
import {changeHrsAC, changeMinAC, changeSecAC, TimerStateType} from "../../reducers/timer-reducer";

export const Timer = React.memo(() => {

    const dispatch = useDispatch()

    const S = useSelector<ReducersType, TimerStateType>(state => state.timer).SS_val
    const M = useSelector<ReducersType, TimerStateType>(state => state.timer).MM_val
    const H = useSelector<ReducersType, TimerStateType>(state => state.timer).HH_val

    const [counterMode, setCounterMode] = useState(false)

    const addZero = (num: number) => {
        return num <= 9 ? `0${num}` : num
    }

    useEffect( () => {
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

        H === 0 && M === 0 && S === 0 && stopBtn()
    }, [H, M, S, dispatch] )


    useEffect(() => {
        const timer = setInterval(() => {
            counterMode && dispatch(changeSecAC(S - 1))
        }, 10);
        // clearing interval
        return () => clearInterval(timer);
    }, [S, counterMode, dispatch]);


    const startBtn = () => {
        setCounterMode(true)
    }
    const stopBtn = () => {
        setCounterMode(false)

    }




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
                <div className={s.setBTN_style} onClick={startBtn}><b>START</b></div>
                <div className={s.setBTN_style} onClick={stopBtn}><b>STOP</b></div>
            </div>
        </div>
    )
})