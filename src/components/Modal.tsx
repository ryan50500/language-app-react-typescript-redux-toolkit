import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowModal } from "../redux/ModalSlice"; // Import the action
import { RootState } from "../redux/store";
import styles from "./Modal.module.css";

const Modal = () => {
  // the modal component
  const showModal = useSelector((state: RootState) => state.modal.showModal);
  // teacher data to display in modal
  const modalTeacherName = useSelector((state: RootState) => state.modalData.modalDataName);
  const modalTeacherExperience = useSelector((state: RootState) => state.modalData.modalDataExperience);
  const modalTeacherPrice = useSelector((state: RootState) => state.modalData.modalDataPrice);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setShowModal(false));
  };

  return (
    <>
      <div className={styles.modal}>
        <h1 onClick={handleCloseModal}>X</h1>
        <h3>{modalTeacherName}</h3>
        <h3>{modalTeacherExperience}</h3>
        <h3>{modalTeacherPrice}</h3>
      </div>
    </>
  );
};

export default Modal;
