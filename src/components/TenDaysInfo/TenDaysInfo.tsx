import {ReactElement} from 'react';
import {useAppSelector} from "../../hooks/hooks";
import {getWeekDay} from "../../libs/getWeekDay";
import Svg from 'react-inlinesvg';
import styles from './TenDaysInfo.module.scss'

export const TenDaysInfo = ():ReactElement =>{
    const {tenDaysArray} = useAppSelector(state => state.Weather)

    const hashTableIcon = {
        1030: 'icons/mist.svg',
        1135: 'icons/mist.svg',
        1000: 'icons/sunny.svg',
        1063: 'icons/sunWithRain.svg',
        1009: 'icons/Cloudy.svg',
        1003: 'icons/littleSunny.svg',
        1198: 'icons/moderateRain.svg',
        1216: 'icons/moderateSnow.svg'
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper_info}>
                <Svg src='/icons/kalendar.svg'/>
                <h3>10-денний прогноз</h3>
            </div>
            {tenDaysArray && tenDaysArray.length > 0 && tenDaysArray.map((item) : any=>{
                return (
                    <div className={styles.wrapper_forecast} key={item.date}>
                        <span className={styles.wrapper_forecast_nameDay}>{item.date === new Date().toISOString().split('T')[0] ? 'Сьогодні': getWeekDay(new Date(item.date))}</span>
                        {/*//@ts-ignore*/}
                        <Svg src={hashTableIcon[item.day.condition.code]} height="35px" width='50px'/>
                        <span className={styles.wrapper_forecast_degBlack}>{item.day.maxtemp_c}°/</span>
                        <span className={styles.wrapper_forecast_degWhite}>{item.day.mintemp_c}°</span>
                    </div>
                )
            })}
        </div>
    )

}