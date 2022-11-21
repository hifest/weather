import { ReactElement } from 'react'
import { useAppSelector } from '../../hooks/hooks'
import { s } from './MoreInfo.module.scss'

export const MoreInfo = (): ReactElement => {
	const data = useAppSelector(state => state.Weather)
	console.log(data)
	return <div className={s.ok}>
		{/* 1 <UltravioletIndex /> */}
		{/* 2 <SunriseAndSunset /> */}
		{/* 3 <WindSpeed /> */}
		{/* 4 <Precipitation /> */}
		{/* 5 <Temp /> */}
		{/* 6 <Humidity /> */}
	</div>
}
