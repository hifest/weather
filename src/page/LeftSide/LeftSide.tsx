import React from 'react';
import s from './LeftSide.module.scss';

type Props = {};

export const LeftSide = (props: Props) => {
  return (
    <div className={s.this_day}>
      <div className={s.top_block}>
        <div className={s.this_city}>м.Київ</div>
        <div className={s.this_temp}>20°C</div>
        <div className={s.this_weather}>Подекуди хмарно</div>
        <div className={s.this_max_min_temp}>B: 10° H: 3°</div>
      </div>
      <div className={s.this_day_info}></div>
    </div>
  );
};
