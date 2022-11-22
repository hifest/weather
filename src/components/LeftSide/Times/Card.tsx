import React from 'react';
import s from './Times.module.scss';
import { Time } from './Times';
import Svg from 'react-inlinesvg';

interface Props {
  times: Time;
}

export const Card = ({ times }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.time}>{times.time}</div>
      <div className={s.svg_weather}>{times.icon_id}</div>
      <div className={s.temp}>{times.temp}°</div>
    </div>
  );
};
