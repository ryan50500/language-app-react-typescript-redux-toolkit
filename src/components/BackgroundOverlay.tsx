import React, { useEffect } from "react";
import styles from "./BackgroundOverlay.module.css";

const BackgroundOverlay: React.FC = () => {
  useEffect(() => {
    // Set body overflow to hidden
    document.body.style.overflow = "hidden";
    // Cleanup function to reset body overflow when the BackgroundOverlay unmounts
    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  return (
    <>
      <div className={styles.background__overlay}></div>;
    </>
  );
};

export default BackgroundOverlay;
