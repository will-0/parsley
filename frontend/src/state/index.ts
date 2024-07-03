
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer';
import { apiSlice } from './api';
import { useDispatch } from 'react-redux';

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
});

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;
