import React from "react";
import styles from "../Components/button.module.css";

const Button = ({ children, color, size, func }) => {
  return (
    <button
      data-testid="custom-button"
      className={`${styles[color]} ${styles[size]}`}
      onClick={func}
    >
      {children}
    </button>
  );
};

export default Button;
