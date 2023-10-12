import React from 'react';
import { useSelector } from 'react-redux';
import Teacher from './Teacher';
import TeachersArray from '../data/TeachersArray'; // Import teacher array

import { RootState } from '../redux/store';

const TeachersList = () => {
    // country filter
    const countryFilter = useSelector((state: RootState) => state.filters.country);
    // days filter
    const daysFilter = useSelector((state: RootState) => state.filters.days);


    // Filter based on country
    const newTeacherArray = TeachersArray.filter(teacher => teacher.country.includes(countryFilter));

    // Filter based on days
    const newTeacherArray2 = TeachersArray.filter(teacher => teacher.days.includes(daysFilter));


    // const arrayToSend = newTeacherArray.length > 0 ? newTeacherArray : TeachersArray

    const arrayToSend = newTeacherArray2.length > 0 ? newTeacherArray2 : TeachersArray


    return (
        <div>
            {arrayToSend.map(teacher => (
                <Teacher key={teacher.id} teacher={teacher} />
            ))}
        </div>
    );
};

export default TeachersList;
