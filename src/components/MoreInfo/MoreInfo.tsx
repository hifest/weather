import { ReactElement } from 'react'
import { useAppSelector } from '../../hooks/hooks'
import s from './MoreInfo.module.scss'
import {
	UltravioletIndex,
	SunriseAndSunset,
	WindSpeed,
	Precipitation,
	Temp,
	Humidity,
} from './MoreInfoBlocks'

export const MoreInfo = (): ReactElement => {
	const data = useAppSelector(state => state.Weather)
	console.log(data)
	return (
		<div className={s.wrapper}>
			<UltravioletIndex />
			<SunriseAndSunset />
			<WindSpeed />
			<Precipitation />
			<Temp />
			<Humidity />
		</div>
	)
}
