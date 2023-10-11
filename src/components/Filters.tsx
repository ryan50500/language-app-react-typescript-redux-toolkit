// YourComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountry, setAvailability } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type

const Filters = () => {
    const country = useSelector((state: RootState) => state.filters.country);
    const availability = useSelector((state: RootState) => state.filters.availability);
    const dispatch = useDispatch();

    const handleCountryChange = (newCountry: string) => {
        dispatch(setCountry(newCountry));
    };

    const handleAvailabilityChange = (newAvailability: string) => {
        dispatch(setAvailability(newAvailability));
    };


    // Use useEffect to log changes to the state
    useEffect(() => {
        console.log('Country state changed:', country);
        console.log('Availability state changed:', availability);
        // You can perform further actions or checks here based on state changes.
    }, [country, availability]);


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
            <label>
                Availability:
        <input
                    type="text"
                    value={availability}
                    onChange={(e) => handleAvailabilityChange(e.target.value)}
                />
            </label>
            {/* Rest of your component */}
        </div>
    );
};

export default Filters;
