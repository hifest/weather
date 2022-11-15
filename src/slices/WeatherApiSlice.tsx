import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import apiKey from '../service/service';

const initialState = {
    sity: '',
    country: '',
    localtime: '',
    tempC: 0,
    maxTempC: 0,
    minTempC: 0,
    dataLoadingStatus: ''
}
export const fetchWeatherApi = createAsyncThunk(
    'weather/data',
    async (args:{location:string,featureDays?:number,airQuality?: 'no' | 'yes'}) => {
                const {location,featureDays,airQuality} = args;
                const request = `https://api.weatherapi.com/v1/${featureDays ? 'forecast' : 'current' }.json?key=${apiKey}&q=${location}&aqi=${airQuality ? airQuality : 'no' }&days=${featureDays ? featureDays : 1}`;
                const response = await axios.get(request);
                const data = await response.data;
                return data;
        }
)

export const WeatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(fetchWeatherApi.pending,state =>{
                state.dataLoadingStatus = 'loading'
            })
            .addCase(fetchWeatherApi.fulfilled, (state,action)=>{
                state.dataLoadingStatus = 'success'
                console.log(action.payload)//потім добавалю типи і занесу в initialState зараз просто вивожу
            })
            .addCase(fetchWeatherApi.rejected,state=>{
                state.dataLoadingStatus = 'error'
            })
            .addDefaultCase(() => {})
    }
})
export default WeatherSlice.reducer