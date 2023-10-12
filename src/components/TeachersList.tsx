import React from 'react';
import { useSelector } from 'react-redux';
import Teacher from './Teacher';
import TeachersArray from '../data/TeachersArray'; // Import teacher array

import { RootState } from '../redux/store';

const TeachersList = () => {
    const countryFilter = useSelector((state: RootState) => state.filters.country);

    // Filter the teacher array based on the filter criteria
    const newTeacherArray = TeachersArray.filter(teacher => teacher.country.includes(countryFilter));

    const arrayToSend = newTeacherArray.length > 0 ? newTeacherArray : TeachersArray

    return (
        <div>
            {arrayToSend.map(teacher => (
                <Teacher key={teacher.id} teacher={teacher} />
            ))}
        </div>
    );
};

export default TeachersList;
