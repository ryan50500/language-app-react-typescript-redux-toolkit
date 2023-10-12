
import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './FilterSlice';


const store = configureStore({
    reducer: {
        filters: filtersReducer
    },
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>