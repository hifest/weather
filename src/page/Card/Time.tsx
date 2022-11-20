import React from 'react';
import { Card } from './Card';
import s from './Card.module.scss';

type Props = {};
export interface Time {
  time: string;
  icon_id: string;
  temp: string;
}

export const Time = (time: Props) => {
  const times: Time[] = [
    {
      time: 'Зараз',
      icon_id: 'cloudy',
      temp: '4',
    },
    {
      time: '14:00',
      icon_id: 'littleSunny',
      temp: '5',
    },
    {
      time: '15:00',
      icon_id: 'snow',
      temp: '4',
    },
    {
      time: '16:00',
      icon_id: 'snow',
      temp: '4',
    },
    {
      time: '18:00',
      icon_id: 'cloudy',
      temp: '2',
    },
    {
      time: '19:00',
      icon_id: 'cloudyAtNight',
      temp: '1',
    },
  ];

  return (
    <div className={s.times}>
      {times.map((time: Time) => (
        <Card times={time} key={time.time} />
      ))}
    </div>
  );
};
