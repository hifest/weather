import { ReactElement } from 'react'
import s from '../MoreInfo.module.scss'

export const Humidity = (): ReactElement => {
	
	return <div className={s.block}>
		<div className={s.title}>title</div>
		<div className={s.info}></div>
	</div>
}
