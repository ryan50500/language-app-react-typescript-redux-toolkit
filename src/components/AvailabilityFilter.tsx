import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDay, setTime } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type
import styles from './AvailabilityFilter.module.css';


const AvailabilityFilter = () => {
    const day = useSelector((state: RootState) => state.filters.day);
    const time = useSelector((state: RootState) => state.filters.time);
    const dispatch = useDispatch();

    // set day 
    const handleDayChange = (newDay: string) => {
        dispatch(setDay(newDay));
    };

    // set time 
    const handleTimeChange = (newTime: string) => {
        dispatch(setTime(newTime));
    };

    return (
        <>
            {/* day filter */}
            <div>
                <label>
                    Day:
             <input type="text" value={day} onChange={(e) => handleDayChange(e.target.value)}
                    />
                </label>
            </div>
            {/* time filter */}
            <div>
                <label>
                    Time:
         <input type="text" value={time} onChange={(e) => handleTimeChange(e.target.value)}
                    />
                </label>
            </div>
        </>
    )
}

export default AvailabilityFilter
