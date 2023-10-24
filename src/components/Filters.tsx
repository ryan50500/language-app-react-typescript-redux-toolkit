// YourComponent.js
import React from 'react';
import PriceFilter from './PriceFilter';
import CountryFilter from './CountryFilter';
import TimeFilter from './TimeFilter';
import DayFilter from './DayFilter';
import FilterWrapper from './FilterWrapper';

const Filters = () => {
    return (
        <div>
            <CountryFilter />
            <FilterWrapper>
                <PriceFilter />
                <TimeFilter />
                <DayFilter />
            </FilterWrapper>
        </div>
    );
};

export default Filters;
