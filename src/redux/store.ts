
import { configureStore } from '@reduxjs/toolkit';
import teachersReducer from './TeachersSlice';

const store = configureStore({
    reducer: {
        teachers: teachersReducer,
        // Add other reducers if needed
    },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>