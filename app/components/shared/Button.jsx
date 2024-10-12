import { FaAngleDown } from "react-icons/fa6";

const Button = ({ children, className, icon = false, style }) => {
  return (
    <button
      className={`flex h-14 items-center justify-center gap-2 rounded-md px-3 ${className}`}
      style={style}
    >
      {children} {icon && <FaAngleDown size={16} color="black" />}
    </button>
  );
};

export default Button;
