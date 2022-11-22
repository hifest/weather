import { ReactElement, useEffect } from 'react';
import { TenDaysInfo } from '../components';
import { fetchWeatherApi } from '../slices/WeatherApiSlice';
import { useAppDispatch } from '../hooks/hooks';
import { LeftSide } from '../components/LeftSide/LeftSide';
import s from './Page.module.scss';
import { Card } from '../components/LeftSide/Times/Card';
import { Times } from '../components/LeftSide/Times/Times';

export default function Page(): ReactElement {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      fetchWeatherApi({
        location: '91.241.123.58',
        featureDays: 10,
        airQuality: 'yes',
      }),
    );
  }, []);
  return (
    <div className={s.body}>
      <LeftSide />
      <Times />
      {/* <TenDaysInfo /> */}
    </div>
  );
}
