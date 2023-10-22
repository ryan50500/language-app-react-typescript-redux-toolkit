import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDay } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type
import styles from './DayFilter.module.css';

const DayFilter = () => {
    const day = useSelector((state: RootState) => state.filters.day);
    const dispatch = useDispatch();

    // set day 
    const handleDayChange = (newDay: string) => {
        dispatch(setDay(newDay));
    };
    return (
        <div>
            <label>
                Day:
             <input type="text" value={day} onChange={(e) => handleDayChange(e.target.value)}
                />
            </label>
        </div>
    )
}

export default DayFilter
