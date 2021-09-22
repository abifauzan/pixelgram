import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: {}
}

export const dataFilteredSlice = createSlice({
    name: 'dataFiltered',
    initialState,
    reducers: {
        searchData: (state, action) => {
            state.data = action.payload
        },
        removeData: (state, action) => {
            state.data = {}
        }
    }
})

export const {
    searchData,
    removeData,
} = dataFilteredSlice.actions

export const selectData = state => state.dataFiltered.data

export default dataFilteredSlice.reducer