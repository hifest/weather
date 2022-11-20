import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {apiKey,apiBaseUrl} from '../service/service';
import {WeatherData} from "../models/WeatherData";

const initialState = {
    city: '',
    country: '',
    localtime: '',
    tempC: 0,
    maxTempC: 0,
    minTempC: 0,
    feelsLikeC: 0,
    dataLoadingStatus: 'loading',
} as WeatherData

export const fetchWeatherApi = createAsyncThunk(
    'weather/data',
    async (args:{location:string,featureDays?:number,airQuality?: 'no' | 'yes'}) => {
                const {location,featureDays,airQuality} = args;
                const request = `${apiBaseUrl}${featureDays ? 'forecast' : 'current' }.json?key=${apiKey}&q=${location}&aqi=${airQuality ? airQuality : 'no' }&days=${featureDays ? featureDays : 1}`;
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
                state.dataLoadingStatus = 'loading';
            })
            .addCase(fetchWeatherApi.fulfilled, (state,action)=>{
                state.country = action.payload.location.country;
                state.city = action.payload.location.name;
                state.localtime = action.payload.location.localtime;
                state.tempC = action.payload.current.temp_c;
                state.maxTempC = action.payload.forecast.forecastday[0].day.maxtemp_c;
                state.minTempC = action.payload.forecast.forecastday[0].day.mintemp_c;
                state.feelsLikeC = action.payload.current.feelslike_c;
                state.dataLoadingStatus = 'success';
            })
            .addCase(fetchWeatherApi.rejected,state=>{
                state.dataLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
})
export default WeatherSlice.reducer