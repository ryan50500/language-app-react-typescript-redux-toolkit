import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setDay, setTime, setShowDay, setShowTime } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type
import styles from './AvailabilityHovered.module.css';

export const AvailabilityHovered = () => {
    const day = useSelector((state: RootState) => state.filters.day);
    const time = useSelector((state: RootState) => state.filters.time);

    // const showDay = useSelector((state: RootState) => state.filters.showDay);
    // const showTime = useSelector((state: RootState) => state.filters.showTime);

    const dispatch = useDispatch();

    // const [showTime, setShowTime] = useState<boolean>(false)
    // const [showDay, setShowDay] = useState<boolean>(false)

    // set day 
    const handleDayChange = (newDay: string) => {
        dispatch(setDay(newDay));
        dispatch(setShowDay(true));
    };
    // set time 
    const handleTimeChange = (newTime: string) => {
        dispatch(setTime(newTime));
        dispatch(setShowTime(true));
    };



    return (
        <>
            {/* <div style={{ position: 'absolute', left: '100px' }}>
                <label>
                    Day:<input type="text" value={day} onChange={(e) => handleDayChange(e.target.value)} />
                </label>
            </div> */}

            {/* Time filter */}
            {/* <div style={{ position: 'absolute' }}>
                <label>
                    Time:<input type="text" value={time} onChange={(e) => handleTimeChange(e.target.value)} />
                </label>
            </div> */}

            <div className={styles.hover__wrapper}>
                <div className={styles.hover__container}>
                    <div style={{ width: '167px', display: 'none' }}>
                        <input type="text" id="teacherAvailability" name="teacherAvailability" className={styles.hover__each__slot} />
                    </div>
                    <div>
                        <h3 className={styles.hover__time}>Time of the day, in your time zone</h3>
                        <div className={styles.hover__slots}>
                            <div className={styles.hover__each__slot} onClick={() => handleTimeChange('morning')} >
                                {/* Slot 1 */} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}> <path d="M17 18a5 5 0 0 0-10 0"></path> <line x1="12" y1="2" x2="12" y2="9"></line> <line x1="4.22" y1="10.22" x2="5.64" y2="11.64"></line> <line x1="1" y1="18" x2="3" y2="18"></line> <line x1="21" y1="18" x2="23" y2="18"></line> <line x1="18.36" y1="11.64" x2="19.78" y2="10.22"></line> <line x1="23" y1="22" x2="1" y2="22"></line> <polyline points="8 6 12 2 16 6"></polyline> </svg>
                                <span style={{ margin: '5px' }}>6-12</span>
                                Morning
                            </div>
                            <div className={styles.hover__each__slot} onClick={() => handleTimeChange('afternoon')}>
                                {/* Slot 2 */} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}> <circle cx="12" cy="12" r="5"></circle> <line x1="12" y1="1" x2="12" y2="3"></line> <line x1="12" y1="21" x2="12" y2="23"></line> <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line> <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line> <line x1="1" y1="12" x2="3" y2="12"></line> <line x1="21" y1="12" x2="23" y2="12"></line> <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line> <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line> </svg>
                                <span style={{ margin: '5px' }}>12-5</span>
                                Afternoon
                            </div>
                            <div className={styles.hover__each__slot} onClick={() => handleTimeChange('evening')}>
                                {/* Slot 3 */} <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.svgIcon}> <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path> </svg>
                                <span style={{ margin: '5px' }}>5-10</span>
                                Evening
                            </div>
                        </div>
                    </div>
                    <h3 className={styles.hover__day}>Days of the week</h3>
                    <div className={styles.hover__days}>
                        <div style={{ color: day === 'Mon' ? '#3bb3bd' : "" }} onClick={() => handleDayChange('Mon')}>Mon</div>
                        <div style={{ color: day === 'Tue' ? '#3bb3bd' : "" }} onClick={() => handleDayChange('Tue')}>Tue</div>
                        <div style={{ color: day === 'Wed' ? '#3bb3bd' : "" }} onClick={() => handleDayChange('Wed')}>Wed</div>
                        <div style={{ color: day === 'Thu' ? '#3bb3bd' : "" }} onClick={() => handleDayChange('Thu')}>Thu</div>
                        <div style={{ color: day === 'Fri' ? '#3bb3bd' : "" }} onClick={() => handleDayChange('Fri')}>Fri</div>
                        <div style={{ color: day === 'Sat' ? '#3bb3bd' : "" }} onClick={() => handleDayChange('Sat')}>Sat</div>
                        <div style={{ color: day === 'Sun' ? '#3bb3bd' : "" }} onClick={() => handleDayChange('Sun')}>Sun</div>
                    </div>
                </div>
            </div>
        </>
    );
};
