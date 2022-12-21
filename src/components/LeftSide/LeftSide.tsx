import React from 'react';
import s from './LeftSide.module.scss';
// @ts-ignore
import cloudImage from './cloud.png'
import {Times} from "./Times/Times";
type Props = {};

export const LeftSide = (props: Props) => {
  return (

    <div className={s.this_day}>
        {/*<img src={cloudImage} alt=""/>*/}
      <div className={s.top_block}>
        <div className={s.this_city}>м.Київ</div>
        <div className={s.this_temp}>20°C</div>
        <div className={s.this_weather}>Подекуди хмарно</div>
        <div className={s.this_max_min_temp}>B: 10° H: 3°</div>

      </div>
    </div>
  );
};
