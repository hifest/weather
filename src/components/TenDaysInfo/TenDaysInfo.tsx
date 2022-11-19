import {ReactElement, useEffect} from 'react';
import {fetchWeatherApi} from "../../slices/WeatherApiSlice";
import {useAppDispatch} from "../../hooks/hooks";

export const TenDaysInfo = ():ReactElement =>{

    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(
            fetchWeatherApi({
                location: '91.241.123.58',
                featureDays: 1,//обовязково щоб писати мін 1 день,щоб дізнатись яка сьогодні мін та макс температура
                // airQuality: 'yes'

            })
        )
    },[])

    return (
        <div>піська</div>
    )

}