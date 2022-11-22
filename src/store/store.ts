import { configureStore } from '@reduxjs/toolkit'
import WeatherSliceReducer from "../slices/WeatherApiSlice";
import GetIpSliceReducer from "../slices/GetIpSlice";

const store = configureStore({
    reducer: {
        Weather: WeatherSliceReducer,
        Ip: GetIpSliceReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
