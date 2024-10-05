import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`mx-auto h-[88px] max-w-full lg:max-w-[1120px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
