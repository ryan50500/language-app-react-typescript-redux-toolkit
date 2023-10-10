import React from 'react';
import { useSelector } from 'react-redux';
import Teacher from './Teacher';

// import TeacherInterface from '../interfaces/TeacherInterface'; // Import interface for teacher
// import TeachersArray from '../data/TeachersArray'; // Import teacher array

const TeachersList = () => {
    // Use useSelector to access the teacher data from the Redux store
    const teacherData = useSelector((state: any) => state.teachers);

    return (
        <>
            <div>
                {teacherData.map((teacher: any) => (
                    <Teacher key={teacher.id} teacher={teacher} />
                ))}
            </div>
        </>
    );
};

export default TeachersList;
