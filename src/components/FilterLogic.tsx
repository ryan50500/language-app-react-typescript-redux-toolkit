import React from "react";
import { useSelector } from "react-redux";
import Teacher from "./Teacher";
import ViewMoreTeachers from "./ViewMoreTeachers";
import NoResultsFound from "./NoResultsFound";
import OriginalArray from "../data/OriginalArray"; // Import teacher array

import { RootState } from "../redux/store";

const FilterLogic = () => {
  // filters
  const countryFilter = useSelector(
    (state: RootState) => state.filters.country
  );
  const timeFilter = useSelector((state: RootState) => state.filters.time);
  const maxPriceFilter = useSelector(
    (state: RootState) => state.filters.maxPrice
  );
  const dayFilter = useSelector((state: RootState) => state.filters.day);
  const languageFilter = useSelector(
    (state: RootState) => state.filters.language
  );

  // number of teachers to display (to load more teachers)
  const teachersToShow = useSelector(
    (state: RootState) => state.pagination.teachersToShow
  );

  // remove whitespace from days property in the orginal teacher array
  OriginalArray.forEach((teacher) => {
    teacher.days = teacher.days.map((day) => day.trim());
  });

  // apply filters to the original array
  const filteredArray = OriginalArray.filter(
    (teacher) =>
      teacher.country.toLowerCase().indexOf(countryFilter.toLowerCase()) !==
        -1 &&
      teacher.language.toLowerCase().indexOf(languageFilter.toLowerCase()) !==
        -1 &&
      teacher.time.toLowerCase().indexOf(timeFilter.toLowerCase()) !== -1 &&
      teacher.price < maxPriceFilter &&
      (dayFilter === "" || teacher.days.includes(dayFilter))
  );

  console.log(filteredArray.length);
  console.log(teachersToShow);

  return (
    <>
      {/* if we have at least one match from the filter, show the results, otherwise show 'NoResultsFound' */}
      {filteredArray.length > 0 ? (
        <>
          <div>
            {filteredArray.slice(0, teachersToShow).map((teacher) => (
              <Teacher key={teacher.id} teacher={teacher} />
            ))}
          </div>
          {/* if teachersToShow does NOT exceed the filteredArray length, show <ViewMoreTeachers /> component */}
          {filteredArray.length > teachersToShow && <ViewMoreTeachers />}
        </>
      ) : (
        <NoResultsFound />
      )}
    </>
  );
};

export default FilterLogic;

// {filteredArray.length > teachersToShow && (
//   <ViewMoreTeachers/>
// )}
