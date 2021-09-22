import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: localStorage.getItem('userProfile')
        ? JSON.parse(localStorage.getItem('userProfile'))
        : {}
}

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        loginUser: (state, action) => {
            state.data = action.payload
            localStorage.setItem('userProfile', JSON.stringify(action.payload))
        },
        logoutUser: (state, action) => {
            state.data = {}
            localStorage.removeItem('userProfile')
        }
    }
})

export const {
    loginUser,
    logoutUser,
} = profileSlice.actions

export const selectProfile = state => state.profile.data

export default profileSlice.reducer