import { ReactElement, useEffect } from 'react'
import { TenDaysInfo, MoreInfo } from '../components'
import { fetchWeatherApi } from '../slices/WeatherApiSlice'
import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchIp } from '../slices/GetIpSlice'
import styles from './Page.module.scss'
import { LeftSide } from '../components/LeftSide/LeftSide'
import { Times } from '../components/LeftSide/Times/Times'

export default function Page(): ReactElement {
	const { ip } = useAppSelector(state => state.Ip)
	const dispatch = useAppDispatch()

	useEffect(() => {
		dispatch(fetchIp())
	}, [])

	useEffect(() => {
		dispatch(
			fetchWeatherApi({
				location: ip,
				featureDays: 10,
				airQuality: 'yes',
			}),
		)
	}, [ip])
	return (
		<div className={styles.wrapper}>
			<div className={styles.left_side_wrapper}>
				<div className={styles.left_side}>
					<LeftSide />
					<Times />
				</div>
			</div>
			<TenDaysInfo />
			<MoreInfo />
		</div>
	)
}
