import React from "react";
import classNames from "classnames";

import { IButtonType } from "../../typings";

import "./Button.scss";

interface IButtonProps {
  text: string;
  type?: IButtonType;
  className?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  inProgress?: boolean;
}

export const Button = ({
  text,
  type,
  className,
  disabled,
  onClick,
  inProgress = false,
}: IButtonProps): JSX.Element => {
  return (
    <button
      type={type}
      className={classNames(className, "btn", { loading: inProgress })}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="btn-text">{text}</span>
    </button>
  );
};
