interface tenDaysDayI {
    maxtemp_c: number,
    mintemp_c: number
}
interface tenDaysArrayI {
    date:string,
    day: tenDaysDayI
}
export  interface WeatherData  {
    city: string,
    country: string,
    localtime: string,
    tempC: number,
    maxTempC: number,
    minTempC: number,
    feelsLikeC: number,
    dataLoadingStatus: 'loading' | 'success' | 'error',
    tenDaysArray: tenDaysArrayI[]
}