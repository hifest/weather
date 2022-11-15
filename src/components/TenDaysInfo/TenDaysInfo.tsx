import {ReactElement, useEffect} from 'react';
import {fetchWeatherApi} from "../../slices/WeatherApiSlice";
import {useAppDispatch} from "../../hooks/hooks";

export const TenDaysInfo = ():ReactElement =>{

    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(
            fetchWeatherApi({
                location: '91.241.123.58',
                featureDays: 10
            })
        )
    },[])
    return (
        <div></div>
    )

}