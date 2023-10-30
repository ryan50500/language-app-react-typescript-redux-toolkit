import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCountry } from "../redux/FilterSlice";
import { RootState } from "../redux/store"; // Import the RootState type
import styles from "./CountryFilter.module.css";

const CountryFilter = () => {
  const country = useSelector((state: RootState) => state.filters.country);
  const dispatch = useDispatch();

  const [showCountry, setShowCountry] = useState<boolean>(false);

  // set country
  const handleCountryChange = (newCountry: string) => {
    setShowCountry(true);
    dispatch(setCountry(newCountry));
  };

  // remove country filter
  const removeCountryFilter = () => {
    setShowCountry(false);
    dispatch(setCountry(""));
  };

  return (
    <>
      <div className={styles.country__wrapper}>
        <div className={styles.country__content}>
          <h3>COUNTRY OF BIRTH</h3>
          <div className={styles.country__input}>
            <input
              type="text"
              placeholder="Search Country..."
              value={country}
              onChange={(e) => handleCountryChange(e.target.value)}
              style={{ width: country ? 40 + country.length + "px" : "auto" }}
            />
            {/* conditionally show country cross SVG */}
            {showCountry && country.length > 0 && (
              <div
                className={styles.price__cross}
                onClick={removeCountryFilter}
              >
                <svg
                  height="9"
                  viewBox="0 0 12 12"
                  width="9"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.price__cross__x}
                >
                  <path d="M6 4.586L10.293.293l1.414 1.414L7.414 6l4.293 4.293-1.414 1.414L6 7.414l-4.293 4.293-1.414-1.414L4.586 6 .293 1.707 1.707.293z"></path>
                </svg>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CountryFilter;
