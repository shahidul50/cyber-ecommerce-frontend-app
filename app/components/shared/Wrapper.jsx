import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`mx-auto max-w-full px-3 lg:max-w-[1024px] lg:px-0 xl:max-w-[1120px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
