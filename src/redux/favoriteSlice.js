import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: localStorage.getItem('userFavorites')
        ? JSON.parse(localStorage.getItem('userFavorites'))
        : []
}

export const favoriteSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        addOne: (state, action) => {
            const favoritesData = [...state.data, action.payload]
            state.data = favoritesData
            localStorage.setItem('userFavorites', JSON.stringify(favoritesData))
        },
        removeOne: (state, action) => {
            const dataRemoved = state.data.filter((data) => data.id !== action.payload)
            state.data = dataRemoved
            localStorage.setItem('userFavorites', JSON.stringify(dataRemoved))
        },
        removeAll: (state, action) => {
            state.data = []
            localStorage.removeItem('userFavorites')
        }
    }
})

export const {
    addOne,
    removeOne,
    removeAll,
} = favoriteSlice.actions

export const selectfavorites = state => state.favorites.data

export default favoriteSlice.reducer