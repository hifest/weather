import { ReactElement, useEffect } from 'react';
import { TenDaysInfo } from '../components';
import { fetchWeatherApi } from '../slices/WeatherApiSlice';
import { useAppDispatch } from '../hooks/hooks';
import { LeftSide } from '../page/LeftSide/LeftSide';
import s from './Page.module.scss';
import { Time } from './Card/Time';
import { Card } from './Card/Card';

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
      <TenDaysInfo />
      <LeftSide />
      <Card />
    </div>
  );
}
