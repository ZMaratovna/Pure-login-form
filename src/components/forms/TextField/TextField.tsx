import React from "react";
import classNames from "classnames";

import { IFieldType, IValidation } from "../../../typings";

import "./TextField.scss";

interface ITextFieldProps {
  isValid: boolean;
  isError: boolean;
  type: IFieldType;
  label: string;
  value: string;
  placeholder: string;
  info: IValidation;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}
export const TextField = ({
  isValid,
  isError,
  type,
  label,
  value,
  placeholder,
  info,
  onChange,
}: ITextFieldProps): JSX.Element => {
  return (
    <div className="form-group">
      <label htmlFor={type} className="form-group-label">
        {label}
      </label>
      <input
        className={classNames({ error: isError }, { correct: isValid })}
        type={type}
        name={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        required
      />
      {isError && <div className="form-group-error-msg">{info.message}</div>}
    </div>
  );
};
