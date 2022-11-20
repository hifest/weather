import {ReactElement} from 'react';
import {useAppSelector} from "../../hooks/hooks";
import {getWeekDay} from "../../libs/getWeekDay";
import styles from './TenDaysInfo.module.scss'

export const TenDaysInfo = ():ReactElement =>{
    const {tenDaysArray} = useAppSelector(state => state.Weather)
    // console.log(getWeekDay(new Date('2022-11-21')))
    return (
        <div className={styles.wrapper}>
            {tenDaysArray && tenDaysArray.length > 0 && tenDaysArray.map((item) : any=>{
                return (
                    <div>
                        {getWeekDay(new Date(item.date))}
                        <p>{item.day.maxtemp_c}</p>
                        <p>{item.day.mintemp_c}</p>
                    </div>
                )
            })}
        </div>
    )

}