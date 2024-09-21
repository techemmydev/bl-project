import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";
import ButtonStyles from "../ButtonComponents/Button.module.css";

const Button = ({
  children,
  style = {},
  hoverStyle = {},
  onClick = () => {},
  type = "submit",
  className = "",
}) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  const buttonStyles = isHovered ? { ...style, ...hoverStyle } : style;

  return (
    <button
      type={type}
      className={classnames(ButtonStyles.myButton, className)}
      style={buttonStyles}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  hoverStyle: PropTypes.object,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  className: PropTypes.string,
};

export default Button;
