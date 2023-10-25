import React from 'react'
import styles from './LanguageSearch.module.css'

const LanguageSearch = () => {
    return (
        <div className={styles.language__search}>
            Search for langauge... need an input
            <input className={styles.language__search__input} type="text" placeholder="Search Country" />
        </div>
    )
}

export default LanguageSearch

