import React from 'react';
import PriceFilter from './PriceFilter';
import CountryFilter from './CountryFilter';
import AvailabilityFilter from './AvailabilityFilter';
import FilterWrapper from './FilterWrapper';
import LanguageSearch from './LanguageSearch';

const Filters = () => {
    return (
        <div>
            <LanguageSearch />
            <FilterWrapper>
                <PriceFilter />
                <CountryFilter />
                <AvailabilityFilter />
            </FilterWrapper>
        </div>
    );
};

export default Filters;
