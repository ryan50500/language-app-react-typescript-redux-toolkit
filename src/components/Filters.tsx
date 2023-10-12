// YourComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountry, setTime } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type

const Filters = () => {
    const country = useSelector((state: RootState) => state.filters.country);
    const time = useSelector((state: RootState) => state.filters.time);
    const dispatch = useDispatch();


    // set teacher country
    const handleCountryChange = (newCountry: string) => {
        dispatch(setCountry(newCountry));
    };

    // set time available 
    const handleTimeChange = (newTime: string) => {
        dispatch(setTime(newTime));
    };

    // Use useEffect to log changes to the state
    useEffect(() => {
        // console.log('Country state changed:', country);
        // console.log('Availability state changed:', days);
        // You can perform further actions or checks here based on state changes.
    }, [country, time]);


    return (
        <div>
            <label>
                Country:
        <input
                    type="text"
                    value={country}
                    onChange={(e) => handleCountryChange(e.target.value)}
                />
            </label>
            {/* Rest of your component */}
            <label>
                time:
        <input
                    type="text"
                    value={time}
                    onChange={(e) => handleTimeChange(e.target.value)}
                />
            </label>
        </div>
    );
};

export default Filters;
