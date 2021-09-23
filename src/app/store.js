import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../redux/profileSlice'
import dataFilteredReducer from '../redux/dataFilteredSlice'
import favoritesReducer from '../redux/favoriteSlice'
import { albumApi } from '../services/albumApi';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    profile: profileReducer,
    dataFiltered: dataFilteredReducer,
    favorites: favoritesReducer,
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(albumApi.middleware),
});