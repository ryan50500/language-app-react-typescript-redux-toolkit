
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    maxPrice: 100,
    country: '',
    day: '',
    time: '',
};

// let newState = state.renderedTeachers.filter((teacher) => teacher.country.includes(country));


const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setMaxPrice: (state, action) => {
            state.maxPrice = action.payload;
        },
        setCountry: (state, action) => {
            state.country = action.payload;
        },
        setDay: (state, action) => {
            state.day = action.payload;
        },
        setTime: (state, action) => {
            state.time = action.payload;
        },
    },
});

export const { setMaxPrice, setCountry, setDay, setTime } = filterSlice.actions;
export default filterSlice.reducer;
