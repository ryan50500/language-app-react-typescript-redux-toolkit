import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDay, setTime } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type
import styles from './AvailabilityFilter.module.css';


const AvailabilityFilter = () => {
    const day = useSelector((state: RootState) => state.filters.day);
    const time = useSelector((state: RootState) => state.filters.time);
    const dispatch = useDispatch();

    const [showTime, setShowTime] = useState<boolean>(false)
    const [showDay, setShowDay] = useState<boolean>(false)

    const [priceOnHover, setPriceOnHover] = useState<boolean>(false)

    // set day 
    const handleDayChange = (newDay: string) => {
        dispatch(setDay(newDay));
        setShowDay(true)
    };
    // set time 
    const handleTimeChange = (newTime: string) => {
        dispatch(setTime(newTime));
        setShowTime(true)
    };

    // Show Availability 
    const showAvailability = () => {
        console.log('hello')
    };
    // Hide Availability 
    const hideAvailability = () => {
        console.log('hello')
    };


    //  remove time filter
    const removeTimeFilter = () => {
        setShowTime(false)
        dispatch(setTime(''));
    };
    // remove day filter
    const removeDayFilter = () => {
        setShowDay(false)
        dispatch(setDay(''));
    };

    return (
        <>
            {/* day filter */}
            <div style={{ position: 'absolute', left: '100px' }}>
                <label>
                    Day:
             <input type="text" value={day} onChange={(e) => handleDayChange(e.target.value)}
                    />
                </label>
            </div>
            {/* time filter */}
            <div style={{ position: 'absolute' }}>
                <label>
                    Time:
         <input type="text" value={time} onChange={(e) => handleTimeChange(e.target.value)}
                    />
                </label>
            </div>

            {/* availability filter */}
            <div className={styles.availability__wrapper}>
                <div className={styles.availability__content} onMouseEnter={showAvailability} onMouseLeave={hideAvailability}>
                    <h3>I'M AVAILABLE</h3>
                    {(!time && !day) && <p style={{ textAlign: 'center' }}>Any time</p>}
                    <div className={styles.availability__content__flex}>
                        {/* Time */}
                        <div className={styles.availability__time}>
                            <p>{time}</p>
                            {/* conditionally show time cross SVG */}
                            {showTime && <div className={styles.price__cross} onClick={removeTimeFilter}><svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={styles.price__cross__x}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg></div>}
                        </div>
                        {/* Day */}
                        <div className={styles.availability__day}>
                            <p>{day}</p>
                            {/* conditionally show day cross SVG */}
                            {showDay && <div className={styles.price__cross} onClick={removeDayFilter}><svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={styles.price__cross__x}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg></div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AvailabilityFilter


