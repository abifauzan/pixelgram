import { createSlice } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

const initialState = {
    data: localStorage.getItem('userComments')
        ? JSON.parse(localStorage.getItem('userComments'))
        : []
}

export const commentsSlice = createSlice({
    name: 'comments',
    initialState,
    reducers: {
        addOne: (state, action) => {
            const payloads = {
                id: uniqid(),
                ...action.payload
            }
            const commentsData = [...state.data, payloads]
            state.data = commentsData
            localStorage.setItem('userComments', JSON.stringify(commentsData))
        },
        resetComments: (state, action) => {
            state.data = []
            localStorage.removeItem('userComments')
        },
    }
})

export const {
    addOne,
    resetComments,
} = commentsSlice.actions

export const selectComments = state => state.comments.data

export default commentsSlice.reducer