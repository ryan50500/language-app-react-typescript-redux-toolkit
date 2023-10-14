// YourComponent.js
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMaxPrice, setCountry, setDay, setTime } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type

const Filters = () => {
    const country = useSelector((state: RootState) => state.filters.country);
    const time = useSelector((state: RootState) => state.filters.time);
    const maxPrice = useSelector((state: RootState) => state.filters.maxPrice);
    const day = useSelector((state: RootState) => state.filters.day);
    const dispatch = useDispatch();

    // set max price 
    const handlePriceChange = (newPrice: string) => {
        dispatch(setMaxPrice(newPrice));
    };
    // set country
    const handleCountryChange = (newCountry: string) => {
        dispatch(setCountry(newCountry));
    };
    // set time 
    const handleTimeChange = (newTime: string) => {
        dispatch(setTime(newTime));
    };
    // set day
    const handleDayChange = (newDay: string) => {
        dispatch(setDay(newDay));
    };

    // put these filters below into their own component
    return (
        <div>
            <label>
                Max Price:
        <input
                    type="text"
                    value={maxPrice}
                    onChange={(e) => handlePriceChange(e.target.value)}
                />
            </label>
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
                Time:
        <input
                    type="text"
                    value={time}
                    onChange={(e) => handleTimeChange(e.target.value)}
                />
            </label>
            <label>
                Days:
        <input
                    type="text"
                    value={day}
                    onChange={(e) => handleDayChange(e.target.value)}
                />
            </label>
        </div>
    );
};

export default Filters;
