import React, {useEffect, useState} from "react";
import s from './Timer.module.css'
import {useDispatch, useSelector} from "react-redux";
import {ReducersType} from "../../store/store";
import {
    changeHrsAC,
    changeMinAC,
    changeSecAC, resetTimerModeAC,
    timerRemoteTC,
    TimerStateType
} from "../../reducers/timer-reducer";

export const Timer = React.memo(() => {

    const dispatch = useDispatch()

    const S = useSelector<ReducersType, TimerStateType>(state => state.timer).SS_val
    const M = useSelector<ReducersType, TimerStateType>(state => state.timer).MM_val
    const H = useSelector<ReducersType, TimerStateType>(state => state.timer).HH_val
    const TM = useSelector<ReducersType, TimerStateType>(state => state.timer).timerMode

    const [disabledBtn, setDisabledBtn] = useState<boolean>(false)
    const [disabledArrow, setDisabledArrow] = useState<boolean>(true)

    const addZero = (num: number) => {
        return num <= 9 ? `0${num}` : num
    }


    useEffect(() => {
        dispatch(timerRemoteTC(S, M, H))
        H === 0 && M === 0 && S === 0 && stopBtn()
        H === 0 && M === 0 && S === 0 && setDisabledBtn(false)
    }, [H, M, S, dispatch])


    useEffect(() => {
        const timer = setInterval(() => {
            TM && dispatch(changeSecAC(S - 1))
        }, 50);
        return () => clearInterval(timer);
    }, [S, TM, dispatch]);


    const startBtn = () => {
        dispatch(resetTimerModeAC(true))
        setDisabledBtn(false)
        setDisabledArrow(false)
    }
    const stopBtn = () => {
        dispatch(resetTimerModeAC(false))
        setDisabledBtn(true)
        setDisabledArrow(true)

    }
    const zeroTimerStyles = () => {
        dispatch(changeSecAC(0))
        dispatch(changeMinAC(0))
        dispatch(changeHrsAC(0))
    }

    const startBtnStyles = disabledBtn ? s.setBTN_style : s.setBTN_disabled
    const stopBtnStyles = !disabledBtn ? s.setBTN_style : s.setBTN_disabled

    const plusArrowsStyles = disabledArrow ? s.plus : s.plusDisabled
    const minusArrowsStyles = disabledArrow ? s.minus : s.minusDisabled
    const zeroBtnStyles = ''

    return (
        <div className={s.MainTimerContainer}>
            <div className={s.timerDisplay}>
                <div className={s.buttonsUpBlock}>
                    <div className={plusArrowsStyles} onClick={() => {
                        dispatch(changeHrsAC(H + 1))
                        setDisabledBtn(true)
                    }}/>
                    <div className={plusArrowsStyles} onClick={() => {
                        dispatch(changeMinAC(M + 1))
                        setDisabledBtn(true)
                    }}/>
                    <div className={plusArrowsStyles} onClick={() => {
                        dispatch(changeSecAC(S + 1))
                        setDisabledBtn(true)
                    }}/>
                </div>

                <h1>{addZero(H)} : {addZero(M)} : {addZero(S)}</h1>

                <div className={s.buttonsDownBlock}>
                    <div className={minusArrowsStyles} onClick={() => {
                        dispatch(changeHrsAC(H - 1))
                        setDisabledBtn(true)
                    }}/>
                    <div className={minusArrowsStyles} onClick={() => {
                        dispatch(changeMinAC(M - 1))
                        setDisabledBtn(true)
                    }}/>
                    <div className={minusArrowsStyles} onClick={() => {
                        dispatch(changeSecAC(S - 1))
                        setDisabledBtn(true)
                    }}/>
                </div>
            </div>
            <div className={s.setBTNsContainer}>
                <div className={startBtnStyles} onClick={startBtn}><b>START</b></div>
                <div className={stopBtnStyles } onClick={stopBtn}><b>STOP</b></div>
                <div className={zeroBtnStyles} onClick={zeroTimerStyles}><b>ZERO</b></div>
            </div>
        </div>
    )
})