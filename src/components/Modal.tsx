import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowModal } from "../redux/ModalSlice"; // Import the action
import { RootState } from "../redux/store";
import styles from "./Modal.module.css";

const Modal = () => {
  const showModal = useSelector((state: RootState) => state.modal.showModal);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setShowModal(false));
  };

  return (
    <>
      {showModal && (
        <div className={styles.modal}>
          <h1 onClick={handleCloseModal}>X</h1>
          <h3>text here</h3>
          <p>dasdsadsadsadasd</p>
        </div>
      )}
    </>
  );
};

export default Modal;
