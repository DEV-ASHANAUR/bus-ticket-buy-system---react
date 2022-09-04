import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    data:null,
    loading: false,
    error: false
}

export const bussSlice = createSlice({
    name: 'buss',
    initialState,
    reducers: {
        startFetch: (state) => {
            state.loading = true;
            state.error = false;
        },
        successFetch: (state,action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = false;
        },
        failFetch: (state) => {
            state.data = null;
            state.loading = false;
            state.error = true;
        },
        reset_Fetch: (state, action) => {
            return initialState;
        }
    },
})

// Action creators are generated for each case reducer function
export const { startFetch, successFetch,failFetch,reset_Fetch} = bussSlice.actions

export default bussSlice.reducer