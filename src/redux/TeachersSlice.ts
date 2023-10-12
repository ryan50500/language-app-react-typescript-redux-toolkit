
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TeachersArray from '../data/TeachersArray'; // Import teacher array

// Create a slice
const TeachersSlice = createSlice({
    name: 'teachers',
    initialState: {
        renderedTeachers: TeachersArray
    },
    reducers: {
        filterTeachers: (state, action) => {
            const { country } = action.payload;

            // Filter the TeachersArray based on country
            const newState = TeachersArray.filter((teacher) => teacher.country.includes(country))

            state.renderedTeachers = newState

            // console.log(newState)

            // return state = newState
        },
    },
});

export const { filterTeachers } = TeachersSlice.actions;
export default TeachersSlice.reducer;


