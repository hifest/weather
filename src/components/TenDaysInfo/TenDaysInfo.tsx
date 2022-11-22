import { ReactElement } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { getWeekDay } from '../../libs/getWeekDay';
import Svg from 'react-inlinesvg';
import s from './TenDaysInfo.module.scss';



export const TenDaysInfo = (): ReactElement => {
  const { tenDaysArray } = useAppSelector((state) => state.Weather);



    const hashTableIcon = {
        1030: 'icons/mist.svg',
        1135: 'icons/mist.svg',
        1000: 'icons/sunny.svg',
        1063: 'icons/sunWithRain.svg',
        1009: 'icons/Cloudy.svg',
        1003: 'icons/littleSunny.svg',
        1198: 'icons/moderateRain.svg',
        1216: 'icons/moderateSnow.svg',
        1219: 'icons/moderateSnow.svg',
    }

    return (
        <div className={s.wrapper}>
            <div className={s.wrapper_info}>
                <Svg src='/icons/kalendar.svg'/>
                <h3>10-денний прогноз</h3>
            </div>
            {tenDaysArray && tenDaysArray.length > 0 && tenDaysArray.map((item) : any=>{
                return (
                    <div className={s.wrapper_forecast} key={item.date}>
                        <span className={s.wrapper_forecast_nameDay}>{item.date === new Date().toISOString().split('T')[0] ? 'Сьогодні': getWeekDay(new Date(item.date))}</span>
                        {/*//@ts-ignore*/}
                        <Svg src={hashTableIcon[item.day.condition.code]} height="35px" width='50px'/>
                        <span className={s.wrapper_forecast_degBlack}>{Math.round(item.day.maxtemp_c)}°</span>
                        /{Math.round(item.day.mintemp_c)}°
                    </div>
                )
            })}
        </div>
    )

}

