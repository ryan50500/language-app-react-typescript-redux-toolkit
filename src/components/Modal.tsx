import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setShowModal } from "../redux/ModalSlice"; // Import the action
import { RootState } from "../redux/store";
import styles from "./Modal.module.css";

const Modal = () => {
  // the modal component
  const showModal = useSelector((state: RootState) => state.modal.showModal);
  // teacher data to display in modal
  const TeacherName = useSelector((state: RootState) => state.modalData.ModalName);
  const TeacherEmail = useSelector((state: RootState) => state.modalData.ModalEmail);
  const TeacherSkypeID = useSelector((state: RootState) => state.modalData.ModalSkypeID);
  const TeacherPlatform = useSelector((state: RootState) => state.modalData.ModalPlatform);
  const TeacherWhatsApp = useSelector((state: RootState) => state.modalData.ModalWhatsApp);

  const dispatch = useDispatch();

  const handleCloseModal = () => {
    dispatch(setShowModal(false));
  };

  return (
    <>
      <div className={styles.modal}>
        <div className={styles.modal__close} onClick={handleCloseModal}>
          <div className={styles.modal__close__outer}>
            <div className={styles.modal__close__inner}></div>
          </div>
        </div>
        <h3>{TeacherName}</h3>
        <h3>{TeacherEmail}</h3>
        <h3>{TeacherSkypeID}</h3>
        <h3>{TeacherPlatform}</h3>
        <h3>{TeacherWhatsApp}</h3>
      </div>
    </>
  );
};

export default Modal;
