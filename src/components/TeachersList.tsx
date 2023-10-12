import React from 'react';
import { useSelector } from 'react-redux';
import Teacher from './Teacher';
import TeachersArray from '../data/TeachersArray'; // Import teacher array

import { RootState } from '../redux/store';

const TeachersList = () => {
    // country filter
    const countryFilter = useSelector((state: RootState) => state.filters.country);
    // time filter
    const timeFilter = useSelector((state: RootState) => state.filters.time);

    // Combine both filters into a single filter condition
    const newTeacherArray = TeachersArray.filter(teacher => {
        return (
            teacher.country.toLowerCase().indexOf(countryFilter.toLowerCase()) !== -1
            && teacher.time.toLowerCase().indexOf(timeFilter.toLowerCase()) !== -1
        );
    });


    // Determine whether to use the filtered array or the original array
    const arrayToSend = newTeacherArray.length > 0 ? newTeacherArray : TeachersArray;

    return (
        <div>
            {arrayToSend.map(teacher => (
                <Teacher key={teacher.id} teacher={teacher} />
            ))}
        </div>
    );
};

export default TeachersList;
