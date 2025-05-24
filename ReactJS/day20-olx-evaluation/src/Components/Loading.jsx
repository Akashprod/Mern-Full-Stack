import React from "react";
import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div style={{ display: "grid", gap: "20px" }}>
      <br />
      <Skeleton height={160} width={`60%`} />
      <Skeleton height={30} width={`60%`} />
      <Skeleton height={30} width={`60%`} />
      <Skeleton height={30} width={`60%`} />
    </div>
  );
};

export default Loading;
