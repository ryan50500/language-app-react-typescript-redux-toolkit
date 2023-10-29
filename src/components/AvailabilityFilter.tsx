import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDay, setTime, setShowDay, setShowTime } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type
import styles from './AvailabilityFilter.module.css';
import { AvailabilityHovered } from './AvailabilityHovered';


const AvailabilityFilter = () => {
    const day = useSelector((state: RootState) => state.filters.day);
    const time = useSelector((state: RootState) => state.filters.time);
    const showTime = useSelector((state: RootState) => state.filters.showTime);
    const showDay = useSelector((state: RootState) => state.filters.showDay);

    const dispatch = useDispatch();

    // determines whether to show the <AvailabilityHovered /> component when hovered 
    const [availabilityOnHover, setAvailabilityOnHover] = useState<boolean>(false);


    // Show Availability filter
    const showAvailability = () => {
        setAvailabilityOnHover(true)
        console.log(availabilityOnHover)
    };
    // Hide Availability filter
    const hideAvailability = () => {
        setAvailabilityOnHover(false)
    };

    //  remove time filter
    const removeTimeFilter = () => {
        dispatch(setShowTime(false));
        dispatch(setTime(''));
    };
    // remove day filter
    const removeDayFilter = () => {
        dispatch(setShowDay(false));
        dispatch(setDay(''));
    };


    return (
        <>
            {/* availability filter */}
            <div className={styles.availability__wrapper} onMouseEnter={showAvailability} onMouseLeave={hideAvailability}>
                <div className={styles.availability__content}>
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
                {availabilityOnHover && (
                    <AvailabilityHovered />
                )}
            </div>
        </>

    )
}

export default AvailabilityFilter

