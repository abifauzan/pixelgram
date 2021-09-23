import { configureStore } from '@reduxjs/toolkit';
import profileReducer from '../redux/profileSlice'
import dataFilteredReducer from '../redux/dataFilteredSlice'
import favoritesReducer from '../redux/favoriteSlice'
import commentsReducer from '../redux/commentsSlice'
import { albumApi } from '../services/albumApi';

export const store = configureStore({
  reducer: {
    // counter: counterReducer,
    profile: profileReducer,
    dataFiltered: dataFilteredReducer,
    favorites: favoritesReducer,
    comments: commentsReducer,
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(albumApi.middleware),
});