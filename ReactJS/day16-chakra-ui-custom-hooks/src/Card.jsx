import React from "react";

const Card = ({ children, title, style }) => {
  return (
    <div
      style={{
        padding: "16px",
        border: "1px solid red",
        borderRadius: "8px",
        ...style,
      }}
    >
        {title && <h2>{title}</h2>}
        <p>{children}</p>
    </div>
  );
};

export default Card;
