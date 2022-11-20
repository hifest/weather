import {ReactElement} from 'react';
import {useAppSelector} from "../../hooks/hooks";
import {getWeekDay} from "../../libs/getWeekDay";
import Svg from 'react-inlinesvg';
import styles from './TenDaysInfo.module.scss'
export const TenDaysInfo = ():ReactElement =>{
    const {tenDaysArray} = useAppSelector(state => state.Weather)
    // {getWeekDay(new Date(item.date))}
    // <p>{item.day.maxtemp_c}</p>
    // <p>{item.day.mintemp_c}</p>
    // {tenDaysArray && tenDaysArray.length > 0 && tenDaysArray.map((item) : any=>{
    //     return (
    //
    //     )
    // })}
    return (
        <div className={styles.wrapper}>
            <Svg src='/icons/kalendar.svg'/>
        </div>
    )

}