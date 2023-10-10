
import { configureStore } from '@reduxjs/toolkit';
import teachersReducer from './TeachersSlice';

const store = configureStore({
    reducer: {
        teachers: teachersReducer,
        // Add other reducers if needed
    },
});

export default store;
