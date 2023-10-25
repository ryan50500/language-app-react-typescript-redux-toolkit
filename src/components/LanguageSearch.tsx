
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLanguage } from '../redux/FilterSlice';
import { RootState } from '../redux/store'; // Import the RootState type
import styles from './LanguageSearch.module.css'

const LanguageSearch = () => {
    const language = useSelector((state: RootState) => state.filters.language);
    const dispatch = useDispatch();

    // set language 
    const handleLanguageChange = (newLanguage: string) => {
        dispatch(setLanguage(newLanguage));
    };

    return (
        <div className={styles.language__search}>
            <h1>Which language do you want to learn?</h1>
            <input className={styles.language__search__input} type="text" placeholder="Search Language" value={language} onChange={(e) => handleLanguageChange(e.target.value)} />
        </div>
    )
}

export default LanguageSearch






// const CountryFilter = () => {
//     const country = useSelector((state: RootState) => state.filters.country);
//     const dispatch = useDispatch();

//     // set country 
//     const handleCountryChange = (newCountry: string) => {
//         dispatch(setCountry(newCountry));
//     };
//     return (
//         <>

//             <div className={styles.country__content}>
//                 <h3>COUNTRY OF BIRTH</h3>
//                 <input type="text" placeholder="Search Country" value={country} onChange={(e) => handleCountryChange(e.target.value)} />
//             </div>
//         </>
//     )
// }

// export default CountryFilter



