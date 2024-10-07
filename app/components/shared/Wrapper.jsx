import React from "react";

const Wrapper = ({ children, className }) => {
  return (
    <div
      className={`mx-auto h-[82px] max-w-full px-3 lg:max-w-[1024px] xl:max-w-[1120px] ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
