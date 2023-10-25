import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setMaxPrice } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type
import styles from './PriceFilter.module.css';

const PriceFilter = () => {
    const maxPrice = useSelector((state: RootState) => state.filters.maxPrice);
    const dispatch = useDispatch();

    const [showPrice, setShowPrice] = useState<boolean>(false)
    const [priceOnHover, setPriceOnHover] = useState<boolean>(false)

    // set max price filter
    const handlePriceChange = (newPrice: number) => {
        setShowPrice(true)
        dispatch(setMaxPrice(Number(newPrice)));
        console.log(maxPrice)

    };
    // remove max price filter
    const removePriceFilter = () => {
        setShowPrice(false)
        dispatch(setMaxPrice(Number(100)));
        console.log(maxPrice)
    };
    // show price slider when user hovers on filter
    const showPriceSlider = () => {
        console.log(priceOnHover)
        setPriceOnHover(true)
        console.log(priceOnHover)
    };
    // hide price slider when use hovers away
    const hidePriceSlider = () => {
        console.log(priceOnHover)
        setPriceOnHover(false)
        console.log(priceOnHover)
    };

    return (
        <>
            <div className={styles.price__wrapper}>
                {/* price filter */}
                <div className={styles.price__content} onMouseEnter={showPriceSlider} onMouseLeave={hidePriceSlider}>
                    <h3>MAX LESSON PRICE</h3>
                    <div className={styles.price__content__flex}>
                        <p>£{maxPrice}</p>
                        {/* conditionally show price cross SVG */}
                        {showPrice && <div className={styles.price__cross} onClick={removePriceFilter}><svg height="9" viewBox="0 0 12 12" width="9" xmlns="http://www.w3.org/2000/svg" className={styles.price__cross__x}><path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path></svg></div>}
                    </div>
                </div>
                {/* show price slider if user hovers over filter */}
                {priceOnHover && (
                    <div className={styles.price__input__wrapper} onMouseEnter={showPriceSlider} onMouseLeave={hidePriceSlider}>
                        <input type="range" className={styles.price__input} value={maxPrice} onChange={(e) => handlePriceChange(Number(e.target.value))} />
                            £{maxPrice}
                    </div>)}
            </div>
        </>
    )
}

export default PriceFilter

