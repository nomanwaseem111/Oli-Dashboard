import React from "react";

const Button = ({
  title,
  onClick,
  //   variant = "primary",
  className,
  icon,
  iconClassName,
  style,
  ...props
}) => {
  return (
    <button {...props} className={`${className} bg-buttonColor cursor-pointer`}>
      {title}
    </button>
  );
};

export default Button;
