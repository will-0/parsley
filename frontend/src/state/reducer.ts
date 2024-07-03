import { combineReducers } from '@reduxjs/toolkit';
import contentSliceReducer from './content';
import generalSliceReducer from './general';
import apiSliceReducer from './api';

const rootReducer = combineReducers({
    general: generalSliceReducer,
    content: contentSliceReducer,
    api: apiSliceReducer
});

export default rootReducer