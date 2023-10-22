import React from 'react';
import { useSelector } from 'react-redux';
import Teacher from './Teacher';
import NoResultsFound from './NoResultsFound';
import OriginalArray from '../data/OriginalArray'; // Import teacher array

import { RootState } from '../redux/store';

const FilterLogic = () => {
    // filters
    const countryFilter = useSelector((state: RootState) => state.filters.country);
    const timeFilter = useSelector((state: RootState) => state.filters.time);
    const maxPriceFilter = useSelector((state: RootState) => state.filters.maxPrice);
    const dayFilter = useSelector((state: RootState) => state.filters.day);

    // apply filters to the original array
    const filteredArray = OriginalArray.filter(teacher =>
        teacher.country.toLowerCase().indexOf(countryFilter.toLowerCase()) !== -1
        && teacher.time.toLowerCase().indexOf(timeFilter.toLowerCase()) !== -1
        && teacher.price < maxPriceFilter
        // we need to type the day exactly with a Capital (which is is fine since we are clicking not typing)
        && (dayFilter === '' || teacher.days.includes(dayFilter))
    );

    // use the filtered array (if we have it) or the original array
    // const TeachersArray = filteredArray

    console.log(filteredArray.length);

    return (
        <>
            {/* if we have at least one match from the filter, show the results, otherwise show 'NoResultsFound' */}
            {filteredArray.length > 0 ? (
                <div>
                    {filteredArray.map(teacher => (
                        <Teacher key={teacher.id} teacher={teacher} />
                    ))}
                </div>
            ) : (
                    <NoResultsFound />
                )}
        </>
    );
};

export default FilterLogic;
