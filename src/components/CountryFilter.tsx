import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountry } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type
import styles from './CountryFilter.module.css';

const CountryFilter = () => {
    const country = useSelector((state: RootState) => state.filters.country);
    const dispatch = useDispatch();

    // set max price 
    const handleCountryChange = (newCountry: string) => {
        dispatch(setCountry(newCountry));
    };
    return (
        <div>
            <label>
                Country:
             <input type="text" value={country} onChange={(e) => handleCountryChange(e.target.value)}
                />
            </label>
        </div>
    )
}

export default CountryFilter
