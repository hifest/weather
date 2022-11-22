import { ReactElement } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import { getWeekDay } from '../../libs/getWeekDay';
import Svg from 'react-inlinesvg';
import styles from './TenDaysInfo.module.scss';

export const TenDaysInfo = (): ReactElement => {
  const { tenDaysArray } = useAppSelector((state) => state.Weather);

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapper_info}>
        <Svg src="/icons/kalendar.svg" />
        <h3>10-денний прогноз</h3>
      </div>

      {tenDaysArray &&
        tenDaysArray.length > 0 &&
        tenDaysArray.map((item): any => {
          return (
            <div className={styles.wrapper_forecast}>
              <span className={styles.wrapper_forecast_nameDay}>
                {getWeekDay(new Date(item.date))}
              </span>
              <Svg src="icons/Cloudy.svg" />
              <span className={styles.wrapper_forecast_degBlack}>{item.day.maxtemp_c}°/</span>
              <span className={styles.wrapper_forecast_degWhite}>{item.day.mintemp_c}°</span>
            </div>
          );
        })}
    </div>
  );
};
