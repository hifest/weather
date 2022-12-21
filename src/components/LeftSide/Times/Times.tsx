import React from 'react';
import s from './Times.module.scss';
import Svg from 'react-inlinesvg';
import { ReactElement } from 'react';
import { Card } from './Card';

interface Props {}

export interface Time {
  time: string;
  icon_id: ReactElement | null;
  temp: string;
}

export const Times = (props: Props) => {
  const times: Time[] = [
    {
      time: 'Зараз',
      icon_id: <Svg src="icons/Cloudy.svg" height='55px'/>,
      temp: '4',
    },
    {
      time: '14:00',
      icon_id: <Svg src="icons/littleSunny.svg" />,
      temp: '5',
    },
    {
      time: '15:00',
      icon_id: <Svg src="icons/snow.svg" />,
      temp: '4',
    },
    {
      time: '16:00',
      icon_id: <Svg src="icons/snow.svg" />,
      temp: '4',
    },
    {
      time: '18:00',
      icon_id: <Svg src="icons/Cloudy.svg" />,
      temp: '2',
    },
    {
      time: '19:00',
      icon_id: <Svg src="icons/cloudyAtNight.svg" />,
      temp: '1',
    },
  ];

  return (
    <div className={s.days}>
      {times.map((time: Time) => (
        <Card times={time} />
      ))}
    </div>
  );
};
