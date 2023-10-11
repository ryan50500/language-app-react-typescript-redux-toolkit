import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import TeachersArray from '../data/TeachersArray'; // Import teacher array

// Create a slice
const TeachersSlice = createSlice({
    name: 'teachers',
    initialState: TeachersArray, // Initialize teacher data from array
    reducers: {
        // You can remove the setTeachers action if it's not used.
    },
});

export default TeachersSlice.reducer;


