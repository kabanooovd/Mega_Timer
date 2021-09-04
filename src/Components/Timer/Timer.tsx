import React, {useCallback, useEffect, useState} from "react";
import s from './Timer.module.css'

export const Timer = () => {

    const [SS, setSS] = useState<number>(0)
    const [MM, setMM] = useState<number>(0)
    const [HH, setHH] = useState<number>(0)

    const addZero = (num: number) => {
        return num <= 9 ? `0${num}` : num
    }

    SS < 0 && setSS(59)
    SS > 59 && setSS(0)

    MM < 0 && setMM(59)
    MM > 59 && setMM(0)

    HH < 0 && setHH(23)
    HH > 23 && setHH(0)


    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         setSS(SS + 1);
    //     }, 200);
    //     // clearing interval
    //     return () => clearInterval(timer);
    // });


    return (
        <div className={s.MainTimerContainer}>
            <div className={s.timerDisplay}>
                <div className={s.buttonsUpBlock}>
                    <div className={s.plus} onClick={() => {
                        setHH(HH + 1)
                    }}/>
                    <div className={s.plus} onClick={() => {
                        setMM(MM + 1)
                    }}/>
                    <div className={s.plus} onClick={() => {
                        setSS(SS + 1)
                    }}/>
                </div>

                <h1>{addZero(HH)} : {addZero(MM)} : {addZero(SS)}</h1>

                <div className={s.buttonsDownBlock}>
                    <div className={s.minus} onClick={() => {
                        setHH(HH - 1)
                    }}/>
                    <div className={s.minus} onClick={() => {
                        setMM(MM - 1)
                    }}/>
                    <div className={s.minus} onClick={() => {
                        setSS(SS - 1)
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