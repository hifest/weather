import { configureStore } from '@reduxjs/toolkit'
import WeatherSliceReducer from "../slices/WeatherApiSlice";

const store = configureStore({
    reducer: {
        Weather: WeatherSliceReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store
