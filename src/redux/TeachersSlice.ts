import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TeacherInterface from '../interfaces/TeacherInterface'; // Import interface for teacher
import TeachersArray from '../data/TeachersArray'; // Import teacher array

// Create a slice
const TeachersSlice = createSlice({
    name: 'teachers',
    initialState: TeachersArray, // Initialize teacher data from array
    reducers: {
        setTeachers: (state, action: PayloadAction<TeacherInterface[]>) => {
            return action.payload;
        },
    },
});

// Export actions and reducer
export const { setTeachers } = TeachersSlice.actions;
export default TeachersSlice.reducer;
