"use Client";
import { FaAngleDown } from "react-icons/fa6";

const Button = ({
  children,
  icon = false,
  borderColor = "",
  hoverBgColor = "",
  hoverTextColor = "",
  textColor = "",
  width = "",
  borderWidth = "",
  bgColor = "",
  clickEvent = () => {},
}) => {
  return (
    <button
      className={`flex h-14 w-[--bg-width] items-center justify-center gap-2 rounded-md bg-[--bg-color] px-3 font-srProDisplay text-base font-medium text-[--text-color] hover:bg-[--hover-bg-color] hover:text-[--hover-text-color] *:hover:text-[--hover-text-color]`}
      style={{
        border: `${
          borderWidth === "" ? "0px" : borderWidth
        } solid ${borderColor}`,
        "--hover-bg-color": hoverBgColor !== "" ? hoverBgColor : bgColor,
        "--hover-text-color":
          hoverTextColor !== "" ? hoverTextColor : textColor,
        "--text-color": textColor,
        "--bg-color": bgColor,
        "--bg-width": width,
      }}
      onClick={clickEvent}
    >
      {children} {icon && <FaAngleDown size={16} />}
    </button>
  );
};

export default Button;
