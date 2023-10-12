// YourComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountry, setDays } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type

const Filters = () => {
    const country = useSelector((state: RootState) => state.filters.country);
    const days = useSelector((state: RootState) => state.filters.days);
    const dispatch = useDispatch();


    // set teacher country
    const handleCountryChange = (newCountry: string) => {
        dispatch(setCountry(newCountry));
    };

    // set days available 
    const handleDaysChange = (newDays: string) => {
        dispatch(setDays(newDays));
    };

    // Use useEffect to log changes to the state
    useEffect(() => {
        // console.log('Country state changed:', country);
        // console.log('Availability state changed:', days);
        // You can perform further actions or checks here based on state changes.
    }, [country, days]);


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
                days:
        <input
                    type="text"
                    value={days}
                    onChange={(e) => handleDaysChange(e.target.value)}
                />
            </label>
        </div>
    );
};

export default Filters;
