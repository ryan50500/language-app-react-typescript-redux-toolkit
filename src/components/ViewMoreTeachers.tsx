import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setTeachersToShow } from "../redux/PaginationSlice";
import styles from "./ViewMoreTeachers.module.css";
import { RootState } from "../redux/store";

const ViewMoreTeachers = () => {
  const dispatch = useDispatch();
  const teachersToShow = useSelector(
    (state: RootState) => state.pagination.teachersToShow
  );
  const handleViewMoreTeachers = () => {
    dispatch(setTeachersToShow(teachersToShow + 5));
  };
  return (
    <button className={styles.view__more} onClick={handleViewMoreTeachers}>
      View more teachers
    </button>
  );
};

export default ViewMoreTeachers;
