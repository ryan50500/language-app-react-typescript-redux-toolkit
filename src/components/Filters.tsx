// YourComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountry, setDays } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type

const Filters = () => {
    const country = useSelector((state: RootState) => state.filters.country);
    // const days = useSelector((state: RootState) => state.filters.days);
    const dispatch = useDispatch();


    const handleCountryChange = (newCountry: string) => {
        dispatch(setCountry(newCountry));
    };


    // Use useEffect to log changes to the state
    useEffect(() => {
        // console.log('Country state changed:', country);
        // console.log('Availability state changed:', days);
        // You can perform further actions or checks here based on state changes.
    }, [country]);


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
        </div>
    );
};

export default Filters;
