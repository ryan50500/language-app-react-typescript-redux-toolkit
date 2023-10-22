// YourComponent.js
import React from 'react';
import PriceFilter from './PriceFilter';
import CountryFilter from './CountryFilter';
import TimeFilter from './TimeFilter';
import DayFilter from './DayFilter';

const Filters = () => {
    return (
        <div>
            <CountryFilter />
            <PriceFilter />
            <TimeFilter />
            <DayFilter />
        </div>
    );
};

export default Filters;
