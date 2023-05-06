import { MouseEventHandler, ReactNode } from "react";

import "./Button.css";

/**
 * Available button types
 *
 * BUTTON: The button is a clickable button
 * RESET: The button is a reset button, resets the form data to its initial value
 * SUBMIT: The button is a submit button, submits form data
 */

export const ButtonTypes = {
  BUTTON: "button",
  RESET: "reset",
  SUBMIT: "submit",
};

type ButtonProps = {
  children: ReactNode;
  className?: string;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type: "button" | "reset" | "submit";
};

const Button = ({
  children,
  className,
  disabled,
  onClick,
  type,
}: ButtonProps): JSX.Element => {
  return (
    <button
      className={className}
      disabled={disabled}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  disabled: false,
  type: ButtonTypes.BUTTON,
};

export default Button;