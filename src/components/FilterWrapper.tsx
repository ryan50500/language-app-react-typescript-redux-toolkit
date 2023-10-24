import React, { ReactNode } from 'react';

interface FilterWrapperProps {
    children: ReactNode;
}

const FilterWrapper: React.FC<FilterWrapperProps> = ({ children }) => {
    return (
        <div style={{ display: 'flex' }}>
            {children}
        </div>
    );
};

export default FilterWrapper;
