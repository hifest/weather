import React from 'react';
import { Time } from './Time';
import s from './Card.module.scss';

type Props = {
  times?: Time;
};

export const Card = ({ times }: Props) => {
  return (
    <div className={s.card}>
      <div className={s.times}>{times.time}</div>
      <div className={s.img}>id={times.icon_id}</div>
      <div className={s.temp_day}>{times.temp}</div>
    </div>
  );
};
