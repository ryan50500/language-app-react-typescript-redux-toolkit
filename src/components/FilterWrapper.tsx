import React, { ReactNode } from 'react';
import styles from './FilterWrapper.module.css'

interface FilterWrapperProps {
    children: ReactNode;
}

const FilterWrapper: React.FC<FilterWrapperProps> = ({ children }) => {
    return (
        <div className={styles.filter__wrapper}>
            {children}
        </div>
    );
};

export default FilterWrapper;
