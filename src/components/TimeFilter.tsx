import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTime } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type
import styles from './TimeFilter.module.css';

const TimeFilter = () => {
    const time = useSelector((state: RootState) => state.filters.time);
    const dispatch = useDispatch();

    // set time 
    const handleTimeChange = (newTime: string) => {
        dispatch(setTime(newTime));
    };

    return (
        <div>
            <label>
                Time:
             <input type="text" value={time} onChange={(e) => handleTimeChange(e.target.value)}
                />
            </label>
        </div>
    )
}

export default TimeFilter
