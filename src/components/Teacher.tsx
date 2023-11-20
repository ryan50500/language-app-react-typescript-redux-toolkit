import React from "react";
import { useDispatch } from "react-redux";
import { setShowModal } from "../redux/ModalSlice";
import {
  setModalName,
  setModalEmail,
  setModalSkypeID,
  setModalPlatform,
  setModalWhatsApp,
} from "../redux/ModalDataSlice";
import TeacherInterface from "../interfaces/TeacherInterface";
import styles from "./Teacher.module.css";

interface TeacherProps {
  teacher: TeacherInterface;
}

const Teacher = ({ teacher }: TeacherProps) => {
  const dispatch = useDispatch();

  // open modal
  const openModal = () => {
    dispatch(setShowModal(true));
    // set modal data
    dispatch(setModalName(teacher.name));
    dispatch(setModalEmail(teacher.email));
    dispatch(setModalSkypeID(teacher.skypeID));
    dispatch(setModalPlatform(teacher.teachingPlatform));
    dispatch(setModalWhatsApp(teacher.whatsApp));
  };

  return (
    <div key={teacher.id} className={`${styles.card}`}>
      <div className={styles.teacher}>
        <h4 className={styles.teacher__name}>
          {teacher.name}
          <img style={{ paddingLeft: "10px", width: "34px" }} src={teacher.flag}></img>
        </h4>
        <h4>
          Teaches: {teacher.language}
          {teacher.native ? (
            <span
              style={{
                backgroundColor: "#daf2dc",
                color: "#007913",
                fontSize: "15px",
                marginLeft: "5px",
                padding: "5px 9px",
                borderRadius: "10px",
              }}
            >
              Native
            </span>
          ) : null}
        </h4>
        <h4>Experience: {teacher.experience}</h4>
        <h5>Country of birth: {teacher.country}</h5>
        <h5>Time available: {teacher.time}</h5>
        <h5>Days available: {teacher.days.join(" ")}</h5>
        <h5 className={styles.price}>
          Price: <strong>£{teacher.price}</strong> per hour
        </h5>
      </div>
      <div className={styles.teacher__contact}>
        <div className={styles.teacher__flex}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              style={{ fill: "#fdc425", height: "20px", width: "20px" }}
              viewBox="0 0 24 23"
              xmlns="http://www.w3.org/2000/svg"
              className="styles_RatingStarIcon__i7Hk3"
            >
              <path d="M23.97 8.721a.597.597 0 0 0-.507-.413l-7.744-.822-3.172-7.16c-.192-.435-.903-.435-1.095 0l-3.17 7.16-7.745.822a.601.601 0 0 0-.508.413.606.606 0 0 0 .17.635l5.785 5.248-1.616 7.667a.605.605 0 0 0 .586.729.595.595 0 0 0 .3-.081L12 19.003l6.747 3.916c.204.119.46.105.652-.035a.606.606 0 0 0 .234-.613l-1.616-7.668 5.786-5.248a.606.606 0 0 0 .168-.634z"></path>
            </svg>
            <span style={{ fontSize: "20px", fontWeight: "100", paddingLeft: "5px" }}>{teacher.rating}</span>
          </div>
          <div>
            <span style={{ fontSize: "20px", fontWeight: "100" }}>£{teacher.price}</span>
          </div>
        </div>
        <div className={styles.teacher__flex__baseline}>
          <div>
            <span style={{ fontSize: "15px", fontWeight: "100" }}>{teacher.reviews}</span>
            <span style={{ fontSize: "13.5px", color: "gray", paddingLeft: "5px" }}>reviews</span>
          </div>
          <span style={{ fontSize: "13.5px", color: "gray" }}>1-hour lesson</span>
        </div>
        <button className={styles.teacher__buttons} onClick={openModal}>
          View contact info
        </button>
      </div>
    </div>
  );
};

export default Teacher;
