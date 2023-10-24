import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCountry } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type
import styles from './CountryFilter.module.css';

const CountryFilter = () => {
    const country = useSelector((state: RootState) => state.filters.country);
    const dispatch = useDispatch();

    // set country 
    const handleCountryChange = (newCountry: string) => {
        dispatch(setCountry(newCountry));
    };
    return (
        <>
            <h2>country</h2>
            <input type="text" placeholder="Search Country" value={country} onChange={(e) => handleCountryChange(e.target.value)} />
        </>
    )
}

export default CountryFilter
