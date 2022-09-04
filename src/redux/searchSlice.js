import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    starting_point: null,
    ending_point:null,
    date:null,
    return_date:null,
    loading: false,
    error: null
}

export const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        newSearch: (state, action) => {
            state.starting_point = action.payload.staring_point;
            state.ending_point = action.payload.ending_point;
            state.date = action.payload.date;
            state.return_date = action.payload.return_date;
        },
        reset_search: (state, action) => {
            return initialState;
        }
    },
})

// Action creators are generated for each case reducer function
export const { newSearch, reset_search} = searchSlice.actions

export default searchSlice.reducer