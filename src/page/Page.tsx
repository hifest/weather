import {ReactElement, useEffect} from 'react';
import {TenDaysInfo} from "../components";
import {fetchWeatherApi} from "../slices/WeatherApiSlice";
import {useAppDispatch} from "../hooks/hooks";

export default function Page ():ReactElement {

    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(
            fetchWeatherApi({
                location: '91.241.123.58',
                featureDays: 10,
                airQuality: 'yes'
            })
        )
    },[])
    return (
        <div>
         <TenDaysInfo/>
        </div>
    )

}