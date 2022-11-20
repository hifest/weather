interface tenDaysArrayI {
    date:string,
    day: {
        maxtemp_c: number,
        mintemp_c: number,
        condition: {
            code: number,
            icon: string
        }
    }
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