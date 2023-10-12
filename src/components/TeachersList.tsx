import React from 'react';
import { useSelector } from 'react-redux';
import Teacher from './Teacher';

import { RootState } from '../redux/store'; // Replace with your store structure

const TeachersList = () => {
    // Use useSelector to access the teacher data from the Redux store
    const teacherData = useSelector((state: RootState) => state.teachers.renderedTeachers);

    // Log the teacherData to see its content
    // console.log('teacherData:', teacherData);

    return (
        <>
            <div>
                {teacherData.map((teacher) => (
                    <Teacher key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </>
    );
};

export default TeachersList;
