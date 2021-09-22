import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import profileReducer from '../redux/profileSlice'
import { albumApi } from '../services/albumApi';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    profile: profileReducer,
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(albumApi.middleware),
});