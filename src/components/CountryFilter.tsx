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
        <>
            <div className={styles.search__bar__wrap}>
                <h1 className={styles.search__bar__title}>Which language do you want to learn?</h1>
                <input className={styles.search__bar__input} type="text" placeholder="Search Language" value={country} onChange={(e) => handleCountryChange(e.target.value)}
                />
            </div>
        </>
    )
}

export default CountryFilter
