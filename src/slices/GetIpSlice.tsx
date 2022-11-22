import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    ip: '',
    dataLoadingStatus: 'loading',
}

export const fetchIp = createAsyncThunk(
    'ip/data',
    async () => {
        const request = `https://api.db-ip.com/v2/free/self`;
        const response = await axios.get(request);
        const data = await response.data;
        return data;
    }
)

export const GetIpSlice = createSlice({
    name: 'Ip',
    initialState,
    reducers:{},
    extraReducers: builder => {
        builder
            .addCase(fetchIp.pending,state =>{
                state.dataLoadingStatus = 'loading';
            })
            .addCase(fetchIp.fulfilled, (state,action)=>{
                state.ip = action.payload.ipAddress
                state.dataLoadingStatus = 'success';
            })
            .addCase(fetchIp.rejected,state=>{
                state.dataLoadingStatus = 'error';
            })
            .addDefaultCase(() => {})
    }
})
export default GetIpSlice.reducer