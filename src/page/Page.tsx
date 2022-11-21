import {ReactElement, useEffect} from 'react';
import {TenDaysInfo} from "../components";
import {fetchWeatherApi} from "../slices/WeatherApiSlice";
import {useAppDispatch, useAppSelector} from "../hooks/hooks";
import {fetchIp} from "../slices/GetIpSlice";
import styles from './Page.module.scss';

export default function Page ():ReactElement {
    const {ip} = useAppSelector(state => state.Ip)
    const dispatch = useAppDispatch()

    useEffect(()=>{
        dispatch(
            fetchIp()
        )
    },[])

    useEffect(()=>{
        dispatch(
            fetchWeatherApi({
                location: '91.241.123.58',
                featureDays: 10,
                airQuality: 'yes'
            })
        )
    },[ip])
    return (
        <div className={styles.wrapper}>
         <TenDaysInfo/>
        </div>
    )

}