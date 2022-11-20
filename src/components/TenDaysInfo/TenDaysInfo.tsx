import { ReactElement } from 'react';
import { useAppSelector } from '../../hooks/hooks';
import s from '../../sass/style.scss';

export const TenDaysInfo = (): ReactElement => {
  const data = useAppSelector((state) => state.Weather);
  console.log(data);
  return (
    <div className={s.body}>
      <div></div>
    </div>
  );
};
