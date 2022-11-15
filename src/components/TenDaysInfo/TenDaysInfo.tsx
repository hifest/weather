import {ReactElement, useEffect} from 'react';
import {fetchWeatherApi} from "../../slices/WeatherApiSlice";
import {useAppDispatch} from "../../hooks/hooks";

export const TenDaysInfo = ():ReactElement =>{

    const dispatch = useAppDispatch()
    useEffect(()=>{
        dispatch(
            fetchWeatherApi({
                location: 'London',
            })
        )
    },[])
    return (
        <div >піська</div>
    )

}