export  interface WeatherData  {
    city: string,
    country: string,
    localtime: string,
    tempC: number,
    maxTempC: number,
    minTempC: number,
    feelsLikeC: number,
    dataLoadingStatus: 'loading' | 'success' | 'error'
}