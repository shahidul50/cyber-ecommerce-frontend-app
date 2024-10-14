"use Client";
import { FaAngleDown } from "react-icons/fa6";

const Button = ({
  children,
  icon = false,
  borderColor = "",
  hoverBgColor = "",
  hoverTextColor = "",
  textColor = "black",
  textSize = "16px",
  fontWeight = "400",
  width = "",
  height = "10px",
  borderWidth = "",
  bgColor = "",
  clickEvent = () => {},
  disabled = false,
}) => {
  return (
    <button
      className={`flex h-[--btn-height] w-[--btn-width] items-center justify-center gap-2 rounded-md bg-[--bg-color] px-3 font-srProDisplay font-[--font-weight] text-[--text-color] outline-none hover:bg-[--hover-bg-color] hover:text-[--hover-text-color] *:hover:text-[--hover-text-color]`}
      style={{
        border: `${
          borderWidth === "" ? "0px" : borderWidth
        } solid ${borderColor}`,
        "--hover-bg-color": hoverBgColor !== "" ? hoverBgColor : bgColor,
        "--hover-text-color":
          hoverTextColor !== "" ? hoverTextColor : textColor,
        "--text-color": textColor,
        "--bg-color": bgColor,
        "--btn-width": width,
        "--btn-height": height,
        "--font-weight": fontWeight,
        fontSize: textSize,
      }}
      onClick={clickEvent}
      disabled={disabled}
    >
      {children} {icon && <FaAngleDown size={16} />}
    </button>
  );
};

export default Button;
