import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMaxPrice } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type
import styles from './PriceFilter.module.css';

const PriceFilter = () => {
    const maxPrice = useSelector((state: RootState) => state.filters.maxPrice);
    const dispatch = useDispatch();

    // set max price 
    const handlePriceChange = (newPrice: number) => {
        dispatch(setMaxPrice(Number(newPrice)));
    };
    return (
        <div>
            <label>
                Max Price:
             <input type="range" className={styles.price__input} value={maxPrice} onChange={(e) => handlePriceChange(Number(e.target.value))}
                />
            </label>
        </div>
    )
}

export default PriceFilter
