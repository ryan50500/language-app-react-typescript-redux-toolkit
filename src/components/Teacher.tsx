import React from 'react'
import TeacherInterface from '../interfaces/TeacherInterface'

interface TeacherProps {
    teacher: TeacherInterface;
}

const Teacher = ({ teacher }: TeacherProps) => {
    return (
        <div>
            <h2>{teacher.name}</h2>
            <h3>{teacher.country}</h3>
        </div>
    )
}

export default Teacher
