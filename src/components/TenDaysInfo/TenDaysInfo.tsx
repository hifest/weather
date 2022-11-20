import {ReactElement} from 'react';
import {useAppSelector} from "../../hooks/hooks";

export const TenDaysInfo = ():ReactElement =>{
    const data = useAppSelector(state => state.Weather)
    console.log(data)
    return (
        <div>піська</div>
    )

}